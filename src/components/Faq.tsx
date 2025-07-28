interface Faq {
  question: string;
  answer: string;
}

interface FaqProp {
  questionList: Faq[];
}

export default function Faq({ questionList }: FaqProp) {
  return (
    <section id="faq" className="faq section">
      <h2 className="section-title" data-aos="fade-up">
        Frequently Asked Questions (FAQ)
      </h2>

      <div className="container">
        <div className="accordion" id="faqAccordion">
          {questionList.map((question, index) => (
            <div className="accordion-item bg-dark text-light border-0">
              <h3 id={`#faq-${index}`} className="accordion-header">
                <button
                  className="accordion-button bg-dark text-light collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${index}`}
                  aria-expanded="false"
                  aria-controls={`faq${index}`}
                >
                  {question.question}
                </button>
              </h3>
              <div id={`faq${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion"> 
                <div className="accordion-body">
                  <p dangerouslySetInnerHTML={{ __html: question.answer }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
