import { useState } from "react";

interface Faq {
  question: string;
  answer: string;
}

interface FaqProp {
  questionList: Faq[];
}

export default function Faq({ questionList }: FaqProp) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-24 overflow-hidden bg-hero-gradient"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Got questions? We've got answers. Find everything you need to know
            about AWS Community Day Indonesia.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {questionList.map((faq, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-20"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 sm:p-8 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-400/50 rounded-2xl transition-all duration-20"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F5C063] group-hover:to-[#FF9C5F]">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center transform transition-transform duration-20 ${openIndex === index ? "rotate-45" : ""}`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 5v14M5 12h14"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <div className="border-t border-white/10 pt-6">
                    <div
                      className="text-gray-300 leading-relaxed prose prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-pink-600/20 backdrop-blur-xl border border-orange-400/20 rounded-3xl p-8 sm:p-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 p-4 mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                />
                <path d="M12 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-base text-gray-200 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you
              with any additional questions.
            </p>
            <a
              href="mailto:awsugid@gmail.com"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:text-white/80"
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
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2 2V6c0-1.1.9-2 2-2z"
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
    </section>
  );
}
