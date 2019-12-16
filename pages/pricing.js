import React,{Component} from 'react';
import Layout from '../components/Layout';
class pricing extends Component {

    render() {
        return (
            <Layout>

                <div className="solid-inner-banner mb-150">
                    <h2 className="page-title">Үнийн санал</h2>
                </div>

                <div className="element-section mb-150">
                    <div className="agn-our-pricing p0">
                        <img src="images/shape/shape-55.svg" alt="" className="shape-one" />
                        <img src="images/shape/shape-62.svg" alt="" className="shape-two" />
                        <img src="images/shape/shape-1.svg" alt="" className="shape-three" />
                        <img src="images/shape/shape-60.svg" alt="" className="shape-four" />
                        <img src="images/shape/shape-57.svg" alt="" className="shape-five" />
                        <div className="container">
                            <div className="theme-title-one text-center">
                                <div className="upper-title">Pricing Plan</div>
                                <h2 className="main-title">No Hidden Charges! Choose <br /> your Plan.</h2>
                            </div>
                        </div>


                        <div className="pricing-tab-menu mt-70">
                            <div className="nav-wrapper">
                                <ul className="nav nav-tabs justify-content-center">
                                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#month">Monthly</a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#annual">Annual</a></li>
                                </ul>
                            </div>
                            <p>Save 30% on annual plan</p>
                        </div>

                        <div className="tab-content">

                            <div id="month" className="tab-pane fade show active">
                                <div className="table-wrapper">
                                    <div className="inner-table clearfix">
                                        <ul className="pr-list-text">
                                            <li>Full Access Library</li>
                                            <li>Multiple User</li>
                                            <li>Refund</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                        <div className="pr-column">
                                            <div className="pr-header">
                                                <div className="price">$2300<span>/MO</span></div>
                                                <h4 className="title">Sandwich</h4>
                                                <div className="package">Reguler</div>
                                            </div>
                                            <ul className="pr-body">
                                                <li>
                                                    <div className="pr-text">Full Access Library</div>
                                                    <i className="icon flaticon-cancel none"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">Multiple User</div>
                                                    <i className="icon flaticon-cancel none"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">Refund</div>
                                                    <i className="icon flaticon-cancel none"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">24/7 Support</div>
                                                    <i className="icon flaticon-tick available"></i>
                                                </li>
                                            </ul>
                                            <div className="pr-footer">
                                                <a href="#" className="choose-button line-button-two">Choose Plan</a>
                                                <p>Get your 30 day free trial</p>
                                            </div>
                                        </div>
                                        <div className="pr-column">
                                            <div className="pr-header">
                                                <div className="price">$6000<span>/MO</span></div>
                                                <h4 className="title">Subway</h4>
                                                <div className="package">Premium</div>
                                            </div>
                                            <ul className="pr-body">
                                                <li>
                                                    <div className="pr-text">Full Access Library</div>
                                                    <i className="icon flaticon-cancel none"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">Multiple User</div>
                                                    <i className="icon flaticon-cancel none"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">Refund</div>
                                                    <i className="icon flaticon-tick available"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">24/7 Support</div>
                                                    <i className="icon flaticon-tick available"></i>
                                                </li>
                                            </ul>
                                            <div className="pr-footer">
                                                <a href="#" className="choose-button line-button-two">Choose Plan</a>
                                                <p>Get your 30 day free trial</p>
                                            </div>
                                        </div>
                                        <div className="pr-column">
                                            <div className="pr-header">
                                                <div className="price">$9500<span>/MO</span></div>
                                                <h4 className="title">Burger</h4>
                                                <div className="package">Corporate</div>
                                            </div>
                                            <ul className="pr-body">
                                                <li>
                                                    <div className="pr-text">Full Access Library</div>
                                                    <i className="icon flaticon-tick available"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">Multiple User</div>
                                                    <i className="icon flaticon-tick available"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">Refund</div>
                                                    <i className="icon flaticon-tick available"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">24/7 Support</div>
                                                    <i className="icon flaticon-tick available"></i>
                                                </li>
                                            </ul>
                                            <div className="pr-footer">
                                                <a href="#" className="choose-button line-button-two">Choose Plan</a>
                                                <p>Get your 30 day free trial</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="annual" className="tab-pane fade">
                                <div className="table-wrapper">
                                    <div className="inner-table clearfix">
                                        <ul className="pr-list-text">
                                            <li>Full Access Library</li>
                                            <li>Multiple User</li>
                                            <li>Refund</li>
                                            <li>24/7 Support</li>
                                        </ul>
                                        <div className="pr-column">
                                            <div className="pr-header">
                                                <div className="price">$6300<span>/YR</span></div>
                                                <h4 className="title">Sandwich</h4>
                                                <div className="package">Reguler</div>
                                            </div>
                                            <ul className="pr-body">
                                                <li>
                                                    <div className="pr-text">Full Access Library</div>
                                                    <i className="icon flaticon-cancel none"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">Multiple User</div>
                                                    <i className="icon flaticon-cancel none"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">Refund</div>
                                                    <i className="icon flaticon-cancel none"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">24/7 Support</div>
                                                    <i className="icon flaticon-tick available"></i>
                                                </li>
                                            </ul>
                                            <div className="pr-footer">
                                                <a href="#" className="choose-button line-button-two">Choose Plan</a>
                                                <p>Get your 30 day free trial</p>
                                            </div>
                                        </div>
                                        <div className="pr-column">
                                            <div className="pr-header">
                                                <div className="price">$8000<span>/YR</span></div>
                                                <h4 className="title">Subway</h4>
                                                <div className="package">Premium</div>
                                            </div>
                                            <ul className="pr-body">
                                                <li>
                                                    <div className="pr-text">Full Access Library</div>
                                                    <i className="icon flaticon-cancel none"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">Multiple User</div>
                                                    <i className="icon flaticon-cancel none"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">Refund</div>
                                                    <i className="icon flaticon-tick available"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">24/7 Support</div>
                                                    <i className="icon flaticon-tick available"></i>
                                                </li>
                                            </ul>
                                            <div className="pr-footer">
                                                <a href="#" className="choose-button line-button-two">Choose Plan</a>
                                                <p>Get your 30 day free trial</p>
                                            </div>
                                        </div>
                                        <div className="pr-column">
                                            <div className="pr-header">
                                                <div className="price">$9900<span>/YR</span></div>
                                                <h4 className="title">Burger</h4>
                                                <div className="package">Corporate</div>
                                            </div>
                                            <ul className="pr-body">
                                                <li>
                                                    <div className="pr-text">Full Access Library</div>
                                                    <i className="icon flaticon-tick available"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">Multiple User</div>
                                                    <i className="icon flaticon-tick available"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">Refund</div>
                                                    <i className="icon flaticon-tick available"></i>
                                                </li>
                                                <li>
                                                    <div className="pr-text">24/7 Support</div>
                                                    <i className="icon flaticon-tick available"></i>
                                                </li>
                                            </ul>
                                            <div className="pr-footer">
                                                <a href="#" className="choose-button line-button-two">Choose Plan</a>
                                                <p>Get your 30 day free trial</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="element-section mb-150">
                    <div className="seo-our-pricing">
                        <div className="container">
                            <div className="theme-title-one title-underline text-center">
                                <div className="upper-title">Pricing Plan</div>
                                <h2 className="main-title">No Hidden Charges! Choose <br />your Plan.</h2>
                            </div>

                            <div className="row">
                                <div className="col-lg-4" data-aos="fade-up">
                                    <div className="single-pr-table subway">
                                        <div className="pr-header">
                                            <img src="images/icon/icon15.svg" alt="" className="icon" data-aos="fade-right" />
                                            <h4 className="title">Subway</h4>
                                            <div className="price">$39.<sup>99</sup></div>
                                            <div className="package">Weekly</div>
                                        </div>
                                        <div className="pr-body">
                                            <h3 className="slogan">Quick job, Small Work</h3>
                                            <ul>
                                                <li>50GB Bandwidth</li>
                                                <li>Business Financ Analysing</li>
                                                <li>24 hour support</li>
                                                <li>Customer Managemet</li>
                                            </ul>
                                        </div>
                                        <div className="pr-footer">
                                            <a href="#" className="plan-button line-button-two">Choose Plan</a>
                                            <a href="#" className="trial-button">Get your 30 day free trial</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                                    <div className="single-pr-table sandwich">
                                        <div className="pr-header">
                                            <img src="images/icon/icon16.svg" alt="" className="icon" data-aos="fade-right" />
                                            <h4 className="title">Sandwich</h4>
                                            <div className="price">$99.<sup>99</sup></div>
                                            <div className="package">Monthly</div>
                                        </div>
                                        <div className="pr-body">
                                            <h3 className="slogan">Bigger, Great for Team</h3>
                                            <ul>
                                                <li>50GB Bandwidth</li>
                                                <li>Business & Financ Analysing</li>
                                                <li>24 hour support</li>
                                                <li>Customer Managemet</li>
                                            </ul>
                                        </div>
                                        <div className="pr-footer">
                                            <a href="#" className="plan-button line-button-two">Choose Plan</a>
                                            <a href="#" className="trial-button">Get your 30 day free trial</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="500">
                                    <div className="single-pr-table burger">
                                        <div className="pr-header">
                                            <img src="images/icon/icon17.svg" alt="" className="icon" data-aos="fade-right" />
                                            <h4 className="title">Burger</h4>
                                            <div className="price">$989.<sup>99</sup></div>
                                            <div className="package">yealry</div>
                                        </div>
                                        <div className="pr-body">
                                            <h3 className="slogan"> Great for Corporation</h3>
                                            <ul>
                                                <li>50GB Bandwidth</li>
                                                <li>Business & Financ Analysing</li>
                                                <li>24 hour support</li>
                                                <li>Customer Managemet</li>
                                            </ul>
                                        </div>
                                        <div className="pr-footer">
                                            <a href="#" className="plan-button line-button-two">Choose Plan</a>
                                            <a href="#" className="trial-button">Get your 30 day free trial</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="element-section mb-150">
                    <div className="sass-our-pricing p0">
                        <div className="section-shape-one"><img src="images/shape/shape-18.svg" alt="" /></div>
                        <img src="images/shape/shape-24.svg" alt="" className="section-shape-two" data-aos="fade-right" data-aos-duration="3000" />
                        <img src="images/shape/shape-25.svg" alt="" className="section-shape-three" />
                        <div className="section-shape-four"></div>
                        <img src="images/shape/shape-26.svg" alt="" className="section-shape-five" />
                        <img src="images/shape/shape-27.svg" alt="" className="section-shape-six" data-aos="fade-left" data-aos-duration="3000" />


                        <div className="container">
                            <div className="theme-title-one text-center hide-pr">
                                <div className="icon-box hide-pr">
                                    <img src="images/shape/bg-shape4.svg" alt="" className="bg-shape" />
                                    <img src="images/icon/icon26.svg" alt="" className="icon" />
                                </div>
                                <h2 className="main-title">No Hidden Charges! Choose <br />your Plan.</h2>
                            </div>


                            <div className="pricing-tab-menu pb-150">
                                <div className="nav-wrapper">
                                    <ul className="nav nav-tabs justify-content-center">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#month1">Monthly</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#annual1">Annual</a></li>
                                    </ul>
                                </div>
                                <p>Save 30% on annual plan</p>
                            </div>


                            <div className="tab-content">

                                <div id="month1" className="tab-pane fade show active">
                                    <div className="row no-gutters">
                                        <div className="col-lg-4">
                                            <div className="single-pr-table free">
                                                <div className="pr-header">
                                                    <div className="price">$0.00</div>
                                                    <h4 className="title">Free</h4>
                                                </div>
                                                <div className="pr-body">
                                                    <h3 className="feature">Top Features</h3>
                                                    <ul>
                                                        <li>Limited Acess Library</li>
                                                        <li>Single User</li>
                                                        <li>No Updates</li>
                                                    </ul>
                                                </div>
                                                <div className="pr-footer">
                                                    <a href="#" className="upgrade-button">Upgrade</a>
                                                    <a href="#" className="trial-button">Get your 30 day free trial</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="single-pr-table regular">
                                                <div className="pr-header">
                                                    <div className="price">$11.25</div>
                                                    <h4 className="title">Reguler</h4>
                                                    <div className="package">Single User, Billed Monthly</div>
                                                </div>
                                                <div className="pr-body">
                                                    <h3 className="feature">Top Features</h3>
                                                    <ul>
                                                        <li>Full Acess Library</li>
                                                        <li>Multiple User</li>
                                                        <li>10gb Bandwith & 2 Panel</li>
                                                        <li>2x Faster speed </li>
                                                    </ul>
                                                </div>
                                                <div className="pr-footer">
                                                    <a href="#" className="upgrade-button">Upgrade</a>
                                                    <a href="#" className="trial-button">Get your 30 day free trial</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="single-pr-table plus">
                                                <div className="pr-header">
                                                    <div className="price">$39.15</div>
                                                    <h4 className="title">Plus</h4>
                                                    <div className="package">Multiple User, Billed Monthly</div>
                                                </div>
                                                <div className="pr-body">
                                                    <h3 className="feature">Top Features</h3>
                                                    <ul>
                                                        <li>Full Acess Library</li>
                                                        <li>Multiple User</li>
                                                        <li>10gb Bandwith & 2 Panel</li>
                                                        <li>2x Faster speed </li>
                                                        <li>Hotline Support 24x7</li>
                                                    </ul>
                                                </div>
                                                <div className="pr-footer">
                                                    <a href="#" className="upgrade-button">Upgrade</a>
                                                    <a href="#" className="trial-button">Get your 30 day free trial</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="annual1" className="tab-pane fade">
                                    <div className="row no-gutters">
                                        <div className="col-lg-4">
                                            <div className="single-pr-table free">
                                                <div className="pr-header">
                                                    <div className="price">$0.00</div>
                                                    <h4 className="title">Free</h4>
                                                </div>
                                                <div className="pr-body">
                                                    <h3 className="feature">Top Features</h3>
                                                    <ul>
                                                        <li>Limited Acess Library</li>
                                                        <li>Single User</li>
                                                        <li>No Updates</li>
                                                    </ul>
                                                </div>
                                                <div className="pr-footer">
                                                    <a href="#" className="upgrade-button">Upgrade</a>
                                                    <a href="#" className="trial-button">Get your 30 day free trial</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="single-pr-table regular">
                                                <div className="pr-header">
                                                    <div className="price">$560.25</div>
                                                    <h4 className="title">Reguler</h4>
                                                    <div className="package">Single User, Billed Monthly</div>
                                                </div>
                                                <div className="pr-body">
                                                    <h3 className="feature">Top Features</h3>
                                                    <ul>
                                                        <li>Full Acess Library</li>
                                                        <li>Multiple User</li>
                                                        <li>10gb Bandwith & 2 Panel</li>
                                                        <li>2x Faster speed </li>
                                                    </ul>
                                                </div>
                                                <div className="pr-footer">
                                                    <a href="#" className="upgrade-button">Upgrade</a>
                                                    <a href="#" className="trial-button">Get your 30 day free trial</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="single-pr-table plus">
                                                <div className="pr-header">
                                                    <div className="price">$999.15</div>
                                                    <h4 className="title">Plus</h4>
                                                    <div className="package">Multiple User, Billed Monthly</div>
                                                </div>
                                                <div className="pr-body">
                                                    <h3 className="feature">Top Features</h3>
                                                    <ul>
                                                        <li>Full Acess Library</li>
                                                        <li>Multiple User</li>
                                                        <li>10gb Bandwith & 2 Panel</li>
                                                        <li>2x Faster speed </li>
                                                        <li>Hotline Support 24x7</li>
                                                    </ul>
                                                </div>
                                                <div className="pr-footer">
                                                    <a href="#" className="upgrade-button">Upgrade</a>
                                                    <a href="#" className="trial-button">Get your 30 day free trial</a>
                                                </div>
                                            </div>
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

export default pricing;