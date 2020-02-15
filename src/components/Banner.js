import b1 from '../public/images/123.png'

const Header = () => (
  <div id="theme-banner-four">
    <img
      src="images/header-1.png"
      alt=""
      className="screen-one wow fadeInRight animated"
      data-wow-duration="2s"
    />
    <img
      src="images/splash-2.png"
      alt=""
      className="screen-two wow fadeInUp animated"
      data-wow-duration="2s"
    />
    <img src="images/shape/shape-8.svg" alt="" className="shape-one" />
    <img src="images/shape/shape-9.svg" alt="" className="shape-two" />
    <img src="images/shape/shape-10.svg" alt="" className="shape-three" />
    <img src="images/shape/shape-11.svg" alt="" className="shape-four" />
    <div className="round-shape-one" />
    <div className="round-shape-two" />
    <div className="round-shape-three" />
    <div className="round-shape-four" />
    <div className="container">
      <div className="main-wrapper">
        {/* <div className="slogan wow fadeInDown animated" data-wow-delay="0.2s">
          <span>70% Off</span> for first 3 months
        </div> */}
        <h1 className="main-title wow fadeInUp animated" data-wow-delay="0.4s">
        <b>МАРКЕТИНГ, БОРЛУУЛАЛТ,<br/>
        ХЭРЭГЛЭГЧТЭЙ ХАРИЛЦАХ</b> <br/>
        ҮЙЛ АЖИЛЛАГААГАА УДИРДАХ <br/>
        ЦОГЦ ПЛАТФОРМ<br/>

        </h1>
        <p className="sub-title wow fadeInUp animated" data-wow-delay="0.9s">
        Маркетингийн санаануудаа үнэлэх, хэмжих, борлуулалтаа <br />
        төлөвлөх хянах, хэрэглэгчтэйгээ харилцах, <br />
        халамжлах үйл ажиллагааг нэг технологиос удирдаарай.
        </p>
        <ul className="button-group lightgallery">
          <li>
            <a
              href="about-us-standard.html"
              className="more-button wow fadeInLeft animated"
              data-wow-delay="1.5s"
            >
              Төлбөргүй турших <i className="fa fa-angle-right" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              data-fancybox
              href="#"
              className="fancybox video-button video-button-one wow fadeInRight animated"
              data-wow-delay="1.5s"
            >
              Уулзалтын цаг товлох
            </a>
          </li>
        </ul>
      </div>{' '}
      {/* /.main-wrapper */}
    </div>{' '}
    {/* /.container */}
  </div>
);
export default Header;

