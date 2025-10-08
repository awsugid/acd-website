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

        <div className="overflow-x-auto">
          <table className="w-full bg-slate-800/50 rounded-lg overflow-hidden">
            <thead className="bg-slate-700/70">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Time</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Session</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Speaker(s)</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Room</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-600/50">
              {gridData.map((timeSlot, index) => 
                timeSlot.rooms.map(room => 
                  room.sessions.map((session, sessionIndex) => (
                    <tr key={session.id} className="hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4 text-orange-400 font-medium whitespace-nowrap">
                        {new Date(session.startsAt).toLocaleTimeString('en-US', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })} - {new Date(session.endsAt).toLocaleTimeString('en-US', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <div className={`font-semibold ${session.isServiceSession ? 'text-slate-400' : 'text-white'}`}>
                          {session.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-300">
                        {session.speakers.length > 0 
                          ? session.speakers.map(s => s.name).join(', ')
                          : '-'
                        }
                      </td>
                      <td className="px-6 py-4 text-slate-400 text-sm">
                        {room.name}
                      </td>
                    </tr>
                  ))
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
    </section>
  );
}
