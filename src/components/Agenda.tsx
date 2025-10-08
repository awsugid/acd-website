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
          <div>
            <table className="w-full">
              {(() => {
                // Get unique rooms
                const allRooms = [];
                gridData.forEach(timeSlot => {
                  timeSlot.rooms.forEach(room => {
                    if (!allRooms.find(r => r.name === room.name)) {
                      allRooms.push(room);
                    }
                  });
                });
                
                // Get all sessions grouped by time
                const sessionsByTime = {};
                gridData.forEach(timeSlot => {
                  timeSlot.rooms.forEach(room => {
                    room.sessions.forEach(session => {
                      const timeKey = `${session.startsAt}-${session.endsAt}`;
                      if (!sessionsByTime[timeKey]) {
                        sessionsByTime[timeKey] = {};
                      }
                      sessionsByTime[timeKey][room.name] = session;
                    });
                  });
                });
                
                return (
                  <>
                    <thead className="bg-slate-700/70">
                      <tr>
                        <th className="px-2 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-white">Time</th>
                        {allRooms.map(room => (
                          <th key={room.id} className="px-2 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-white">{room.name}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-600/50">
                      {Object.entries(sessionsByTime).map(([timeKey, roomSessions], index) => {
                        const firstSession = Object.values(roomSessions)[0];
                        const timeDisplay = `${new Date(firstSession.startsAt).toLocaleTimeString('en-US', { 
                          hour: '2-digit', 
                          minute: '2-digit',
                          hour12: false 
                        })} - ${new Date(firstSession.endsAt).toLocaleTimeString('en-US', { 
                          hour: '2-digit', 
                          minute: '2-digit',
                          hour12: false 
                        })}`;
                        
                        return (
                          <tr key={index} className="hover:bg-slate-700/30 transition-colors">
                            <td className="px-2 sm:px-6 py-4 text-orange-400 font-medium text-xs sm:text-sm">
                              {timeDisplay}
                            </td>
                            {allRooms.map(room => {
                              const session = roomSessions[room.name];
                              return (
                                <td key={room.id} className="px-2 sm:px-6 py-4">
                                  {session ? (
                                    <div>
                                      <div className={`font-semibold mb-1 text-xs sm:text-sm ${session.isServiceSession ? 'text-slate-400' : 'text-white'}`}>
                                        {session.title}
                                      </div>
                                      <div className="text-xs sm:text-sm text-slate-300">
                                        {session.isServiceSession 
                                          ? session.description || '-'
                                          : session.speakers.length > 0 
                                            ? session.speakers.map(s => s.name).join(', ')
                                            : '-'
                                        }
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="text-slate-500">-</div>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </>
                );
              })()}
            </table>
          </div>
        </div>
      </div>
      
      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
    </section>
  );
}
