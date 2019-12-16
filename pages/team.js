import React,{Component} from 'react';
import Layout from '../components/Layout';
class team extends Component {

    render() {
        return (
            <Layout>

                <div className="solid-inner-banner">
                    <h2 className="page-title">Баг хамт олон</h2>
                    <ul className="page-breadcrumbs">
                        <li><a href="/">Эхлэл</a></li>
                        <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                        <li>Баг хамт олон </li>
                    </ul>
                </div>

                <div className="team-business our-team pt-150 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-team-member">
                                    <div className="wrapper d-sm-flex">
                                        <div className="img-box">
                                            <img src="images/team/16.jpg" alt="" />
                                        </div>
                                        <div className="info-meta">
                                            <h6 className="name">Hunter Chapman</h6>
                                            <span>Co-Founder</span>
                                            <q>lorem ipsum some intrducing text will be here</q>
                                            <img src="images/home/sign2.png" alt="" className="signature" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-team-member">
                                    <div className="wrapper d-sm-flex">
                                        <div className="img-box">
                                            <img src="images/team/17.jpg" alt="" />
                                        </div>
                                        <div className="info-meta">
                                            <h6 className="name">Richard Lowe</h6>
                                            <span>UI/UX designer</span>
                                            <q>lorem ipsum some intrducing text will be here</q>
                                            <img src="images/home/sign2.png" alt="" className="signature" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-team-member">
                                    <div className="wrapper d-sm-flex">
                                        <div className="img-box">
                                            <img src="images/team/18.jpg" alt="" />
                                        </div>
                                        <div className="info-meta">
                                            <h6 className="name">Johnny Yates</h6>
                                            <span>Project Manager</span>
                                            <q>lorem ipsum some intrducing text will be here</q>
                                            <img src="images/home/sign2.png" alt="" className="signature" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-team-member">
                                    <div className="wrapper d-sm-flex">
                                        <div className="img-box">
                                            <img src="images/team/19.jpg" alt="" />
                                        </div>
                                        <div className="info-meta">
                                            <h6 className="name">Ella Saunders</h6>
                                            <span>SEO Expert</span>
                                            <q>lorem ipsum some intrducing text will be here</q>
                                            <img src="images/home/sign2.png" alt="" className="signature" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-team-member">
                                    <div className="wrapper d-sm-flex">
                                        <div className="img-box">
                                            <img src="images/team/20.jpg" alt="" />
                                        </div>
                                        <div className="info-meta">
                                            <h6 className="name">Jerry Buchanan</h6>
                                            <span>Developer</span>
                                            <q>lorem ipsum some intrducing text will be here</q>
                                            <img src="images/home/sign2.png" alt="" className="signature" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-team-member">
                                    <div className="wrapper d-sm-flex">
                                        <div className="img-box">
                                            <img src="images/team/21.jpg" alt="" />
                                        </div>
                                        <div className="info-meta">
                                            <h6 className="name">Joshua Parsons</h6>
                                            <span>Marketing Expert</span>
                                            <q>lorem ipsum some intrducing text will be here</q>
                                            <img src="images/home/sign2.png" alt="" className="signature" />
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

export default team;