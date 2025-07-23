export default function Sponsor({currentYear, sponsorProposal} : {
    currentYear: number,
    sponsorProposal: string
}) {
    return (<section id="sponsor" className="sponsor section">
        <div className="container section-title" data-aos="fade-up">
            <p>Sponsors</p>
        </div>
        <div className="container call-for-sponsors" data-aos="fade-up">
            <p>Join us as a sponsor for <b>AWS Community Day Indonesia {currentYear}!</b> Your support will make a huge impact and help create an unforgettable experience for all attendees.</p>
            <div className="button-wrapper">
                <a href={sponsorProposal} className="btn btn-get-started" target="_blank">Support Us</a>
            </div>
        </div>
    </section>);
}