import React, { Component } from "react";

class Partner extends Component {
  componentDidMount() {
    var logoslider = $(".partner-slider");
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
            items: 1,
          },
          550: {
            items: 3,
          },
          992: {
            items: 5,
          },
        },
      });
    }
  }

  render() {
    return (
      <div className="trusted-partner">
        <div className="container">
          <h6 className="title">
            Дижитал шилжилтээ амжилттай эхлүүлсэн <span>байгууллагууд</span>
          </h6>
          <div className="partner-slider ">
            <div className="item">
              <a
                href="https://www.golomtbank.com/"
                target="_blank"
                rel="noopener noreferer"
              >
                <img src="images/logo/golomt.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a
                href="http://www.tavanbogd.mn/"
                target="_blank"
                rel="noopener noreferer"
              >
                <img src="images/logo/tavanbogd.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a
                href="https://www.capitronbank.mn/"
                target="_blank"
                rel="noopener noreferer"
              >
                <img src="images/logo/capitron.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a
                href="https://www.mobicom.mn/"
                target="_blank"
                rel="noopener noreferer"
              >
                <img src="images/logo/mobicom.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a
                href="https://xacleasing.mn/"
                target="_blank"
                rel="noopener noreferer"
              >
                <img src="images/logo/xac.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a
                href="http://bridgecorporation.mn/"
                target="_blank"
                rel="noopener noreferer"
              >
                <img src="images/logo/bridge.jpg" alt="" />
              </a>
            </div>
            <div className="item">
              <a
                href="https://www.skytel.mn/"
                target="_blank"
                rel="noopener noreferer"
              >
                <img src="images/logo/skytel.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a
                href="https://www.internom.mn/"
                target="_blank"
                rel="noopener noreferer"
              >
                <img src="images/logo/internom.jpg" alt="" />
              </a>
            </div>
            <div className="item">
              <a
                href="http://www.priuscenter.mn/"
                target="_blank"
                rel="noopener noreferer"
              >
                <img src="images/logo/prius.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a
                href="https://www.bid-finance.mn/"
                target="_blank"
                rel="noopener noreferer"
              >
                <img src="images/logo/bid.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a
                href="https://mdskhanlex.com/"
                target="_blank"
                rel="noopener noreferer"
              >
                <img src="images/logo/mds.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;
