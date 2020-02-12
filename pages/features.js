import React, { Component } from 'react';
import Layout from '../components/Layout';

class Features extends Component {
  render() {
    return (
      <Layout>
        <div className="solid-inner-banner">
          <h2 className="page-title">Боломжууд</h2>
          <ul className="page-breadcrumbs">
            <li><a href="/">Нүүр хуудас</a></li>
            <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
            <li>Боломжууд</li>
          </ul>
        </div>

        <div className="our-feature-app p0 mt-70">
            <div className="row single-feature-box">
              <div className="col-lg-6 order-lg-last">
                <div className="text-wrapper">
                  <img src="images/icon/icon30.svg" alt="" className="icon" />
                  <h2 className="title">Багийн нэгдсэн инбокс</h2>
                  <p>Сувгийн удирдлагад холбогдсон бүх интеграциудаас ирсэн мсж, коммент, имэйлүүд багийн инбокс цэсэнд огноогоороо эрэмбэлэгдэн харагдана. Админ фэйсбүүк, твиттер, имэйл, цахим хуудасны мессенжер зэрэг янз бүрийн сувгаар холбогдсон хэрэглэгчдэд нэг цонхноос хариулж, харилцан яриа бүрд тохирох нэршил /tag/ үүсгэснээр дараа нь энэ 7 хоногт ирсэн шинэ захиалга, санал гомдол зэргийг tag-аар нь шүүж харж болно</p>
                </div>
                </div>

              <div className="col-lg-6 order-lg-first">
                  <div className="feature-img-box left">
                    <img src="images/shape/shape-45.svg" alt="" className="shape-one" />
                    <img src="images/shape/shape-46.svg" alt="" className="shape-two" />
                    <img src="images/shape/shape-47.svg" alt="" className="shape-three" />
                    <img src="images/shape/shape-48.svg" alt="" className="shape-four" />
                    <img src="images/shape/shape-49.svg" alt="" className="shape-five" />
                    <div className="row">
                      <img className="support-feature js-tilt" src="images/features/in1.png" alt="" />
                    </div>
                  </div>
                </div>
            </div>

            <div className="row single-feature-box">
              <div className="col-lg-6">
                <div className="text-wrapper">
                  <img src="images/icon/icon33.svg" alt="" className="icon" />
                  <h2 className="title">Борлуулалт</h2>
                  <p>B2B зах зээл буюу байгууллагын борлуулалтын шатуудаа тодорхойлон, ямар шатанд хэдэн байгууллага борлуулалт болох магадлалтайг тооцоолж, тухайн борлуулалтыг хийхэд хэдэн удаагийн уулзалт хийсэн тэмдэглэлээ уг борлуулалтын картанд бичсэнээр олон байгууллагатай харьцдаг ажилтнуудад мэдээллийн алдагдал үүсэхгүй байх давуу талтай. Борлуулалт тус бүрт нэг карт үүсгэн, түүнийгээ борлуулалтын шат бүрд зөөгөөд явах боломжтой.</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feature-img-box">
                  <img src="images/shape/shape-45.svg" alt="" className="shape-one" />
                  <img src="images/shape/shape-46.svg" alt="" className="shape-two" />
                  <img src="images/shape/shape-47.svg" alt="" className="shape-three" />
                  <img src="images/shape/shape-48.svg" alt="" className="shape-four" />
                  <img src="images/shape/shape-49.svg" alt="" className="shape-five" />
                  <div className="access-screen-holder">
                    <div className="clearfix js-tilt">
                      <img src="images/features/sales1.png" alt="" className="screen" data-aos="fade-left" data-aos-duration="1200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row single-feature-box">
              <div className="col-lg-6 order-lg-last">
                <div className="text-wrapper">
                  <img src="images/icon/icon34.svg" alt="" className="icon" />
                  <h2 className="title">Хэрэглэгчийн нэгдсэн сан</h2>
                  <p>Хэрэглэгч танай байгууллагаас бүтээгдэхүүн худалдан авсан, фэйсбүүк, цахим хуудсаар харилцан яриа үүсгэсэн, аль нэг фэйсбүүк постны дор коммент бичсэн, урамшууллын имэйлд тань хариу илгээсэн зэрэг сувгийн удирдлагад холбогдсон интеграциудад ямар нэг хариу үйлдэл хийсэн болгон системд хадгалагдаж, харилцааны түүх нь бүртгэгдэнэ.</p>
                </div>
              </div>

              <div className="col-lg-6 order-lg-first">
                <div className="feature-img-box left">
                  <img src="images/shape/shape-45.svg" alt="" className="shape-one" />
                  <img src="images/shape/shape-46.svg" alt="" className="shape-two" />
                  <img src="images/shape/shape-47.svg" alt="" className="shape-three" />
                  <img src="images/shape/shape-48.svg" alt="" className="shape-four" />
                  <img src="images/shape/shape-49.svg" alt="" className="shape-five" />
                  <div className="screen-mockup js-tilt">
                    <img src="images/features/customer.png" alt="" className="mockup" data-aos="fade-right" data-aos-duration="1200" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row single-feature-box">
              <div className="col-lg-6">
                <div className="text-wrapper">
                  <img src="images/icon/icon33.svg" alt="" className="icon" />
                  <h2 className="title">Бизнес мессенжер</h2>
                  <p>Цахим хуудас бол танай байгууллагын албан ёсны нэрийн хуудас. Иймд бид энгийн нэг мессенжер биш, гар ажиллагаа багатай, хэрэглэгчийг өөрөө замчилсан шийдэлтэй боловсронгуй мессенжерийг санал болгож байна. Мессенжерт танай байгууллагын сошиал хаягуудын холбоос байхаас гадна хэн гэдэг ажилтантай холбогдож байгааг харуулах зургууд байрлана.</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feature-img-box">
                  <img src="images/shape/shape-45.svg" alt="" className="shape-one" />
                  <img src="images/shape/shape-46.svg" alt="" className="shape-two" />
                  <img src="images/shape/shape-47.svg" alt="" className="shape-three" />
                  <img src="images/shape/shape-48.svg" alt="" className="shape-four" />
                  <img src="images/shape/shape-49.svg" alt="" className="shape-five" />
                  <div className="access-screen-holder">
                    <div className="clearfix js-tilt">
                      <img src="images/features/messenger.png" alt="" className="screen" data-aos="fade-left" data-aos-duration="1200" />
                      <img src="images/features/messenger1.png" alt="" className="screen" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="250" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row single-feature-box">
              <div className="col-lg-6 order-lg-last">
                <div className="text-wrapper">
                  <img src="images/icon/icon34.svg" alt="" className="icon" />
                  <h2 className="title">Маркетингийн автоматжуулалт</h2>
                  <p>Баярын мэндчилгээ илгээх, ажиллах цагийн хуваарь салбарын мэдээллийг имэйлээр илгээх нь бүх хэрэглэгчдэд ашигтай. Гэхдээ та илүү нарийвчлалтай буюу маркетинг, борлуулалтын бодлогын хүрээнд үнэнч хэрэглэгчдээ илүү халамжлах зорилгоор зөвхөн тэдэнд хандах сонирхолтой бол өмнө дурдсан сегментүүдээ ашиглах хэрэгтэй</p>
                </div>
              </div>

              <div className="col-lg-6 order-lg-first">
                <div className="feature-img-box left">
                  <img src="images/shape/shape-45.svg" alt="" className="shape-one" />
                  <img src="images/shape/shape-46.svg" alt="" className="shape-two" />
                  <img src="images/shape/shape-47.svg" alt="" className="shape-three" />
                  <img src="images/shape/shape-48.svg" alt="" className="shape-four" />
                  <img src="images/shape/shape-49.svg" alt="" className="shape-five" />
                  <div className="screen-mockup js-tilt">
                    <img src="images/features/mail.png" alt="" className="mockup" data-aos="fade-right" data-aos-duration="1200" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row single-feature-box">
              <div className="col-lg-6">
                <div className="text-wrapper">
                  <img src="images/icon/icon33.svg" alt="" className="icon" />
                  <h2 className="title">Поп-ап форм</h2>
                  <p>Захиалгын хуудас, шаардлагын хуудас, холбоо барих цонх гэх мэт асуулт хариулт бүхий форм үүсгэх боломж бас бий. Банкны салбарт картын захиалгаа форм бөглүүлж авах, худалдааны салбарт бүтээгдэхүүнийхээ захиалгыг цахим хуудсаараа авдаг байгууллагууд ч олширсон үед танай байгууллага ч мөн адил онлайн борлуулалтаа уг цэсийг ашиглан дэмжээрэй.</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feature-img-box">
                  <img src="images/shape/shape-45.svg" alt="" className="shape-one" />
                  <img src="images/shape/shape-46.svg" alt="" className="shape-two" />
                  <img src="images/shape/shape-47.svg" alt="" className="shape-three" />
                  <img src="images/shape/shape-48.svg" alt="" className="shape-four" />
                  <img src="images/shape/shape-49.svg" alt="" className="shape-five" />
                  <div className="access-screen-holder">
                    <div className="clearfix js-tilt">
                      <img src="images/features/popup.png" alt="" className="screen" data-aos="fade-left" data-aos-duration="1200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row single-feature-box">
              <div className="col-lg-6 order-lg-last">
                <div className="text-wrapper">
                  <img src="images/icon/icon30.svg" alt="" className="icon" />
                  <h2 className="title">Мэдлэгийн сан</h2>
                  <p>Байгууллагууд цахим хуудсандаа хэрэглэгчид зориулсан түгээмэл асуулт, хариултын буланг үүсгэж, давтагддаг асуултууддаа хариулсан байдаг. Хэрэглэгчид ч өөрт байгаа асуултаа байгууллагатай шууд холбогдож асуухаасаа илүү энд байгаа мэдээллүүдтэй танилцдаг. Хэрэв танай байгууллага олон цахим хуудас ажлуулдаг бол танд олон асуулт хариулт хариуцах ажил үүснэ гэсэн үг</p>
                </div>
              </div>

              <div className="col-lg-6 order-lg-first">
                <div className="feature-img-box left">
                  <img src="images/shape/shape-45.svg" alt="" className="shape-one" />
                  <img src="images/shape/shape-46.svg" alt="" className="shape-two" />
                  <img src="images/shape/shape-47.svg" alt="" className="shape-three" />
                  <img src="images/shape/shape-48.svg" alt="" className="shape-four" />
                  <img src="images/shape/shape-49.svg" alt="" className="shape-five" />
                  <div className="screen-mockup js-tilt">
                    <img src="images/features/kb.png" alt="" className="mockup" data-aos="fade-up" data-aos-duration="1200" />
                    <img src="images/features/kb2.png" alt="" className="screen-one" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="150" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row single-feature-box">
              <div className="col-lg-6">
                <div className="text-wrapper">
                  <img src="images/icon/icon33.svg" alt="" className="icon" />
                  <h2 className="title">Сувгийн удирдлага</h2>
                  <p>Та байгууллагынхаа ашигладаг бүхий л интеграци буюу сошиал хаягуудаа ЭРХЭС-т холбоно. Тухайн интеграцуудыг брэндэд хамруулна. Танай байгууллагын аль нэг бүтээгдэхүүн үйлчилгээ тань нэг брэнд гэж бодъё. Харин тус брэндэд цахим хуудас, фэйсбүүк, твиттер зэрэг 3 интеграци байдаг бол түүнийг нэгтгэж брэнд дотор нь хамааруулна гэсэн үг.</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feature-img-box">
                  <img src="images/shape/shape-45.svg" alt="" className="shape-one" />
                  <img src="images/shape/shape-46.svg" alt="" className="shape-two" />
                  <img src="images/shape/shape-47.svg" alt="" className="shape-three" />
                  <img src="images/shape/shape-48.svg" alt="" className="shape-four" />
                  <img src="images/shape/shape-49.svg" alt="" className="shape-five" />
                  <div className="access-screen-holder">
                    <div className="clearfix js-tilt">
                      <img src="images/features/appstore.png" alt="" className="screen" data-aos="fade-up" data-aos-duration="1200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="theme-action-banner-two mt-200">
          <div className="container">
            <h2 className="title">Impact of Extrinsic Motivation on Intrinsic Motivation</h2>
            <a href="#" className="banner-button">PURCHASE NOW</a>
          </div>
        </div>


        <div className="our-service-sass theme-more-feature hide-pr">
          <div className="container">
            <div className="theme-title-one text-center">
              <h2 className="main-title">More Features</h2>
            </div>

            <div className="inner-wrapper">
              <div className="row">
                <div className="col-lg-4 single-block" data-aos="fade-up">
                  <div className="service-block">
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <div className="hover-content"></div>
                    <i className="flaticon-web icon-s"></i>
                    <h5 className="title"><a href="#">User Friendly dashboard & Cool Interface.</a></h5>
                    <p>Lorem ipsum dolor si amet, an dusino situ  sint pertinacia constituto, mir es dignsius quo great.</p>
                    <a href="#" className="detail-button"><i className="flaticon-next-1"></i></a>
                  </div>
                </div>
                <div className="col-lg-4 single-block" data-aos="fade-up" data-aos-delay="300">
                  <div className="service-block">
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <div className="hover-content"></div>
                    <i className="flaticon-value icon-s"></i>
                    <h5 className="title"><a href="#">Thousand of features and Custom option.</a></h5>
                    <p>Lorem ipsum dolor si amet, an dusino situ  sint pertinacia constituto, mir es dignsius quo great.</p>
                    <a href="#" className="detail-button"><i className="flaticon-next-1"></i></a>
                  </div>
                </div>
                <div className="col-lg-4 single-block" data-aos="fade-up" data-aos-delay="500">
                  <div className="service-block">
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <span className="snow-dot"></span>
                    <div className="hover-content"></div>
                    <i className="flaticon-login icon-s"></i>
                    <h5 className="title"><a href="#">Strong Managment & Security.</a></h5>
                    <p>Lorem ipsum dolor si amet, an dusino situ  sint pertinacia constituto, mir es dignsius quo great.</p>
                    <a href="#" className="detail-button"><i className="flaticon-next-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="agn-contact-banner">
          <div className="container">
            <h2 className="title">Do you have any projects? <br />Contact us.</h2>
            <a href="contact-us-agency.html" className="contact-button line-button-one">Contact Us</a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Features;
