import { useState, useEffect } from 'react';
import { speakersStore } from '../stores/speakersStore';

interface Session {
  id: string;
  title: string;
  description: string;
  startsAt?: string;
  endsAt?: string;
  room?: string;
  speakers: Array<{
    id: string;
    name: string;
  }>;
  categories: Array<{
    id: number;
    name: string;
    categoryItems: Array<{
      id: number;
      name: string;
    }>;
  }>;
}

interface SessionGroup {
  groupId: string | null;
  groupName: string;
  sessions: Session[];
}

export default function Sessions() {
  const [sessionGroups, setSessionGroups] = useState<SessionGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [categories, setCategories] = useState<string[]>(['All']);
  const [levels, setLevels] = useState<string[]>(['All']);
  const [languages, setLanguages] = useState<string[]>(['All']);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  useEffect(() => {
    Promise.all([
      fetch('https://sessionize.com/api/v2/5vdlrudo/view/Sessions'),
      speakersStore.getSpeakers()
    ])
      .then(([sessionsResponse]) => sessionsResponse.json())
      .then(sessionsData => {
        setSessionGroups(sessionsData);

        // Extract unique categories, levels, and languages
        const allCategories = new Set<string>(['All']);
        const allLevels = new Set<string>(['All']);
        const allLanguages = new Set<string>(['All']);

        sessionsData.forEach((group: SessionGroup) => {
          group.sessions.forEach(session => {
            session.categories.forEach(category => {
              if (category.name === 'Category') {
                category.categoryItems.forEach(item => allCategories.add(item.name));
              } else if (category.name === 'Level') {
                category.categoryItems.forEach(item => allLevels.add(item.name));
              } else if (category.name === 'Language') {
                category.categoryItems.forEach(item => allLanguages.add(item.name));
              }
            });
          });
        });

        setCategories(Array.from(allCategories));
        setLevels(Array.from(allLevels));
        setLanguages(Array.from(allLanguages));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching sessions:', error);
        setLoading(false);
      });
  }, []);

  const getSpeakerPhoto = (speakerId: string) => {
    return speakersStore.getSpeakerPhoto(speakerId);
  };

  const filteredSessions = sessionGroups.flatMap(group =>
    group.sessions.filter(session => {
      const categoryMatch = selectedCategory === 'All' || session.categories.some(category =>
        category.name === 'Category' && category.categoryItems.some(item => item.name === selectedCategory)
      );
      const levelMatch = selectedLevel === 'All' || session.categories.some(category =>
        category.name === 'Level' && category.categoryItems.some(item => item.name === selectedLevel)
      );
      const languageMatch = selectedLanguage === 'All' || session.categories.some(category =>
        category.name === 'Language' && category.categoryItems.some(item => item.name === selectedLanguage)
      );
      return categoryMatch && levelMatch && languageMatch;
    })
  );

  if (loading) {
    return (
      <section id="sessions" className="py-20 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Sessions</h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="sessions" className="py-20 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Sessions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-orange-500 focus:outline-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Level Filter */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Level</label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-orange-500 focus:outline-none"
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          {/* Language Filter */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Language</label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-orange-500 focus:outline-none"
            >
              {languages.map(language => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSessions.map((session) => (
            <div 
              key={session.id} 
              className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700/70 transition-colors cursor-pointer"
              onClick={() => setSelectedSession(session)}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-white">{session.title}</h3>
                <div className="text-right ml-4">
                  {session.startsAt && session.endsAt && (
                    <div className="text-orange-400 text-sm font-medium">
                      {new Date(session.startsAt).toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })} - {new Date(session.endsAt).toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  )}
                  {session.room && (
                    <div className="text-slate-400 text-xs mt-1">{session.room}</div>
                  )}
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4 overflow-hidden text-ellipsis" style={{display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical'}}>
                {session.description}
              </p>

              {session.speakers.length > 0 && (
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {session.speakers.slice(0, 3).map((speaker) => {
                      const photoUrl = getSpeakerPhoto(speaker.id);
                      return photoUrl ? (
                        <img
                          key={speaker.id}
                          src={photoUrl}
                          alt={speaker.name}
                          className="w-8 h-8 rounded-full border-2 border-slate-700 object-cover"
                        />
                      ) : (
                        <div
                          key={speaker.id}
                          className="w-8 h-8 rounded-full border-2 border-slate-700 bg-orange-500 flex items-center justify-center text-white text-xs font-semibold"
                        >
                          {speaker.name.charAt(0)}
                        </div>
                      );
                    })}
                  </div>
                  <span className="text-orange-400 text-sm">
                    {session.speakers.map(speaker => speaker.name).join(', ')}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredSessions.length === 0 && (
          <div className="text-center text-slate-400 py-12">
            No sessions found for the selected filters.
          </div>
        )}

        {/* Modal */}
        {selectedSession && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedSession(null)}>
            <div className="bg-slate-800 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-white pr-4">{selectedSession.title}</h2>
                <button 
                  onClick={() => setSelectedSession(null)}
                  className="text-slate-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">{selectedSession.description}</p>
              
              {selectedSession.speakers.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Speakers</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedSession.speakers.map((speaker) => {
                      const photoUrl = getSpeakerPhoto(speaker.id);
                      return (
                        <div key={speaker.id} className="flex items-center gap-3">
                          {photoUrl ? (
                            <img
                              src={photoUrl}
                              alt={speaker.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white text-lg font-semibold">
                              {speaker.name.charAt(0)}
                            </div>
                          )}
                          <span className="text-orange-400">{speaker.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {selectedSession.categories.map(category => 
                  category.categoryItems.map(item => (
                    <span key={`${category.id}-${item.id}`} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
                      {item.name}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
