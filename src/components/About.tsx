export default function About() {
    return (
        <section id="about" className="about section">
            <div className="container section-title" data-aos="fade-up">
                <p>Welcome!</p>
            </div>
            <div className="container">
                <div className="row gy-5 align-items-center">
                    <div className="content col-xl-5 col-lg-6 d-flex flex-column align-items-center text-center" data-aos="fade-up" data-aos-delay="100">
                        {/*<img src="assets/img/mascot.png" alt="Mascot" className="img-fluid mascot-img-small" />*/}
                        <p className="mt-3 small-text">
                            At <b>AWS Community Day Indonesia 2025</b>, delve into the latest trends, innovations, and best practices in cloud computing with Amazon Web Services (AWS). <br /><br />
                            Join us for insightful sessions, engaging discussions, hands-on workshops, and valuable networking opportunities—all designed to enhance your expertise and mastery of AWS solutions.
                        </p>
                    </div>

                    <div className="col-xl-7 col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="row gy-4">
                            <div className="col-md-6 icon-box position-relative">
                                <i className="bi bi-briefcase"></i>
                                <h4><a href="" className="stretched-link">Professional Networking</a></h4>
                                <p>Connect with industry experts and expand your professional network.</p>
                            </div>

                            <div className="col-md-6 icon-box position-relative">
                                <i className="bi bi-gem"></i>
                                <h4><a href="" className="stretched-link">Up-to-Date Knowledge</a></h4>
                                <p>Stay ahead with insights into the latest AWS technologies.</p>
                            </div>

                            <div className="col-md-6 icon-box position-relative">
                                <i className="bi bi-broadcast"></i>
                                <h4><a href="" className="stretched-link">Hands-on Learning</a></h4>
                                <p>Engage in interactive sessions and gain practical experience.</p>
                            </div>

                            <div className="col-md-6 icon-box position-relative">
                                <i className="bi bi-easel"></i>
                                <h4><a href="" className="stretched-link">Innovation Inspiration</a></h4>
                                <p>Discover fresh ideas to drive innovation in your projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}