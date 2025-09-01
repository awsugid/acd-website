import AwsUgLogo from "../images/logo.png?url";
import { useState, useEffect } from "react";

export default function Header({ isOpenCfp }: { isOpenCfp: boolean }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest("header")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    ...(isOpenCfp ? [{ href: "#cfp", label: "CFP" }] : []),
    ...(!isOpenCfp
      ? [
          { href: "#sessions", label: "Sessions" },
          { href: "#speakers", label: "Speakers" },
          { href: "#agenda", label: "Agenda" },
        ]
      : []),
    { href: "#sponsor", label: "Sponsors" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-100 bg-slate-900/30 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="https://awscommunity.id"
                className="flex items-center space-x-3 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative">
                  <img
                    src={"https://gudang.awscommunity.id/logo.png"}
                    width={40}
                    height={40}
                    alt="AWS User Group Indonesia"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-white font-semibold text-lg">
                    AWS User Group
                  </div>
                  <div className="text-orange-300 text-sm font-medium">
                    Indonesia
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm relative group"
                >
                  {item.label}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-500 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="relative z-50 inline-flex items-center justify-center w-10 h-10 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 active:scale-95"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute left-1/2 top-1/2 block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "-translate-x-1/2 -translate-y-1/2 rotate-45"
                        : "-translate-x-1/2 -translate-y-2"
                    }`}
                  ></span>
                  <span
                    className={`absolute left-1/2 top-1/2 block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "opacity-0"
                        : "-translate-x-1/2 -translate-y-1/2"
                    }`}
                  ></span>
                  <span
                    className={`absolute left-1/2 top-1/2 block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "-translate-x-1/2 -translate-y-1/2 -rotate-45"
                        : "-translate-x-1/2 translate-y-1"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Moved outside header for better positioning */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-16 sm:top-20 z-[9999] px-4 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0 pointer-events-auto"
            : "opacity-0 invisible -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="py-4 space-y-2 bg-slate-800/95 backdrop-blur-lg rounded-xl mt-2 border border-white/10 shadow-2xl max-h-[calc(100vh-6rem)] overflow-y-auto">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(false);
              }}
              className="block text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 mx-2 rounded-lg font-medium transition-all duration-300 cursor-pointer active:scale-95"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isMobileMenuOpen
                  ? "slideInFromTop 0.3s ease-out forwards"
                  : "none",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <style>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
