import React, { Component } from "react";
import Layout from "../components/Layout";
import WPAPI from "wpapi";
import { getData } from "../utils";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

class SuccessStoryDetail extends Component {
  static async getInitialProps(context) {
    const slug = context.query.slug;

    let apiMethod = wp.posts();

    const post = await apiMethod
      .slug(slug)
      .embed()
      .then((data) => {
        return data[0];
      });

    return { post };
  }

  render() {
    const { post } = this.props;

    return (
      <Layout>
        <div className="project-details project-details-creative">
          <div
            className="pd-banner"
            style={{ backgroundImage: `url(${post.acf.cover_image})` }}
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="container-inner">
                <h2 className="project-title-one">{post.title.rendered}</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="container-wrapper">
              <div className="pd-body">
                <div className="row">
                  <div className="col-lg-8 order-lg-last">
                    <div className="detail">
                      <div className="side-block">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.content.rendered,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 order-lg-first">
                    <div className="project-info">
                      <ul>
                        <li>
                          <h6 className="list-title">Салбар</h6>
                          <span className="date">{post.acf.sector}</span>
                        </li>
                        <li>
                          <h6 className="list-title">Нэвтрүүлсэн огноо</h6>
                          <span className="date">{post.acf.created_date}</span>
                        </li>
                        <li>
                          <h6 className="list-title">Харилцагчийн төрөл</h6>
                          <span className="date">{post.acf.customer_type}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default SuccessStoryDetail;
