function OpenCfp({ currentYear }: { currentYear: number }) {
  const topics = [
    "Introduction to AWS Cloud Services",
    "Building Scalable Applications on AWS",
    "Enhancing Data Analytics with AWS",
    "Cloud Security Best Practices",
    "AI and Machine Learning Applications",
    "Serverless Architecture on AWS",
    "IoT Solutions using AWS",
    "Cost Optimization Strategies",
    "DevOps and CI/CD with AWS",
    "Case Studies and Industry Insights",
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-orange-500/20 to-pink-600/20 backdrop-blur-xl border border-orange-400/20 rounded-3xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
              Calling All Experts!
            </span>
          </h3>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
            We're thrilled to announce AWS Community Day Indonesia and are
            seeking dynamic speakers to share their AWS insights and best
            practices. This is a fantastic opportunity to showcase your
            expertise and connect with fellow AWS enthusiasts in the
            Indonesian-speaking community.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Description */}
        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-3 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
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
              <h4 className="text-xl font-bold text-white">Who Can Apply?</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              We invite submissions from diverse speakers, whether you're an
              AWS-certified professional, developer, researcher, or cloud
              enthusiast.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <svg
                  className="w-5 h-5 text-green-400"
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
                <span>AWS Certified Professionals</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <svg
                  className="w-5 h-5 text-green-400"
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
                <span>Cloud Developers & Architects</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <svg
                  className="w-5 h-5 text-green-400"
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
                <span>Industry Researchers</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <svg
                  className="w-5 h-5 text-green-400"
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
                <span>Cloud Enthusiasts</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 p-3 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white">Language Options</h4>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Feel free to submit sessions in{" "}
              <span className="text-orange-400 font-semibold">
                Bahasa Indonesia
              </span>{" "}
              or <span className="text-pink-400 font-semibold">English</span>{" "}
              (or even both if you don't mind)!
            </p>
          </div>
        </div>

        {/* Right Column: Topics */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 p-3 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
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
            </div>
            <h4 className="text-xl font-bold text-white">Featured Topics</h4>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-20 group"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 group-hover:scale-125 transition-transform duration-20"></div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-20">
                  {topic}
                </span>
              </div>
            ))}
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-400/30">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 animate-pulse"></div>
              <span className="text-sm text-orange-300 font-semibold">
                And much more!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-orange-500 to-pink-600 rounded-3xl p-8 sm:p-12">
          <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Ready to Share Your Expertise?
          </h4>
          <p className="text-base text-orange-100 mb-8 max-w-2xl mx-auto">
            Don't miss out on this opportunity to connect with the AWS community
            and inspire fellow cloud enthusiasts!
          </p>
          <a
            href={`https://sessionize.com/aws-community-day-indonesia-${currentYear}`}
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
                d="m12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <span>Submit Your Proposal</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function CloseCfp({ currentYear }: { currentYear: number }) {
  return (
    <div className="text-center space-y-12">
      {/* Thank You Hero */}
      <div className="bg-gradient-to-r from-green-500/20 to-teal-600/20 backdrop-blur-xl border border-green-400/20 rounded-3xl p-8 sm:p-12">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-teal-500 p-4 mx-auto mb-6 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            />
          </svg>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
            Thank You!
          </span>
        </h3>

        <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8">
          A heartfelt thank you to everyone who submitted their session
          proposals for AWS Community Day Indonesia {currentYear}! Your
          enthusiasm and expertise are what make our community truly special,
          and we look forward to an inspiring event together!
        </p>

        <a
          href={`https://sessionize.com/aws-community-day-indonesia-${currentYear}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-20 shadow-lg hover:shadow-xl"
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
              d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
            />
          </svg>
          <span>View Submissions</span>
        </a>
      </div>

      {/* Contact Section */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-3 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
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
          </div>
          <h4 className="text-xl font-bold text-white">Need Help?</h4>
        </div>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
          For any further clarification, questions, or ideas, don't hesitate to
          get in touch with us.
        </p>

        <a
          href="mailto:awsugid@gmail.com"
          className="inline-flex items-center space-x-3 text-orange-400 hover:text-orange-300 font-semibold transition-colors duration-20"
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
              d="m12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          <span>awsugid@gmail.com</span>
        </a>
      </div>
    </div>
  );
}

export default function Cfp({
  currentYear,
  isOpen,
}: {
  currentYear: number;
  isOpen: boolean;
}) {
  return (
    <section
      id="cfp"
      className="relative py-24 overflow-hidden bg-hero-gradient"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Call For Papers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Content */}
        {isOpen ? (
          <OpenCfp currentYear={currentYear} />
        ) : (
          <CloseCfp currentYear={currentYear} />
        )}
      </div>
    </section>
  );
}
