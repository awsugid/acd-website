export default function Footer() {
  const socialLinks = [
    {
      href: "https://twitter.com/AWSUserGroupID/",
      icon: "twitter",
      label: "Twitter",
      color: "from-blue-400 to-blue-600",
    },
    {
      href: "https://web.facebook.com/groups/awsindonesia",
      icon: "facebook",
      label: "Facebook",
      color: "from-blue-600 to-blue-800",
    },
    {
      href: "https://instagram.com/awsugid",
      icon: "instagram",
      label: "Instagram",
      color: "from-pink-500 to-purple-600",
    },
    {
      href: "https://www.linkedin.com/company/awsugid",
      icon: "linkedin",
      label: "LinkedIn",
      color: "from-blue-500 to-blue-700",
    },
  ];

  const quickLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#cfp", label: "Call for Papers" },
    { href: "#sponsor", label: "Sponsors" },
  ];

  return (
    <footer id="footer" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900 to-purple-900/50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <a
                  href="https://awscommunity.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 group"
                >
                  <div>
                    <span className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 transition-all duration-20">
                      AWS User Group Indonesia
                    </span>
                  </div>
                </a>
              </div>

              <p className="text-gray-300 leading-relaxed text-base max-w-md">
                AWS User Group Indonesia is a vibrant community of cloud
                enthusiasts, comprising user groups from Medan, Jakarta, Malang,
                and Surabaya. We're passionate about sharing knowledge and
                advancing cloud computing across Indonesia.
              </p>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} p-3 hover:scale-110 hover:shadow-lg transition-all duration-20`}
                      aria-label={social.label}
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        {social.icon === "twitter" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.01z"
                          />
                        )}
                        {social.icon === "facebook" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          />
                        )}
                        {social.icon === "instagram" && (
                          <>
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                            />
                            <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </>
                        )}
                        {social.icon === "linkedin" && (
                          <>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                            />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </>
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-base mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-20 flex items-center space-x-2 group"
                    >
                      <svg
                        className="w-4 h-4 group-hover:text-orange-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14m-7-7 7 7-7 7"
                        />
                      </svg>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Contact */}
            <div>
              {/* Contact Info */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h5 className="text-white font-semibold text-sm mb-4 flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-orange-400"
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
                </h5>
                <div className="space-y-3 text-sm">
                  <a
                    href="https://wa.me/+6285259044226"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-20"
                  >
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      />
                    </svg>
                    <span>+62 8525 9044 226</span>
                  </a>
                  <a
                    href="mailto:awsugid@gmail.com"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-20"
                  >
                    <svg
                      className="w-4 h-4 text-blue-400"
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
                    <span>awsugid@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 AWS Community Day Indonesia. Organized with ❤️ by{" "}
              <a
                href="https://awscommunity.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors duration-20"
              >
                AWS User Group Indonesia
              </a>{" "}
              🇮🇩
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
