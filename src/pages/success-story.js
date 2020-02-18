import React, { Component } from 'react';
import Layout from '../components/Layout';

class SuccessStory extends Component {
  render() {
    return (
      <Layout>
        <div class="solid-inner-banner">
          <h2 class="page-title">Амжилтын Түүх</h2>
          <ul class="page-breadcrumbs">
            <li><a href="/">Нүүр хуудас</a></li>
            <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
            <li>Амжилтын Түүх</li>
          </ul>
        </div>
        <div class="our-project pt-150">
          <ul class="isotop-menu-wrapper pb-100">
            <li class="is-checked" data-filter="*">Бүгд</li>
            <li data-filter=".bank">Банк, санхүү</li>
            <li data-filter=".mobile">Үүрэн телефон</li>
            <li data-filter=".business">Бизнес</li>
            <li data-filter=".marketing">Mаркетинг</li>
          </ul>

          <div id="isotop-gallery-wrapper">
            <div class="grid-sizer"></div>
              <div class="isotop-item marketing">
                <div class="project-item">
                  <div class="img-box"><img src="images/success-story/newmedia.png" alt=""/></div>
                  <div class="hover-jojo">
                    <div>
                      <h4 class="title"><a href="/success-story-detail">НЬЮ МЕДИА ГРУПП</a></h4>
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
                        <li><a href="images/success-story/newmedia.png" class="zoom fancybox" data-fancybox="gallery"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            <div class="isotop-item bank">
              <div class="project-item">
                <div class="img-box"><img src="images/success-story/golomt.png" alt=""/></div>
                <div class="hover-jojo">
                  <div>
                    <h4 class="title"><a href="/success-story-detail">Голомт банк</a></h4>
                    <div>
                      <p>Монголд төлбөрийн</p>
                      <p>картын системийг анхлан</p>
                      <p>нэвтрүүлэгч Голомт банк</p>
                    </div>
                    <ul>
                      <li>
                        <a href="/success-story-detail">
                          <span>+</span>
                        </a>
                      </li>
                      <li><a href="images/success-story/golomt.png" class="zoom fancybox" data-fancybox="gallery"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="isotop-item bank">
              <div class="project-item">
                <div class="img-box"><img src="images/success-story/capitron.png" alt=""/></div>
                <div class="hover-jojo">
                  <div>
                    <h4 class="title"><a href="/success-story-detail">Капитрон банк</a></h4>
                    <div>
                      <p>100 хувийн үндэсний</p>
                      <p>хөрөнгө оруулалтай арилжааны</p>
                      <p>Капитрон банк</p>
                    </div>
                    <ul>
                      <li><a href="/success-story-detail"><span>+</span></a></li>
                      <li><a href="images/success-story/capitron.png" class="zoom fancybox" data-fancybox="gallery"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="isotop-item mobile">
              <div class="project-item">
                <div class="img-box"><img src="images/success-story/skytel.png" alt=""/></div>
                <div class="hover-jojo">
                  <div>
                    <h4 class="title"><a href="/success-story-detail">СКАЙтел</a></h4>
                    <div>
                      <p>Монгол даяар 3G сүлжээ</p>
                      <p>бүхий үндэсний үүрэн холбооны</p>
                      <p>тэргүүлэх оператор СКАЙтел</p>
                    </div>
                    <ul>
                      <li><a href="/success-story-detail"><span>+</span></a></li>
                      <li><a href="images/success-story/skytel.png" class="zoom fancybox" data-fancybox="gallery"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="isotop-item mobile">
              <div class="project-item">
                <div class="img-box"><img src="images/success-story/mobicom.png" alt=""/></div>
                <div class="hover-jojo">
                  <div>
                    <h4 class="title"><a href="/success-story-detail">Мобиком</a></h4>
                    <div>
                      <p>Монголын анхны үүрэн</p>
                      <p>холбооны оператор</p>
                      <p>Мобиком Корпораци</p>
                    </div>
                    <ul>
                      <li><a href="/success-story-detail"><span>+</span></a></li>
                      <li><a href="images/success-story/mobicom.png" class="zoom fancybox" data-fancybox="gallery"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="isotop-item business">
              <div class="project-item">
                <div class="img-box"><img src="images/success-story/tavanbogd.png" alt=""/></div>
                <div class="hover-jojo">
                  <div>
                    <h4 class="title"><a href="/success-story-detail">Таван богд групп</a></h4>
                    <div>
                      <p>Өнөөдөр Таван Богд групп нь</p>
                      <p>16 охин компани, 3 хөрөнгө оруулалттай компани</p>
                      <p>4 бизнес нэгж, нийт 12,000 гаруй ажиллагсадтай</p>
                      <p>ажиллаж байна</p>
                    </div>
                    <ul>
                      <li><a href="/success-story-detail"><span>+</span></a></li>
                      <li><a href="images/success-story/tavanbogd.png" class="zoom fancybox" data-fancybox="gallery"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="isotop-item business">
              <div class="project-item">
                <div class="img-box"><img src="images/success-story/teso.png" alt=""/></div>
                <div class="hover-jojo">
                  <div>
                    <h4 class="title"><a href="/success-story-detail">ТЭСО Корпораци</a></h4>
                    <div>
                      <p>Хэрэглэгчидэд зөвхөн чанартай</p>
                      <p>бүтээгдэхүүн, үйлчилгээ хүргэхийг</p>
                      <p>эрхэм үүргээ гэж үздэг</p>
                    </div>
                    <ul>
                      <li><a href="/success-story-detail"><span>+</span></a></li>
                      <li><a href="images/success-story/teso.png" class="zoom fancybox" data-fancybox="gallery"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="agn-contact-banner">
  				<div class="container">
  					<h2 class="title">Do you have any projects? <br />Contact us.</h2>
  					<a href="contact-us-agency.html" class="contact-button line-button-one">Contact Us</a>
  				</div>
  			</div>
      </Layout>
    )
  }
}

export default SuccessStory;
