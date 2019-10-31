import Link from 'next/link';


const Header = () => (
  <div className="theme-main-menu theme-menu-one d-align-item">
        <div className="logo"><a href="index.html"><img src="images/logo/logo3.svg" alt="" /></a></div>
        <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
          <div className="ml-auto nav-container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="flaticon-setup" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active dropdown">
                  <a href="index.html" className="nav-link dropdown-toggle" data-toggle="dropdown">Home.</a>
                  <ul className="dropdown-menu mega-container">
                    <li>
                      <div className="clearfix">
                        <div className="row">
                          <div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
                            <a href="index.html" className="img-box">
                              <span className="img"><img src="images/menu-img/home-1.jpg" alt="" /></span>
                              <span className="text">Creative Agency</span>
                            </a>
                          </div>
                          <div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
                            <a href="index-seo.html" className="img-box">
                              <span className="img"><img src="images/menu-img/home-2.jpg" alt="" /></span>
                              <span className="text">SEO &amp; Business</span>
                            </a>
                          </div>
                          <div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
                            <a href="index-portfolio.html" className="img-box">
                              <span className="img"><img src="images/menu-img/home-3.jpg" alt="" /></span>
                              <span className="text">Personal Portfolio</span>
                            </a>
                          </div>
                          <div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
                            <a href="index-portfolio-pr.html" className="img-box">
                              <span className="img"><img src="images/menu-img/home-7.jpg" alt="" /></span>
                              <span className="text">Personal Portfolio (Particles)</span>
                            </a>
                          </div>
                          <div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
                            <a href="index-sass.html" className="img-box">
                              <span className="img"><img src="images/menu-img/home-5.jpg" alt="" /></span>
                              <span className="text">Saas Landing</span>
                            </a>
                          </div>
                          <div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
                            <a href="index-app.html" className="img-box">
                              <span className="img"><img src="images/menu-img/home-4.jpg" alt="" /></span>
                              <span className="text">Mobile App Landing</span>
                            </a>
                          </div>
                          <div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
                            <a href="index-eCommerce.html" className="img-box">
                              <span className="img"><img src="images/menu-img/home-6.jpg" alt="" /></span>
                              <span className="text">eCommerce</span>
                            </a>
                          </div>
                          <div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
                            <a href="index-arch.html" className="img-box">
                              <span className="img"><img src="images/menu-img/home-8.jpg" alt="" /></span>
                              <span className="text">Architecture</span>
                            </a>
                          </div>
                          <div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
                            <a href="index-portfolio-studio.html" className="img-box">
                              <span className="img"><img src="images/menu-img/home-9.jpg" alt="" /></span>
                              <span className="text">Portfolio Studio</span>
                            </a>
                          </div>
                          <div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
                            <a href="index-portfolio-studio-two.html" className="img-box">
                              <span className="img"><img src="images/menu-img/home-10.jpg" alt="" /></span>
                              <span className="text">Portfolio Studio Two</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown position-relative">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Pages.</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-submenu dropdown">
                      <a className="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">About Us</a>
                      <ul className="dropdown-menu">
                        <li><a href="about-us-agency.html" className="dropdown-item">About Us agency</a></li>
                        <li><a href="about-us-standard.html" className="dropdown-item">About Us standard</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu dropdown">
                      <a className="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">Project</a>
                      <ul className="dropdown-menu">
                        <li><a href="project-full-width.html" className="dropdown-item">Project Full width</a></li>
                        <li><a href="project-minimal.html" className="dropdown-item">Project minimal</a></li>
                        <li><a href="project-creative.html" className="dropdown-item">Project creative <span>new</span></a></li>
                        <li><a href="project-ms-full-width.html" className="dropdown-item">Project masonry full</a></li>
                        <li><a href="project-ms-grid.html" className="dropdown-item">Project masonry grid</a></li>
                        <li><a href="project-standard.html" className="dropdown-item">Project Standard</a></li>
                        <li><a href="project-with-sidebar.html" className="dropdown-item">project with sidebar</a></li>
                        <li className="dropdown-submenu dropdown">
                          <a className="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">Project Details</a>
                          <ul className="dropdown-menu">
                            <li><a href="project-details-standard.html" className="dropdown-item">Project Details standard</a></li>
                            <li><a href="project-details-agency.html" className="dropdown-item">Project Details agnecy</a></li>
                            <li><a href="project-details-business.html" className="dropdown-item">Project Details business</a></li>
                            <li><a href="project-details-creative.html" className="dropdown-item">Project Details creative</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu dropdown">
                      <a className="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">Services</a>
                      <ul className="dropdown-menu">
                        <li><a href="service-creative.html" className="dropdown-item">Service creative</a></li>
                        <li><a href="service-minimal.html" className="dropdown-item">service minimal</a></li>
                        <li><a href="service-modern.html" className="dropdown-item">service modern</a></li>
                        <li><a href="service-standard.html" className="dropdown-item">service Standard</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu dropdown">
                      <a className="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">Team</a>
                      <ul className="dropdown-menu">
                        <li><a href="team-business.html" className="dropdown-item">Team Business</a></li>
                        <li><a href="team-minimal.html" className="dropdown-item">Team minimal</a></li>
                        <li><a href="team-standard.html" className="dropdown-item">Team standard</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu dropdown">
                      <a className="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">Contact Us</a>
                      <ul className="dropdown-menu">
                        <li><a href="contact-us-agency.html" className="dropdown-item">Contact Agency</a></li>
                        <li><a href="contact-us-minimal.html" className="dropdown-item">Contact Minimal</a></li>
                        <li><a href="contact-us-standard.html" className="dropdown-item">Contact standard</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu dropdown">
                      <a className="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">Error</a>
                      <ul className="dropdown-menu">
                        <li><a href="404-creative.html" className="dropdown-item">error Creative</a></li>
                        <li><a href="404-standard.html" className="dropdown-item">error standard</a></li>
                      </ul>
                    </li>
                  </ul> {/* /.dropdown-menu */}
                </li>
                <li className="nav-item dropdown position-relative">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Features.</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-submenu dropdown">
                      <a className="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">Shop</a>
                      <ul className="dropdown-menu">
                        <li><a href="product-full-width.html" className="dropdown-item">Shop Full width</a></li>
                        <li><a href="product-with-sidebar.html" className="dropdown-item">Shop With sidebar</a></li>
                        <li><a href="shop.html" className="dropdown-item">Shop standard</a></li>
                        <li><a href="shop-details.html" className="dropdown-item">Single product</a></li>
                      </ul>
                    </li>
                    <li><a href="features.html" className="dropdown-item">Features</a></li>
                    <li><a href="faq.html" className="dropdown-item">Faq</a></li>
                    <li><a href="checkout.html" className="dropdown-item">Checkout</a></li>
                    <li><a href="cart.html" className="dropdown-item">Cart</a></li>
                    <li className="dropdown-submenu dropdown">
                      <a className="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">User pages <span>new</span></a>
                      <ul className="dropdown-menu">
                        <li><a href="login-standard.html" className="dropdown-item">Login Standard</a></li>
                        <li><a href="login-minimal.html" className="dropdown-item">Login Minimal</a></li>
                        <li><a href="sign-up-standard.html" className="dropdown-item">Sign-Up Standard</a></li>
                        <li><a href="sign-up-minimal.html" className="dropdown-item">Sign-Up Minimal</a></li>
                      </ul>
                    </li>
                  </ul> {/* /.dropdown-menu */}
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">elements.</a>
                  <ul className="dropdown-menu mega-container">
                    <li>
                      <div className="clearfix">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
                            <h6 className="mega-menu-title">Element 1</h6>
                            <ul className="list-unstyled mega-dropdown-list">
                              <li><a href="ui-testimonial.html"><img src="images/menu-icon/icon1.svg" alt="" className="svg" />Testimonials</a></li>
                              <li><a href="ui-pricing-table.html"><img src="images/menu-icon/icon2.svg" alt="" className="svg" />Pricing Plan</a></li>
                              <li><a href="ui-team.html"><img src="images/menu-icon/icon3.svg" alt="" className="svg" />Team</a></li>
                              <li><a href="ui-dropdown.html"><img src="images/menu-icon/icon4.svg" alt="" className="svg" />Dropdown</a></li>
                              <li><a href="ui-tooltips.html"><img src="images/menu-icon/icon5.svg" alt="" className="svg" />Tooltips</a></li>
                              <li><a href="ui-header.html"><img src="images/menu-icon/icon6.svg" alt="" className="svg" />Header <span>New</span></a></li>
                            </ul>
                          </div>
                          <div className="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
                            <h6 className="mega-menu-title">Element 2</h6>
                            <ul className="list-unstyled mega-dropdown-list">
                              <li><a href="ui-accordion.html"><img src="images/menu-icon/icon7.svg" alt="" className="svg" />Accordion</a></li>
                              <li><a href="ui-alert.html"><img src="images/menu-icon/icon8.svg" alt="" className="svg" />Alert</a></li>
                              <li><a href="ui-badges.html"><img src="images/menu-icon/icon9.svg" alt="" className="svg" />Badges</a></li>
                              <li><a href="ui-gallery.html"><img src="images/menu-icon/icon10.svg" alt="" className="svg" />Gallery</a></li>
                              <li><a href="ui-typography.html"><img src="images/menu-icon/icon11.svg" alt="" className="svg" />Typography</a></li>
                              <li><a href="ui-tabs.html"><img src="images/menu-icon/icon18.svg" alt="" className="svg" />Tabs <span>New</span></a></li>
                            </ul>								                  </div>
                          <div className="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
                            <h6 className="mega-menu-title">Element 3</h6>
                            <ul className="list-unstyled mega-dropdown-list">
                              <li><a href="ui-blog-post.html"><img src="images/menu-icon/icon12.svg" alt="" className="svg" />Post</a></li>
                              <li><a href="ui-breadcrumbs.html"><img src="images/menu-icon/icon13.svg" alt="" className="svg" />Breadcrumbs</a></li>
                              <li><a href="ui-button.html"><img src="images/menu-icon/icon14.svg" alt="" className="svg" />Button</a></li>
                              <li><a href="ui-list.html"><img src="images/menu-icon/icon15.svg" alt="" className="svg" />List</a></li>
                              <li><a href="ui-footer.html"><img src="images/menu-icon/icon16.svg" alt="" className="svg" />Footer <span>New</span></a></li>
                            </ul>
                          </div>
                          <div className="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
                            <h6 className="mega-menu-title">Element 4</h6>
                            <ul className="list-unstyled mega-dropdown-list">
                              <li><a href="ui-color.html"><img src="images/menu-icon/icon17.svg" alt="" className="svg" />Color</a></li>
                              <li><a href="ui-contact-form.html"><img src="images/menu-icon/icon18.svg" alt="" className="svg" />Contact Form</a></li>
                              <li><a href="ui-counter.html"><img src="images/menu-icon/icon19.svg" alt="" className="svg" />Counter</a></li>
                              <li><a href="ui-pagination.html"><img src="images/menu-icon/icon20.svg" alt="" className="svg" />Pagination</a></li>
                              <li><a href="ui-modal.html"><i className="icon flaticon-login" /> Modal <span>New</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown position-relative">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">News.</a>
                  <ul className="dropdown-menu">
                    <li><a href="blog-default.html" className="dropdown-item">Blog default</a></li>
                    <li><a href="blog-filter.html" className="dropdown-item">Blog filter</a></li>
                    <li><a href="blog-full-grid.html" className="dropdown-item">Blog Full Grid</a></li>
                    <li><a href="blog-masonry.html" className="dropdown-item">blog masonry</a></li>
                    <li><a href="blog-details.html" className="dropdown-item">blog details</a></li>
                    <li><a href="blog-details-full-grid.html" className="dropdown-item">blog details full grid</a></li>
                  </ul> {/* /.dropdown-menu */}
                </li>
                <li className="login-button"><a href="login-standard.html">Login</a></li>
              </ul>
            </div>
          </div> {/* /.container */}
        </nav> {/* /#mega-menu-holder */}
        <div className="header-right-widget">
          <ul>
            <li className="call-us"><a href="#">+880.762.009</a></li>
            <li className="language-switcher">
              <div className="dropdown">
                <button type="button" className="dropdown-toggle" data-toggle="dropdown">
                  En
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="ct-language__dropdown">
                    <li><a href="#googtrans(en|en)" className="lang-en lang-select" data-lang="en">USA</a></li>
                    <li><a href="#googtrans(en|es)" className="lang-es lang-select" data-lang="es">MEXICO</a></li>
                    <li><a href="#googtrans(en|fr)" className="lang-es lang-select" data-lang="fr">FRANCE</a></li>
                    <li><a href="#googtrans(en|zh-CN)" className="lang-es lang-select" data-lang="zh-CN">CHINA</a></li>
                    <li><a href="#googtrans(en|de)" className="lang-es lang-select" data-lang="de">German</a></li>
                    <li><a href="#googtrans(en|hi)" className="lang-es lang-select" data-lang="hi">Hindi</a></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div> {/* /.header-right-widget */}
      </div>
);

export default Header;
