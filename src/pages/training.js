import React, {Component} from 'react';
import Layout from '../components/Layout';

class Swag extends Component {
  render() {
    return (
      <Layout>
        <div className="our-service pt-200 pb-100">
          <div className="agn-about-us pt-250 pb-100">
            <img src="images/shape/shape-61.svg" alt="" className="shape-one" />
            <img src="images/shape/shape-64.svg" alt="" className="shape-two" data-aos="fade-left" />
            <img src="images/shape/shape-65.svg" alt="" className="shape-three" data-aos="fade-right" />
            <img src="images/shape/shape-60.svg" alt="" className="shape-four" />
            <div className="container">
              <div data-erxes-embed="3QPxQs" style={{width:'900px', height:'600px'}}></div>
            </div>
          </div>
  			</div>
      </Layout>
    )
  }
}

export default Swag;
