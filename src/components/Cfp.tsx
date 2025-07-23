function OpenCfp({ currentYear }: { currentYear: number }) {
    return (<>
        <div className="col">
            <p><b>Calling all experts!</b></p>
            <p>We're thrilled to announce AWS Community Day Indonesia and are seeking dynamic speakers to share their AWS insights and best practices. <br />
                This is a fantastic opportunity to showcase your expertise and connect with fellow AWS enthusiasts in the Indonesian-speaking community. We invite submissions from diverse speakers, whether you're an AWS-certified professional, developer, or researcher. <br />
                Share your case studies, technical sessions, or hands-on workshops, and help our audience learn and grow!
            </p>
        </div>

        <div className="col">
            <strong>Topics at the AWS Community Day</strong>
            <ul>
                <li>Introduction to AWS Cloud Services</li>
                <li>Building Scalable Applications on AWS</li>
                <li>Enhancing Data Analytics with AWS</li>
                <li>Cloud Security Best Practices</li>
                <li>AI and Machine Learning Applications</li>
                <li>Serverless Architecture on AWS</li>
                <li>IoT Solutions using AWS</li>
                <li>Cost Optimization Strategies</li>
                <li>DevOps and Continuous Integration/Continuous Deployment (CI/CD) with AWS</li>
                <li>Case Studies and Industry Insights</li>
                <li>More!</li>
            </ul>
        </div>
        <div>
            Feel free to submit sessions in <b>Bahasa Indonesia</b> / <b>English</b> (or even both if you don't mind).
            Don't miss out on this opportunity to share your expertise and connect with the AWS community members.
            We can't wait to hear from you!
        </div>
        <div className="button-wrapper">
            <a href={`https://sessionize.com/aws-comm-day-id-${currentYear}`} className="btn btn-get-started" target="_blank">Submit Proposal</a>
        </div>
    </>);
}

function CloseCfp({ currentYear }: { currentYear: number }) {
    return (<div className="my-4">
        <center>
            A heartfelt thank you to everyone who submitted their session proposals for AWS Community Day Indonesia {currentYear}! <br />
            Your enthusiasm and expertise are what make our community truly special, and we look forward to an inspiring event together!<br />
            <a className="btn btn-get-started" href={`https://sessionize.com/aws-comm-day-id-${currentYear}`}>Thank You!</a><br /><br />

            For any further clarification, questions or ideas don't hesitate to get in touch with us via <a href="mailto:awsugid@gmail.com">awsugid@gmail.com</a>
        </center>
    </div>);
}

export default function Cfp({ currentYear, isOpen }: { currentYear: number, isOpen: boolean }) {
    return (
        <section id="cfp" className="cfp section">
            <div className="container section-title" data-aos="fade-up">
                <p><span className="description-title">Call For Papers</span></p>
            </div>
            <div className="container">
                <div className="row gy-5">
                    {isOpen ? (<OpenCfp currentYear={currentYear} />) : (<CloseCfp currentYear={currentYear} />)}
                </div>
            </div>
        </section >
    )
}