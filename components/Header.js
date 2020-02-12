import Link from 'next/link';

const Header = () => (
  <div className="theme-main-menu theme-menu-one d-align-item">
    <div className="logo"><a href="/"><img src="images/erxes-logo.svg" alt="" /></a></div>
    <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
      <div className="ml-auto nav-container">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="flaticon-setup" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/success-story">
                <a className="nav-link">Амжилтын түүх</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/solution">
                <a className="nav-link">Шийдэл</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link">Блог</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/features">
                <a className="nav-link">Боломжууд</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pricing">
                <a className="nav-link">Үнийн санал</a>
              </Link>
            </li>

            <li className="login-button"><a href="login-standard.html">Нэвтрэх</a></li>
            <li className="login-button"><a href="login-standard.html">Бүртгүүлэх</a></li>
          </ul>
        </div>
      </div> {/* /.container */}
    </nav> {/* /#mega-menu-holder */}
    {/* <div className="header-right-widget">
          <ul>
            <li className="call-us"><a href="#">+880.762.009</a></li>
          </ul>
        </div> */}
  </div>
);

export default Header;
