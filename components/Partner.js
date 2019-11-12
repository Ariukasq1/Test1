import React, { Component } from 'react'
class Partner extends Component{

  componentDidMount(){
    var logoslider = $('.partner-slider');
    if (logoslider.length) {
      logoslider.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000,
        lazyLoad: true,
        singleItem: true,
        center: true,
        responsive: {
          0: {
            items: 1
          },
          550: {
            items: 3
          },
          992: {
            items: 5
          }
        }
      });
    }
  }
  render(){
    return (
      <div className="trusted-partner">
        <div className="container">
          <h6 className="title">
            Дижитал шилжилтээ амжилттай эхлүүлсэн <span>байгууллагууд</span>
          </h6>
          <div className="partner-slider ">
            <div className="item">
              <a href="#">
                <img src="images/logo/envato.svg" alt="" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="images/logo/envato.svg" alt="" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="images/logo/envato.svg" alt="" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="images/logo/envato.svg" alt="" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="images/logo/envato.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;