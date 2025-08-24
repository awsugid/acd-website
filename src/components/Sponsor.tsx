import HeroBackground from "../images/acd23.jpg?url";

export default function Sponsor({
  currentYear,
  sponsorProposal,
}: {
  currentYear: number;
  sponsorProposal: string;
}) {
  const sponsorTiers = [
    {
      name: "Platinum",
      price: "Contact Us",
      color: "from-gray-200 to-gray-400",
      features: [
        "Prime booth location",
        "15 Minutes Sponsored Talk",
        "1 Speaker Slot",
        "Branding Everywhere",
      ],
      icon: "award",
    },
    {
      name: "Gold",
      price: "Contact Us",
      color: "from-yellow-400 to-yellow-600",
      features: [
        "Premium booth location",
        "15 Minutes Sponsored Talk",
        "Branding Onsite & Offsite",
      ],
      icon: "award",
    },
    {
      name: "Silver",
      price: "Contact Us",
      color: "from-gray-500 to-gray-700",
      features: ["Standard booth location", "Branding Onsite & Website"],
      icon: "award",
    },
    {
      name: "Community",
      price: "Contact Us",
      color: "from-orange-500 to-orange-700",
      features: ["Promotional Video"],
      icon: "award",
    },
  ];

  return (
    <section id="sponsor" className="relative py-24 overflow-hidden">
      {/* Photo Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HeroBackground})`,
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
            Partner With Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join us as a sponsor for{" "}
            <span className="text-orange-400 font-semibold">
              AWS Community Day Indonesia {currentYear}
            </span>
            ! Your support will make a huge impact and help create an
            unforgettable experience for all attendees.
          </p>
        </div>

        {/* Sponsorship Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sponsorTiers.map((tier, index) => (
            <div
              key={index}
              className={`group relative ${
                index === 0 ? "md:scale-105 md:z-10" : ""
              }`}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 border-2 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl h-full">
                {/* Tier Header */}
                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tier.color} p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-20 flex items-center justify-center`}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      {tier.icon === "award" && (
                        <>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47L12 18l-4.182 3.886a.5.5 0 0 1-.81-.47L8.523 12.89"
                          />
                          <circle cx="12" cy="8" r="6" />
                        </>
                      )}
                    </svg>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${tier.color}`}
                  >
                    {tier.name}
                  </h3>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <svg
                        className="w-5 h-5 text-green-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <a
                    href="mailto:awsugid@gmail.com"
                    className={`inline-block w-full bg-gradient-to-r ${tier.color} text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-20 transform hover:scale-105 hover:text-slate-100`}
                  >
                    Choose {tier.name}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Why Sponsor Us?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                200+ Attendees
              </h4>
              <p className="text-sm sm:text-base text-gray-300">
                Connect with cloud professionals and decision makers
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Brand Visibility
              </h4>
              <p className="text-sm sm:text-base text-gray-300">
                Showcase your brand to the AWS community
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-heart-handshake-icon lucide-heart-handshake"
                >
                  <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Networking</h4>
              <p className="text-sm sm:text-base text-gray-300">
                Build valuable business relationships
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-sparkles-icon lucide-sparkles"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                  <path d="M20 2v4" />
                  <path d="M22 4h-4" />
                  <circle cx="4" cy="20" r="2" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Industry Leadership
              </h4>
              <p className="text-sm sm:text-base text-gray-300">
                Position your company as a cloud leader
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-3xl p-8 sm:p-12">
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Ready to Make an Impact?
            </h4>
            <p className="text-base sm:text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create the perfect sponsorship package
              for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={sponsorProposal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-orange-600 hover:text-orange-700 font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-20 shadow-lg hover:shadow-xl"
              >
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
                    d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
                  />
                </svg>
                <span>Download Proposal</span>
              </a>
              <a
                href="mailto:awsugid@gmail.com"
                className="inline-flex items-center space-x-3 bg-white/20 hover:text-white hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-8 rounded-full transition-all duration-20"
              >
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
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m22 6l-10 7L2 6"
                  />
                </svg>
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
