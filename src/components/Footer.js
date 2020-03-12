import Link from 'next/link';

const Footer = () => (
  <footer className="theme-footer-one" id="footer">
    <div className="shape-one" data-aos="zoom-in-right" />
    <img src="images/shape/shape-67.svg" alt="" className="shape-two" />
      <div className="top-footer">
        <div className="container">
          <div className="bottom-footer">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12 footer-list" >
                <h5 className="title">Бидний тухай</h5>
                <ul>
                  <li>
                    <a href="/about">Товч танилцуулга</a>
                  </li>
                  <li>
                    <a href="/team">Баг хамт олон</a>
                  </li>
                  <li>
                    <a href="/swag">Үнэгүй футболка авах</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-lg-3 col-sm-6 col-12 footer-list" >
                <h5 className="title">Хүний нөөц</h5>
                <ul>
                  <li>
                    <a href="/human-resource">Хүний нөөцийн бодлого</a>
                  </li>
                  <li>
                    <a href="/jobs">Нээлттэй ажлын байр</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-6 col-12 footer-list" >
                <h5 className="title">Хөрөнгө оруулагч</h5>
                <ul>
                  <li>
                    <a href="/investors">Хөрөнгө оруулагчид</a>
                  </li>
                  <li>
                    <a href="/directors">Төлөөлөн удирдах зөвлөл</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-lg-2 col-sm-6 col-12 footer-information" >
                <h5 className="title">Холбоо барих</h5>
                <p>
                  СБД, 1-р хороо, 5-р хороолол, Чингисийн өргөн чөлөө, Бизнес Тауэр, 16 давхарт
                </p>
                <p>
                  <i className="fa fa-phone" aria-hidden="true" /> 11 36 5555 <br />
                  <i className="fa fa-envelope" aria-hidden="true" /> info@erxes.io
                </p>
                <ul>
                  <li>
                    <a href="https://github.com/erxes" target="_blank">
                      <i className="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/erxesHQ" target="_blank">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/erxesHQ" target="_blank">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  </footer>
);

export default Footer;
