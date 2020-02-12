import React, { Component } from 'react';
import Layout from '../components/Layout';

class SuccessStoryDetail extends Component {
  render() {
    return (
      <Layout>
        <div class="project-details project-details-creative pb-200">
          <div class="pd-banner" style={{backgroundImage: `url(images/gallery/48.jpg)`}}>
            <div class="container">
              <div class="container-inner"><h2 class="project-title-one">What features you will Get from App.</h2></div>
            </div>
          </div>
          <div class="container">
            <div class="container-wrapper">
              <div class="pd-body">
                <div class="row">
                  <div class="col-lg-8 order-lg-last">
                    <div class="side-block">
                      <h5 class="block-title">Goal</h5>
                      <p>Here is also the chance that since you have an article archive on the we  subscribers will often read more than just.</p>
                    </div>
                    <div class="side-block">
                      <h5 class="block-title">Challenge</h5>
                      <p>Here is also the chance that since you have an article archive on the we  subscribers will often read more than just your original articles. Your subscriber interested lorem ipsum.</p>
                    </div>
                  </div>
                  <div class="col-lg-4 order-lg-first">
                    <div class="project-info">
                      <ul>
                        <li>
                          <h6 class="list-title">Project Type</h6>
                          <span class="date">3D Design, Apartment</span>
                        </li>
                        <li>
                          <h6 class="list-title">Date</h6>
                          <span class="date">23 July, 2018</span>
                        </li>
                        <li>
                          <h6 class="list-title">Client Name</h6>
                          <span class="date">Mariona Adisson, USA</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pd-footer d-md-flex justify-content-between align-items-center">
  							<div class="d-flex justify-content-between">
  								<a href="#" class="theme-pager prev"><span class="flaticon-back"></span> &nbsp;&nbsp;Previous</a>
  								<a href="#" class="theme-pager next">Next &nbsp;&nbsp;<span class="flaticon-next"></span></a>
  							</div>
  							<ul class="share-icon">
  								<li>Share:</li>
  								<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
  								<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
  								<li><a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
  								<li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
  							</ul>
  						</div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default SuccessStoryDetail;
