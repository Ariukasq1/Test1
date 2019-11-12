import b1 from '../public/images/home/1.png'

const Header = () => (
  <div id="theme-banner-four">
    <img
      src={b1}
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
        {/* <div className="slogan wow fadeInDown animated" data-wow-delay="0.2s">
          <span>70% Off</span> for first 3 months
        </div> */}
        <h1 className="main-title wow fadeInUp animated" data-wow-delay="0.4s">
          Эрксис Growth <br />
          Маркетингийн <br />
          Платформ
        </h1>
        <p className="sub-title wow fadeInUp animated" data-wow-delay="0.9s">
          Эрксис нь танай байгууллагын маркетинг, борлуулалтыг <br /> автоматчилах, хэрэглэгчээ
          таних, үнэлэх, <br /> халамжлах үйл явцыг дэлхийн түвшинд хөгжүүлнэ.
        </p>
        <ul className="button-group lightgallery">
          <li>
            <a
              href="about-us-standard.html"
              className="more-button wow fadeInLeft animated"
              data-wow-delay="1.5s"
            >
              Төлбөргүй ашиглах <i className="fa fa-angle-right" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              data-fancybox
              href="#"
              className="fancybox video-button video-button-one wow fadeInRight animated"
              data-wow-delay="1.5s"
            >
              Демотой танилцах
            </a>
          </li>
        </ul>
        <ul className="button-group lightgallery">
          <li>
            <button className="white-shdw-button fadeInLeft animated wow" data-wow-delay="1.5s">
              Уулзалтын цаг товлох <i className="icon flaticon-next"></i>
            </button>
          </li>
        </ul>
      </div>{' '}
      {/* /.main-wrapper */}
    </div>{' '}
    {/* /.container */}
  </div>
);
export default Header;

