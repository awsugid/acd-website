export default function Footer() {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container text-center footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <a
              href="https://awscommunity.id"
              className="logo align-items-center mt-3"
            >
              AWS User Group Indonesia
            </a>
            <p>
              AWS User Group Indonesia is a community of AWS users in Indonesia,
              comprising AWS User Group Medan, AWS User Group Jakarta, AWS User
              Group Malang, and AWS User Group Surabaya.
            </p>
            <div className="social-links mt-4">
              <a href="https://twitter.com/AWSUserGroupID/">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://web.facebook.com/groups/awsindonesia">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com/awsugid">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/awsugid">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-6 mb-4">
            <h4>Useful links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#coc.html">Code of Conduct</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Speaker Guidelines</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>AWS User Group Indonesia</p>
            <p className="mt-4">
              <strong>Phone:</strong> <span>+62 8525 9044 226</span>
            </p>
            <p>
              <strong>Email:</strong> <span>awsugid@gmail.com</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Organized by AWS User Group Indonesia 🇮🇩</span>
        </p>
      </div>
    </footer>
  );
}
