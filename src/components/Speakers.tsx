import { useState, useEffect } from 'react';
import { speakersStore } from '../stores/speakersStore';

export default function Speakers() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null); // speaker currently shown in modal
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    speakersStore.getSpeakers()
      .then(data => {
        setSpeakers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching speakers:', error);
        setLoading(false);
      });
  }, []);

  // lock body scroll when modal is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev || '';
      };
    }
  }, [isOpen]);

  // close on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setSelected(null);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  function openModal(speaker) {
    setSelected(speaker);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelected(null);
  }

  if (loading) {
    return (
      <section id="speakers" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Speakers</h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="speakers" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Our Speakers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full mb-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700/70 transition-colors cursor-pointer"
              onClick={() => openModal(speaker)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openModal(speaker);
              }}
              aria-label={`Open bio for ${speaker.fullName}`}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={speaker.profilePicture}
                  alt={speaker.fullName}
                  className="w-24 h-24 rounded-full object-cover mb-4 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(speaker);
                  }}
                />
                <h3 className="text-xl font-semibold text-white mb-2">{speaker.fullName}</h3>
                <p className="text-orange-400 text-sm font-medium mb-3">{speaker.tagLine}</p>

                {/* Card bio: clamp to 3 lines */}
                <p
                  className="text-slate-300 text-sm mb-4"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {speaker.bio}
                </p>

                <div className="flex space-x-3">
                  {speaker.links.slice(0, 3).map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 transition-colors"
                      title={link.title}
                      onClick={(e) => {
                        // allow social link to be clicked without opening the modal
                        e.stopPropagation();
                      }}
                    >
                      {link.linkType === 'LinkedIn' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )}
                      {link.linkType === 'Twitter' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      )}
                      {link.linkType === 'Blog' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="speaker-modal-title"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Dialog panel */}
          <div className="relative z-10 max-w-3xl w-full mx-4 bg-slate-800/95 rounded-2xl p-6 md:p-8 shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-slate-300 hover:text-white"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
              <img
                src={selected.profilePicture}
                alt={selected.fullName}
                className="w-28 h-28 rounded-full object-cover mb-4 md:mb-0"
              />
              <div className="text-center md:text-left">
                <h3 id="speaker-modal-title" className="text-2xl font-bold text-white">
                  {selected.fullName}
                </h3>
                {selected.tagLine && <p className="text-orange-400 text-sm font-medium mt-2">{selected.tagLine}</p>}

                <div className="flex mt-3 space-x-3 justify-center md:justify-start">
                  {selected.links && selected.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      <span className="sr-only">{link.title || link.linkType}</span>
                      {link.linkType === 'LinkedIn' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )}
                      {link.linkType === 'Twitter' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      )}
                      {link.linkType === 'Blog' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>

                <p className="text-slate-300 text-sm mt-4">
                  {selected.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
