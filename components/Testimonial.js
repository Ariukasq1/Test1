import React, { Component } from 'react';

class Testimonial extends Component{
  componentDidMount(){
    var agnTslider = $('.agn-testimonial-slider');
    if (agnTslider.length) {
      agnTslider.owlCarousel({
        loop: true,
        nav: true,
        navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-next'></i>"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1200,
        autoplayHoverPause: true,
        lazyLoad: true,
        items: 1
      });
    }
  }
  render(){
    return(
      <div className="sass-testimonial-section">
    <img src="images/home/2.jpg" alt="" className="people" />
    <img src="images/home/3.jpg" alt="" className="people" />
    <img src="images/home/4.jpg" alt="" className="people" />
    <img src="images/home/5.jpg" alt="" className="people" />
    <img src="images/home/6.jpg" alt="" className="people" />
    <img src="images/home/7.jpg" alt="" className="people" />
    <div className="container">
      <div className="theme-title-one text-center hide-pr">
        <div className="icon-box hide-pr">
          <img src="images/shape/bg-shape5.svg" alt="" className="bg-shape" />
          <img src="images/icon/icon27.svg" alt="" className="icon" />
        </div>
        <h2 className="main-title">
          What’s Our Client Think <br />
          About Us.
        </h2>
      </div>{' '}
      {/* /.theme-title-one */}
      <div className="inner-container">
        <div className="main-content">
          <div className="agn-testimonial-slider">
            <div className="item">
              <p>
                ommodo consequat. Duis aute irure dolor in reprehendert voluptate velit esse cillum
                dolore eu fugiat nulla Excepteu sint occaecat cupidat non proident, sunt in culpa
                qui officia deserunt mollit anim id est lrum.
              </p>
              <h6 className="name">Rashed Ka.</h6>
              <span className="designation">Senior Designer, Squre.</span>
            </div>{' '}
            {/* /.item */}
            <div className="item">
              <p>
                ommodo consequat. Duis aute irure dolor in reprehendert voluptate velit esse cillum
                dolore eu fugiat nulla Excepteu sint occaecat cupidat non proident, sunt in culpa
                qui officia deserunt mollit anim id est lrum.
              </p>
              <h6 className="name">Zubayer al hasan</h6>
              <span className="designation">Senior Developer, Envato.</span>
            </div>{' '}
            {/* /.item */}
          </div>
        </div>
      </div>{' '}
      {/* /.inner-container */}
    </div>{' '}
    {/* /.container */}
  </div>
    )
  }
}
export default Testimonial;