import React,{Component} from 'react';
import Layout from '../components/Layout';
class successStory extends Component {

    componentDidMount() {
        var logoslider = $('.project-minimal-slider');
        if(logoslider.length) {
            logoslider.owlCarousel({
                loop: true,
                nav: true,
                navText: ["<i class='flaticon-back'></i>","<i class='flaticon-next'></i>"],
                dots: false,
                autoplay: true,
                margin: 45,
                autoplayTimeout: 4500,
                autoplaySpeed: 1000,
                lazyLoad: true,
                singleItem: true,
                center: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
    }

    render() {
        return (
            <Layout>
                <div className="our-project project-minimal-style">
                    <div className="inner-wrapper">
                        <div className="project-minimal-slider">

                            <div className="item">
                                <div className="project-item">
                                    <div className="img-box"><img src="images/gallery/36.jpg" alt="" /></div>
                                    <div className="hover-valina">
                                        <div>
                                            <h4 className="title"><a href="project-details-creative.html">Lonely <span>Steve</span></a></h4>
                                            <p>Rogan dances in the deep dark</p>
                                            <a href="images/gallery/36.jpg" className="zoom fancybox" data-fancybox="gallery"><img src="images/icon/zoom-in.svg" alt="" className="svg" /></a>
                                        </div>
                                    </div> {/* /.hover-valina */}
                                </div> {/* /.project-item */}
                            </div> {/* /.item */}

                            <div className="item">
                                <div className="project-item">
                                    <div className="img-box"><img src="images/gallery/41.jpg" alt="" /></div>
                                    <div className="hover-valina">
                                        <div>
                                            <h4 className="title"><a href="project-details-creative.html">Lonely <span>Steve</span></a></h4>
                                            <p>Rogan dances in the deep dark</p>
                                            <a href="images/gallery/41.jpg" className="zoom fancybox" data-fancybox="gallery"><img src="images/icon/zoom-in.svg" alt="" className="svg" /></a>
                                        </div>
                                    </div> {/* /.hover-valina */}
                                </div> {/* /.project-item */}
                            </div> {/* /.item */}

                            <div className="item">
                                <div className="project-item">
                                    <div className="img-box"><img src="images/gallery/40.jpg" alt="" /></div>
                                    <div className="hover-valina">
                                        <div>
                                            <h4 className="title"><a href="project-details-creative.html">Lonely <span>Steve</span></a></h4>
                                            <p>Rogan dances in the deep dark</p>
                                            <a href="images/gallery/40.jpg" className="zoom fancybox" data-fancybox="gallery"><img src="images/icon/zoom-in.svg" alt="" className="svg" /></a>
                                        </div>
                                    </div> {/* /.hover-valina */}
                                </div> {/* /.project-item */}
                            </div> {/* /.item */}


                        </div> {/* /.project-minimal-slider */}
                        <ul className="share-icon">
                            <li>Share it:</li>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        </ul>
                    </div> {/* /.inner-wrapper */}
                </div> {/* /.our-project */}
            </Layout>
        )
    }
}

export default successStory;