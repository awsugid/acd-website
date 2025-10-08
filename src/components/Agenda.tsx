import { useState, useEffect } from 'react';

interface GridSession {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  isServiceSession: boolean;
  speakers: Array<{
    id: string;
    name: string;
  }>;
  room: string;
}

interface GridTimeSlot {
  slotStart: string;
  rooms: Array<{
    id: number;
    name: string;
    sessions: GridSession[];
  }>;
}

export default function Agenda() {
  const [gridData, setGridData] = useState<GridTimeSlot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://sessionize.com/api/v2/5vdlrudo/view/GridSmart')
      .then(response => response.json())
      .then(data => {
        setGridData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching agenda:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="agenda" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Agenda</h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="agenda" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Agenda
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="bg-slate-800/50 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-700/70">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Time</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Session 1</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Speaker 1</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Room 1</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Session 2</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Speaker 2</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Room 2</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-600/50">
                {(() => {
                  const allSessions = gridData.flatMap(timeSlot => 
                    timeSlot.rooms.flatMap(room => 
                      room.sessions.map(session => ({ ...session, roomName: room.name }))
                    )
                  );
                  
                  const sessionsByTime = {};
                  allSessions.forEach(session => {
                    const timeKey = `${session.startsAt}-${session.endsAt}`;
                    if (!sessionsByTime[timeKey]) {
                      sessionsByTime[timeKey] = [];
                    }
                    sessionsByTime[timeKey].push(session);
                  });
                  
                  return Object.entries(sessionsByTime).map(([timeKey, sessions], index) => {
                    const timeDisplay = `${new Date(sessions[0].startsAt).toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })} - ${new Date(sessions[0].endsAt).toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}`;
                    
                    return (
                      <tr key={index} className="hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4 text-orange-400 font-medium whitespace-nowrap">
                          {timeDisplay}
                        </td>
                        {[0, 1].map(sessionIndex => {
                          const session = sessions[sessionIndex];
                          return (
                            <>
                              <td key={`session-${sessionIndex}`} className="px-6 py-4">
                                {session ? (
                                  <div className={`font-semibold ${session.isServiceSession ? 'text-slate-400' : 'text-white'}`}>
                                    {session.title}
                                  </div>
                                ) : (
                                  <div className="text-slate-500">-</div>
                                )}
                              </td>
                              <td key={`speaker-${sessionIndex}`} className="px-6 py-4 text-slate-300">
                                {session 
                                  ? session.isServiceSession 
                                    ? session.description || '-'
                                    : session.speakers.length > 0 
                                      ? session.speakers.map(s => s.name).join(', ')
                                      : '-'
                                  : '-'
                                }
                              </td>
                              <td key={`room-${sessionIndex}`} className="px-6 py-4 text-slate-400 text-sm">
                                {session ? session.roomName : '-'}
                              </td>
                            </>
                          );
                        })}
                      </tr>
                    );
                  });
                })()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
    </section>
  );
}
