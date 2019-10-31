const Header = () => (

  <div id="theme-banner-four">
      <img
        src="images/home/1.png"
        alt=""
        className="screen-one wow fadeInRight animated"
        data-wow-duration="2s"
      />
      <img
        src="images/home/2.png"
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
          <div className="slogan wow fadeInDown animated" data-wow-delay="0.2s">
            <span>70% Off</span> for first 3 months
          </div>
          <h1 className="main-title wow fadeInUp animated" data-wow-delay="0.4s">
            Ultimate web app <br />
            for your customer <br />
            support.
          </h1>
          <p className="sub-title wow fadeInUp animated" data-wow-delay="0.9s">
            With the xco platform for customer experience, <br /> service and support.
          </p>
          <ul className="button-group lightgallery">
            <li>
              <a
                href="about-us-standard.html"
                className="more-button wow fadeInLeft animated"
                data-wow-delay="1.5s"
              >
                More About us <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                data-fancybox
                href="https://www.youtube.com/embed/aXFSJTjVjw0"
                className="fancybox video-button video-button-one wow fadeInRight animated"
                data-wow-delay="1.5s"
              >
                See live demo. <i className="flaticon-play-button" />
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

