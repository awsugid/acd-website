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
    {
      href: "https://t.me/awsusergroupid",
      icon: "telegram",
      label: "Telegram",
      color: "from-blue-500 to-blue-700",
    },
    {
      href: "https://www.meetup.com/aws-ug-jakarta/",
      icon: "meetup",
      label: "Meetup",
      color: "from-red-500 to-red-700",
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
      <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900 to-purple-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section */}
            <div className="lg:col-span-2 space-y-6">
              <img
                src={"https://gudang.awscommunity.id/logo.png"}
                width={100}
                height={100}
                alt="AWS User Group Indonesia"
                className="w-16 h-16 sm:w-12 sm:h-12 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
              />
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
                      className={`group relative w-12 h-12 rounded-xl border border-white/10 p-3 hover:scale-110 hover:shadow-lg transition-all duration-20 ${social.icon === "meetup" ? "flex items-center justify-center" : ""}`}
                      aria-label={social.label}
                    >
                      <svg
                        className={`${social.icon === "meetup" ? "w-6 h-4" : "w-5 h-5 text-white"}`}
                        fill="currentColor"
                        viewBox={
                          social.icon === "meetup" ? "0 0 111 40" : "0 0 24 24"
                        }
                      >
                        {social.icon === "twitter" && (
                          <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.01z" />
                        )}
                        {social.icon === "facebook" && (
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        )}
                        {social.icon === "instagram" && (
                          <>
                            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.054-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.044.976.207 1.504.344 1.857.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.054.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.044-.976-.207-1.504-.344-1.857a3.09 3.09 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                          </>
                        )}
                        {social.icon === "linkedin" && (
                          <>
                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zm2-7a2 2 0 100 4 2 2 0 000-4z" />
                          </>
                        )}
                        {social.icon === "telegram" && (
                          <>
                            <path d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" />
                          </>
                        )}
                        {social.icon === "meetup" && (
                          <>
                            <path
                              d="M110.994 23.367a1.687 1.687 0 00-.11-.458c-.37-.962-2.054-.065-2.629.176-1.035.434-2.219 1.006-3.365.678-.317-.091-.224-.361 0-.499.112-.068 3.055-1.733 3.921-5.423 1.386-5.903-2.867-7.545-4.545-7.744-1.706-.202-3.609.061-4.411.384-2.273.913-2.866 2.943-3.023 4.159-.215 1.672-.24 4.59-.447 5.903-.136.865-.78 2.178-2.048 2.053-2.447-.241-3.571-1.18-3.493-2.722.054-1.084.039-1.3.38-3.704.293-2.06.478-2.551.478-3.022 0-1.349-1.813-1.621-2.419-1.014-.468.469-.585 1.426-.702 3.042-.11 1.519-.343 3.495-.644 4.7-.468 1.877-.656 2.014-1.083 2.551-.887 1.116-2.526.77-3.326.009-.47-.448-.534-.845-.443-2.16.091-1.315.306-3.606.608-5.995.263-2.09.082-2.404-.56-2.99-.597-.546-2.884-.465-3.943-.465-1.639 0-1.541.78-1.649 3.44-.047 1.161-.101 2.923-.217 4.287-.188 2.22-4.425 3.89-6.373 3.79-2.019-.104-2.213-3.873-2.34-4.75-.129-.876-.18-8.44.038-8.697.155-.18 1.37-.318 2.755-.589 3.067-.6 3.508-.994 3.512-1.954.002-.471-.028-1.13-.55-1.307-.306-.104-1.1-.222-2.153-.346-3.037-.358-3.465-.248-3.482-.633-.029-.674.035-1.971-.019-2.482C68.58.329 67.108-.093 65.45.017c-.327.021-.78.127-.816.565-.036.439-.033.777-.086 1.52-.117 1.651-.15 1.83-.79 1.827-.57-.003-5.312-.422-6.223-.13-.912.292-.875.913-.948 1.224-.073.31.09 2.173.182 2.977.091.803.267 1.896.376 2.06.11.165.452.631 1.404.512 3.234-.405 5.391-.894 5.829-1.003.437-.11.487-.165.492.182.002.197.084 4.146.098 5.319.023 2.006.362 7.817-5.044 8.718-2.249.375-4.357-.28-5.316-1.337-.544-.6-.277-.678-.037-1.068.364-.593 3.402-4.162.856-7.864-1.501-2.184-5.101-2.357-6.408-1.79-1.013.439-1.832 1.8-1.99 3.46-.488 5.12 2.442 8.287 2.556 8.482.136.234-.376.988-2.166 1.25-2.4.352-6.085-2.543-5.99-2.92.047-.18 1.679-2.853 1.718-5.436.013-.879-.277-2.036-.878-3.205-.602-1.169-2.496-2.973-4.546-2.577-4.824.93-4.274 5.696-3.94 6.997.694 2.69 2.319 5.064 2.584 5.539.361.645-10.207 4.839-10.616.913-.407-3.892 5.371-12.284 4.916-15.54-.41-2.933-2.382-3.547-4.097-3.577-1.667-.03-2.107.236-2.671.564-.325.189-.792.563-1.44-.055-.431-.411-.716-.699-1.172-1.064-.231-.185-.601-.42-1.221-.511-.62-.091-1.422 0-1.932.219-.51.22-.912.603-1.331.968-.42.365-1.483 1.559-2.474 1.119-.43-.191-1.887-.92-2.937-1.375-2.029-.88-4.955.545-6.008 2.421C3.815 10.193.72 21.161.252 22.607c-1.052 3.248 1.33 5.896 4.545 5.744 1.358-.065 2.263-.562 3.121-2.126.496-.903 5.156-13.097 5.502-13.681.252-.425 1.09-.984 1.8-.62.712.366.853 1.128.748 1.845-.17 1.16-3.456 8.6-3.582 9.441-.215 1.432.464 2.228 1.947 2.306 1.016.053 2.029-.313 2.833-1.832.45-.849 5.631-11.248 6.09-11.942.504-.762.91-1.013 1.422-.986.399.02 1.036.123.876 1.319-.156 1.172-4.322 8.803-4.76 10.671-.663 2.834 1.151 6.646 6.01 6.821 2.414.088 8.002-.966 11.15-3.357 1.143-.868.841-.943 1.553-.311 1.025.909 2.927 2.189 4.8 2.189 4.253 0 7.359-2.66 7.5-2.756a.111.111 0 01.145.017c.258.28 2.895 1.751 4.743 1.812 4.399.145 7.004-2.3 7.988-3.451a22.03 22.03 0 001.512-1.987.157.157 0 01.246-.018c.263.29 2.247 3.942 6.188 3.438 2.198-.281 5.467-2.139 5.696-2.39a.1.1 0 01.17.035c.115.318.618 2.11 2.633 3.535 1.652 1.169 4.832 1.403 6.243.626 1.17-.644 1.639-1.056 2.458-1.876.352-.353.888-.71 1.854-.505 1.08.229 3.934.735 4.116.822.205.097.237.47.176.86-.098.614-.33 2.766-.566 4.775-.237 2.009-.994 8.712.8 8.96 1.084.15 2.025-.878 2.274-1.881.624-2.517.738-5.35 1.148-7.78.49-2.893.684-3.704.86-4.027.146-.268.146-.205 2.167-.033 1.4.12 2.536.315 4.223.079 1.398-.196 4.267-1.256 4.113-2.976"
                              fill="#F64060"
                            />
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
                  {/*<a
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
                  </a>*/}
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
