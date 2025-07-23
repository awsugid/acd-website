interface Faq {
    question: string;
    answer: string;
}

interface FaqProp {
    questionList: Faq[]
}

export default function Faq({ questionList }: FaqProp) {
    return (<section id="faq" className="faq section">

        <div className="container section-title" data-aos="fade-up">
            <p><span className="description-title">Frequently Asked Questions (FAQ)</span></p>
        </div>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
                    <div className="faq-container">
                        {questionList.map(question => (
                            <div className="faq-item">
                                <h3>{question.question}</h3>
                                <div className="faq-content">
                                    <p dangerouslySetInnerHTML={{ __html: question.answer }} />
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </section>);
}