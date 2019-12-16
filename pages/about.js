import React,{Component} from 'react';
import Layout from '../components/Layout';

class about extends Component {

  componentDidMount() {
    var customerslider = $('.customer-slider');
    if(customerslider.length) {
      customerslider.owlCarousel({
        loop: true,
        nav: true,
        navText: ["<i class='flaticon-back'></i>","<i class='flaticon-next'></i>"],
        dots: false,
        autoplay: true,
        margin: 0,
        autoplayTimeout: 4500,
        autoplaySpeed: 1000,
        lazyLoad: true,
        singleItem: true,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          }
        }
      });
    }
  }
  render() {
    return (
      <Layout>
        <div className="solid-inner-banner">
          <h2 className="page-title">Бидний тухай</h2>
          <ul className="page-breadcrumbs">
            <li><a href="/">Эхлэл</a></li>
            <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
            <li>Бидний тухай</li>
          </ul>
        </div>

        <div className="about-us-standard agency-style pt-150">
          <div className="container">
            <div className="demo-container-1100">
              <div className="row gutter-80">
                <div className="col-lg-6 order-lg-last" data-aos="fade-left">
                  <div className="single-block">
                    <h5 className="block-title pb-30">Our History</h5>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out printed graphic or web designs. The passage is at attributed to an unknown typesetters in 1the 5th century who is thought scrambled with all parts of Cicero's De. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out printed graphic or web designs.</p>
                    <div className="author-data">
                      <h6 className="name pb-30">Derek Ramsey</h6>
                      <img src="images/home/sign2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-first" data-aos="fade-right"><div className="img-box"><img src="images/home/10.jpg" alt="" /></div></div>
              </div>
              <div className="row gutter-80">
                <div className="col-lg-6" data-aos="fade-right">
                  <div className="single-block">
                    <h5 className="block-title pb-30">Our Goal</h5>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out printed graphic or web designs. The passage is at attributed to an unknown typesetters in 1the 5th century who is thought scrambled with all parts of Cicero's De.</p> <br />
                    <p>Malorum for use in a type specimen book. Ionsectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left"><div className="img-box">
                  <img src="images/home/11.jpg" alt="" /></div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="agn-counter-section fix-bg-position m0 pt-50">
          <div className="container">
            <div className="main-wrapper">
              <div className="counter-wrapper">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="single-counter-box">
                      <h2 className="number"><span className="timer" data-from="0" data-to="16" data-speed="1200" data-refresh-interval="5">0</span>k</h2>
                      <p>Global Customer</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-counter-box">
                      <h2 className="number"><span className="timer" data-from="0" data-to="500" data-speed="1200" data-refresh-interval="5">0</span>+</h2>
                      <p>Completed Projects</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-counter-box">
                      <h2 className="number"><span className="timer" data-from="0" data-to="460" data-speed="1200" data-refresh-interval="5">0</span>+</h2>
                      <p>Experts Worker</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="video-action-banner-one mt-95">
          <div className="overlay">
            <a data-fancybox href="https://www.youtube.com/embed/aXFSJTjVjw0" className="video-button fancybox"><img src="images/icon/icon47.svg" alt="" /></a>
          </div>
        </div>

        <div className="apps-testimonial bg-white">
          <div className="container">
            <div className="theme-title-one">
              <h2 className="main-title">What’s Our Customer <br />Saying.</h2>
            </div>

            <div className="customer-slider">
              <div className="item">
                <div className="customer-block">
                  <p>onsectetur adipiscng elit, sed do esmod tempor ut labor  dolor magna aliqua. Ut enomi ad minm veniam, quis nos exercitation.</p>
                  <div className="clearfix">
                    <img src="images/home/3.jpg" alt="" className="customer-img" />
                    <div className="customer-info">
                      <h5 className="name">Rashed Ka.</h5>
                      <span>Manager, Walton</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="customer-block">
                  <p>onsectetur adipiscng elit, sed do esmod tempor ut labor  dolor magna aliqua. Ut enomi ad minm veniam, quis nos exercitation.</p>
                  <div className="clearfix">
                    <img src="images/home/2.jpg" alt="" className="customer-img" />
                    <div className="customer-info">
                      <h5 className="name">Wilson Herry</h5>
                      <span>Product Designer, Trello</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="customer-block">
                  <p>onsectetur adipiscng elit, sed do esmod tempor ut labor  dolor magna aliqua. Ut enomi ad minm veniam, quis nos exercitation.</p>
                  <div className="clearfix">
                    <img src="images/home/7.jpg" alt="" className="customer-img" />
                    <div className="customer-info">
                      <h5 className="name">Zubayer Hasan</h5>
                      <span>Manager, Walton</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default about;