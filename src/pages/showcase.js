import React, { Component } from "react";
import Layout from "../components/Layout";

class ShowCase extends Component {
  render() {
    return (
      <Layout forms={[{ brand_id: "m7DmKt", form_id: "XYj6AP" }]}>
        <div className="solid-inner-banner">
          <div className="banner-overlay" />
          <h2 className="page-title">Байгууллагаа танилцуулах</h2>
        </div>
        <div className="agn-counter-section pt-90 pb-100">
          <img src="images/shape/shape-55.svg" alt="" className="shape-one" />
          <img src="images/shape/shape-59.svg" alt="" className="shape-two" />
          <img src="images/shape/shape-61.svg" alt="" className="shape-three" />
          <div className="container">
            <div className="flex">
              <div data-erxes-embed="XYj6AP" style={{ width: "700px" }}></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ShowCase;
