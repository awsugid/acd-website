export default function Sponsor({
  currentYear,
  sponsorProposal,
}: {
  currentYear: number;
  sponsorProposal: string;
}) {
  return (
    <section id="sponsor" className="sponsor section">
      <h2 className="section-title" data-aos="fade-up">
        Sponsors
      </h2>
      <div className="container call-for-sponsors" data-aos="fade-up">
        <p>
          Join us as a sponsor for{" "}
          <b>AWS Community Day Indonesia {currentYear}!</b> Your support will
          make a huge impact and help create an unforgettable experience for all
          attendees.
        </p>
        <div className="text-center mt-3">
          <a
            href={sponsorProposal}
            className="btn btn-primary"
            target="_blank"
          >
            Support Us
          </a>
        </div>
      </div>
    </section>
  );
}
