import AwsUgLogo from '../images/logo.png?url';

export default function Header({isOpenCfp} : {isOpenCfp: boolean}) {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <a href="https://awscommunity.id" className="logo d-flex align-items-center">
                    <img src={AwsUgLogo} alt="AWS User Group Indonesia" />
                </a>
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#hero" className="active">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        {isOpenCfp && (<li><a href="#cfp">CFP</a></li>)}
                        {!isOpenCfp && (<li><a href="#speaker">Speaker</a></li>)}
                        {!isOpenCfp && (<li><a href="#agenda">Agenda</a></li>)}
                        <li><a href="#sponsor">Sponsor</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

            </div>
        </header>);
}