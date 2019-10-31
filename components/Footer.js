const Footer = () => (
  <footer className="theme-footer-one" id="footer">
    <div className="shape-one" data-aos="zoom-in-right" />
    <img src="images/shape/shape-67.svg" alt="" className="shape-two" />
    <div className="top-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12 about-widget" data-aos="fade-up">
            <a href="index.html" className="logo">
              <img src="images/logo/logo2.svg" alt="" />
            </a>
            <a href="#" className="email">
              boga.inc@company.com
            </a>
            <a href="#" className="phone">
              720.661.2231
            </a>
          </div>{' '}
          {/* /.about-widget */}
          <div className="col-lg-3 col-lg-3 col-sm-6 col-12 footer-list" data-aos="fade-up">
            <h5 className="title">Services</h5>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
              <li>
                <a href="#">Wordpress</a>
              </li>
              <li>
                <a href="#">Online Marketing</a>
              </li>
              <li>
                <a href="#">Content</a>
              </li>
            </ul>
          </div>{' '}
          {/* /.footer-recent-post */}
          <div className="col-lg-3 col-sm-6 col-12 footer-list" data-aos="fade-up">
            <h5 className="title">About us</h5>
            <ul>
              <li>
                <a href="about-us-standard.html">About us</a>
              </li>
              <li>
                <a href="project-standard.html">Work Portfolio</a>
              </li>
              <li>
                <a href="team-standard.html">Team</a>
              </li>
              <li>
                <a href="#">Plan &amp; Pricing</a>
              </li>
              <li>
                <a href="blog-default.html">News</a>
              </li>
            </ul>
          </div>{' '}
          {/* /.footer-list */}
          <div className="col-lg-3 col-lg-2 col-sm-6 col-12 footer-information" data-aos="fade-up">
            <h5 className="title">Our Address</h5>
            <p>
              00 Orville Road Apt. 728 <br />
              California, USA
            </p>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>{' '}
        {/* /.row */}
      </div>{' '}
      {/* /.container */}
    </div>{' '}
    {/* /.top-footer */}
    <div className="container">
      <div className="bottom-footer">
        <div className="clearfix">
          <p>© 2019 copyright all right reserved</p>
          <ul>
            <li>
              <a href="#">Privace &amp; Policy.</a>
            </li>
            <li>
              <a href="faq.html">Faq.</a>
            </li>
            <li>
              <a href="#">Terms.</a>
            </li>
          </ul>
        </div>
      </div>{' '}
      {/* /.bottom-footer */}
    </div>
  </footer>
);

export default Footer;