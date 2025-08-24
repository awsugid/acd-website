interface Album {
  link: string;
  title: string;
}

interface PreviousCommunityDayProp {
  albums: Album[];
}

export default function PreviousCommunityDay({
  albums,
}: PreviousCommunityDayProp) {
  return (
    <section
      id="previous-community-day"
      className="relative py-24 overflow-hidden"
    >
      {/* Photo Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://gudang.awscommunity.id/acd24.jpg')`,
        }}
      ></div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75"></div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Previous Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Take a look back at our amazing AWS Community Day events and see the
            incredible moments we've shared together.
          </p>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {albums.map((album, index) => (
            <a
              key={index}
              href={album.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl block cursor-pointer"
            >
              {/* Card Content */}
              <div className="p-8 sm:p-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 p-4 mb-6 group-hover:scale-110 transition-transform duration-20 mx-auto flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 transition-all duration-20">
                  {album.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-300 text-center mb-8 leading-relaxed">
                  Browse through memorable moments, inspiring sessions, and
                  networking highlights from {album.title.toLowerCase()}.
                </p>

                {/* CTA Button */}
                <div className="text-center">
                  <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-20 shadow-lg hover:shadow-xl">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                      />
                    </svg>
                    <span>View Photos</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        {/*<div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-teal-600/20 backdrop-blur-xl border border-green-400/20 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-teal-600 p-4 mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Join Us This Year!
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Don't miss the opportunity to be part of AWS Community Day
              Indonesia 2025 and create new memories with fellow cloud
              enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#register"
                className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-20 shadow-lg hover:shadow-xl"
              >
                Register Now
              </a>
              <a
                href="#about"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all duration-20"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  );
}
