import AwsUgLogo from "../images/logo.png?url";

export default function Header({ isOpenCfp }: { isOpenCfp: boolean }) {
  return (
    <header id="header" className="navbar navbar-expand-lg">
      <div className="container">
        <a href="https://awscommunity.id" className="navbar-brand">
          <img
            src={AwsUgLogo}
            width={50}
            height={50}
            alt="AWS User Group Indonesia"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="navbar-nav collapse navbar-collapse" id="navbarSupportedContent">
          <a href="#hero" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About Us
          </a>
          {isOpenCfp && (
            <a href="#cfp" className="nav-link">
              CFP
            </a>
          )}
          {!isOpenCfp && (
            <a href="#speaker" className="nav-link">
              Speaker
            </a>
          )}
          {!isOpenCfp && (
            <a href="#agenda" className="nav-link">
              Agenda
            </a>
          )}
          <a href="#sponsor" className="nav-link">
            Sponsor
          </a>
          <a href="#team" className="nav-link">
            Team
          </a>
          <a href="#faq" className="nav-link">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}
