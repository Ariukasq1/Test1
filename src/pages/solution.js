import React,{Component} from 'react';
import Layout from '../components/Layout';

class solution extends Component {
  render() {
    return (
      <Layout>
        <div className="solid-inner-banner">
          <h2 className="page-title">Шийдэл</h2>
          <ul className="page-breadcrumbs">
            <li><a href="/">Эхлэл</a></li>
            <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
            <li>Шийдэл</li>
          </ul>
        </div>
        <div className="our-service service-modren pt-150 pb-200">
          <div className="container">
            <div className="theme-title-three text-center mb-200">
              <h2 className="title">We’v been providing our services with proud since 1980.</h2>
              <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </div>

            <div className="row service-block align-items-center">
              <div className="col-md-6 order-md-last" data-aos="fade-left">
                <div className="service-info">
                  <div className="tag color-one">Mobile App</div>
                  <h2 className="service-title"><a href="#">Mobile Application Design & Dev.</a></h2>
                  <a href="#" className="read-more"><i className="flaticon-next-1"></i></a>
                </div>
              </div>
              <div className="col-md-6 order-md-first" data-aos="fade-right">
                <div className="img-box"><img src="images/service/9.jpg" alt="" /></div>
              </div>
            </div>

            <div className="row service-block align-items-center">
              <div className="col-md-6" data-aos="fade-right">
                <div className="service-info">
                  <div className="tag color-two">UI/UX</div>
                  <h2 className="service-title"><a href="#">Interface Design with UX.</a></h2>
                  <a href="#" className="read-more"><i className="flaticon-next-1"></i></a>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="img-box"><img src="images/service/10.jpg" alt="" /></div>
              </div>
            </div>

            <div className="row service-block align-items-center">
              <div className="col-md-6 order-md-last" data-aos="fade-left">
                <div className="service-info">
                  <div className="tag color-three">Wordpress</div>
                  <h2 className="service-title"><a href="#">WordPress Theme Development</a></h2>
                  <a href="#" className="read-more"><i className="flaticon-next-1"></i></a>
                </div>
              </div>
              <div className="col-md-6 order-md-first" data-aos="fade-right">
                <div className="img-box"><img src="images/service/11.jpg" alt="" /></div>
              </div>
            </div>

            <div className="row service-block align-items-center">
              <div className="col-md-6" data-aos="fade-right">
                <div className="service-info">
                  <div className="tag color-four">Marketing</div>
                  <h2 className="service-title"><a href="#">Social & Online Marketing.</a></h2>
                  <a href="#" className="read-more"><i className="flaticon-next-1"></i></a>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="img-box"><img src="images/service/12.jpg" alt="" /></div>
              </div>
            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default solution;
