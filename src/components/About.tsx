export default function About() {
  const features = [
    {
      icon: "users",
      title: "Professional Networking",
      description:
        "Connect with industry experts and expand your professional network across the region.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "zap",
      title: "Up-to-Date Knowledge",
      description:
        "Stay ahead with insights into the latest AWS technologies and cloud innovations.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "code2",
      title: "Hands-on Learning",
      description:
        "Engage in interactive sessions, workshops, and gain practical cloud experience.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: "lightbulb",
      title: "Innovation Inspiration",
      description:
        "Discover fresh ideas and cutting-edge solutions to drive innovation in your projects.",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Photo Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://gudang.awscommunity.id/hero-bg.jpg')`,
        }}
      ></div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Welcome to AWS Community Day
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Description */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-8">
                At{" "}
                <span className="text-orange-400 font-semibold">
                  AWS Community Day Indonesia 2025
                </span>
                , delve into the latest trends, innovations, and best practices
                in cloud computing with Amazon Web Services.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Join us for insightful sessions, engaging discussions, hands-on
                workshops, and valuable networking opportunities—all designed to
                enhance your expertise and mastery of AWS solutions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-1">
                    200+
                  </div>
                  <div className="text-sm text-gray-400">Attendees</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-1">
                    5+
                  </div>
                  <div className="text-sm text-gray-400">Speakers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    8+
                  </div>
                  <div className="text-sm text-gray-400">Hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-20 hover:transform hover:scale-105 hover:shadow-2xl h-full">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-20 flex items-center justify-center`}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      {feature.icon === "users" && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
                        />
                      )}
                      {feature.icon === "zap" && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m13 2-3 6h5l-3 6"
                        />
                      )}
                      {feature.icon === "code2" && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m18 16 4-4-4-4M6 8l-4 4 4 4"
                        />
                      )}
                      {feature.icon === "lightbulb" && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12a3 3 0 1 1 6 0c0 2-3 3-3 3s-3-1-3-3M9 21h6M12 3v1"
                        />
                      )}
                    </svg>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 transition-all duration-20">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        {/*<div className="text-center mt-20">
          <div className="bg-gradient-to-r from-orange-500/20 to-pink-600/20 backdrop-blur-xl border border-orange-400/20 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Level Up Your AWS Skills?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Don't miss this opportunity to connect with the AWS community and
              advance your cloud computing expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#register"
                className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-20 shadow-lg hover:shadow-xl"
              >
                Secure Your Spot
              </a>
              <a
                href="#agenda"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all duration-20"
              >
                View Agenda
              </a>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  );
}
