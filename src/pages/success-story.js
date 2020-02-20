import React, { Component } from 'react';
import Layout from '../components/Layout';

class SuccessStory extends Component {
  render() {
    return (
      <Layout>
        <div className="solid-inner-banner">
          <div className="banner-overlay" />
          <h2 className="page-title">Амжилтын Түүх</h2>
        </div>
        <div className="our-project pt-90">
          <ul className="isotop-menu-wrapper pb-100">
            <li className="is-checked" data-filter="*">Бүгд</li>
            <li data-filter=".bank">Банк, санхүү</li>
            <li data-filter=".mobile">Үүрэн телефон</li>
            <li data-filter=".business">Бизнес</li>
            <li data-filter=".marketing">Mаркетинг</li>
          </ul>

          <div id="isotop-gallery-wrapper">
            <div className="grid-sizer"></div>
              <div className="isotop-item marketing">
                <div className="project-item">
                  <div className="img-box"><img src="images/success-story/newmedia.png" alt=""/></div>
                  <div className="hover-jojo">
                    <div>
                      <h4 className="title"><a href="/success-story-detail">НЬЮ МЕДИА ГРУПП</a></h4>
                      <div>
                        <p>Нью Медиа Групп нь</p>
                        <p>мэдээллийн технологийн</p>
                        <p>шийдлээр бизнесийг</p>
                        <p>дэмжин хөгжүүлэгч компани.</p>
                      </div>
                      <ul>
                        <li>
                          <a href="/success-story-detail">
                            <span>+</span>
                          </a>
                        </li>
                        <li><a href="images/success-story/newmedia.png" className="zoom fancybox" data-fancybox="gallery"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            <div className="isotop-item bank">
              <div className="project-item">
                <div className="img-box"><img src="images/success-story/golomt.png" alt=""/></div>
                <div className="hover-jojo">
                  <div>
                    <h4 className="title"><a href="/golomt-detail">Голомт банк</a></h4>
                    <div>
                      <p>Монголд төлбөрийн</p>
                      <p>картын системийг анхлан</p>
                      <p>нэвтрүүлэгч Голомт банк</p>
                    </div>
                    <ul>
                      <li>
                        <a href="/golomt-detail">
                          <span>+</span>
                        </a>
                      </li>
                      <li><a href="images/success-story/golomt.png" className="zoom fancybox" data-fancybox="gallery"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="isotop-item bank">
              <div className="project-item">
                <div className="img-box"><img src="images/success-story/capitron.png" alt=""/></div>
                <div className="hover-jojo">
                  <div>
                    <h4 className="title"><a href="#">Капитрон банк</a></h4>
                    <div>
                      <p>100 хувийн үндэсний</p>
                      <p>хөрөнгө оруулалтай арилжааны</p>
                      <p>Капитрон банк</p>
                    </div>
                    <ul>
                      <li><a href="#"><span>+</span></a></li>
                      <li><a href="images/success-story/capitron.png" className="zoom fancybox" data-fancybox="gallery"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="isotop-item mobile">
              <div className="project-item">
                <div className="img-box"><img src="images/success-story/skytel.png" alt=""/></div>
                <div className="hover-jojo">
                  <div>
                    <h4 className="title"><a href="#">СКАЙтел</a></h4>
                    <div>
                      <p>Монгол даяар 3G сүлжээ</p>
                      <p>бүхий үндэсний үүрэн холбооны</p>
                      <p>тэргүүлэх оператор СКАЙтел</p>
                    </div>
                    <ul>
                      <li><a href="#"><span>+</span></a></li>
                      <li><a href="images/success-story/skytel.png" className="zoom fancybox" data-fancybox="gallery"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="isotop-item mobile">
              <div className="project-item">
                <div className="img-box"><img src="images/success-story/mobicom.png" alt=""/></div>
                <div className="hover-jojo">
                  <div>
                    <h4 className="title"><a href="#">Мобиком</a></h4>
                    <div>
                      <p>Монголын анхны үүрэн</p>
                      <p>холбооны оператор</p>
                      <p>Мобиком Корпораци</p>
                    </div>
                    <ul>
                      <li><a href="#"><span>+</span></a></li>
                      <li><a href="images/success-story/mobicom.png" className="zoom fancybox" data-fancybox="gallery"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="isotop-item business">
              <div className="project-item">
                <div className="img-box"><img src="images/success-story/tavanbogd.png" alt=""/></div>
                <div className="hover-jojo">
                  <div>
                    <h4 className="title"><a href="#">Таван богд групп</a></h4>
                    <div>
                      <p>Өнөөдөр Таван Богд групп нь</p>
                      <p>16 охин компани, 3 хөрөнгө оруулалттай компани</p>
                      <p>4 бизнес нэгж, нийт 12,000 гаруй ажиллагсадтай</p>
                      <p>ажиллаж байна</p>
                    </div>
                    <ul>
                      <li><a href="#"><span>+</span></a></li>
                      <li><a href="images/success-story/tavanbogd.png" className="zoom fancybox" data-fancybox="gallery"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="isotop-item business">
              <div className="project-item">
                <div className="img-box"><img src="images/success-story/teso.png" alt=""/></div>
                <div className="hover-jojo">
                  <div>
                    <h4 className="title"><a href="#">ТЭСО Корпораци</a></h4>
                    <div>
                      <p>Хэрэглэгчидэд зөвхөн чанартай</p>
                      <p>бүтээгдэхүүн, үйлчилгээ хүргэхийг</p>
                      <p>эрхэм үүргээ гэж үздэг</p>
                    </div>
                    <ul>
                      <li><a href="#"><span>+</span></a></li>
                      <li><a href="images/success-story/teso.png" className="zoom fancybox" data-fancybox="gallery"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                    </ul>
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

export default SuccessStory;
