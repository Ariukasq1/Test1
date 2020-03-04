import React, {Component} from 'react';
import Layout from '../components/Layout';

class Swag extends Component {
  componentDidMount() {
    window.erxesSettings = {
      forms: [{
        brand_id: "m7DmKt",
        form_id: "moR3aE",
      }],
    };

    (() => {
      const script = document.createElement('script');
      script.src =
        'https://w.office.erxes.io/build/formWidget.bundle.js';
      script.async = true;

      const entry = document.getElementsByTagName('script')[0];
      entry.parentNode.insertBefore(script, entry);
    })();
  }

  render() {
    return (
      <Layout>
        <div class="our-service pt-200 pb-100">
          <div class="agn-about-us pt-250 pb-100">
            <img src="images/shape/shape-61.svg" alt="" class="shape-one" />
            <img src="images/shape/shape-64.svg" alt="" class="shape-two" data-aos="fade-left" />
            <img src="images/shape/shape-65.svg" alt="" class="shape-three" data-aos="fade-right" />
            <img src="images/shape/shape-60.svg" alt="" class="shape-four" />
            <div class="container">
              <div class="row">
                <div class="col-lg-6 pl-100 order-lg-last">
                  <div class="text-wrapper">
                    <div class="theme-title-one">
                      <h2 class="main-title">Үнэгүй футболка аваарай!</h2>
                    </div>
                    <p>Шуудангаар эрхэс болон MIPTU-н логотой үнэгүй футболка авмаар байвал Github дээр хэдхэн үйлдлийг хийгээрэй.</p> <br/>
                    <p>Бид Эрхэсийг дэмжигчиддээ зориулан нэгэн илгээмжийг бэлдсэн байгаа. Эрхэст хувь нэмрээ оруулсан бүх хүнд талархлаа илэрхийлж футболка болон стикертэй шууданг хүн бүрт илгээх болно.</p>
                  </div>
                </div>
                <div class="col-lg-6 order-lg-first">
                  <div class="img-box">
                    <img src="images/swag.jpg" alt="" class="main-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>

  				<div class="container pt-150">
  					<div class="demo-container-1100">
  						<div class="row service-minimal">
  							<div class="col-lg-6">
  								<div class="service-block mb-80" data-aos="fade-up">
                  <div class="icon-box mb-20"><img className="icon" src="images/icon/icon33.svg" alt=""/></div>
  									<h2 class="service-title"><a href="#">Бэлгээ яаж авах вэ?</a></h2>
  									<ul>
                      <li><a href="https://github.com/erxes/erxes" target="_blank">Эрхэсийн Repository</a>-г Follow, Star, Fork хийх.</li>
                      <li><a href="https://github.com/erxes/erxes/issues/new/choose" target="_blank">Github</a> дээр гурван “Issue” дэвшүүлэх.</li>
                      <li><a href="https://github.com/erxes/erxes" target="_blank">Github</a> дээр 1 Pull Request явуулах</li>
                      <li>Swag авах хүсэлтээ доор буй анкетаар илгээх</li>
                      <li>Хэрэв бүх алхмыг амжилттай гүйцэтгэвэл таны хаягаар бэлэг очих болно!</li>
                    </ul>
                    <div>Бэлгээ аваад футболкаа өмсөж, стикерээ ашигласан зургаа бидэнтэй <q>@erxesHQ</q> tag ашиглан цахим хуудсандаа хуваалцаарай!</div>
  								</div>
  							</div>
  							<div class="col-lg-6">
  								<div class="service-block mb-80" data-aos="fade-up" data-aos-delay="100">
  									<div class="icon-box mb-20"><img className="icon" src="images/icon/icon30.svg" alt=""/></div>
  									<h2 class="service-title"><a href="#">Нөхцөл:</a></h2>
                    <ul class="theme-list-item">
                      <li><i class="color-style fa fa-check" aria-hidden="true"></i>Эхний 4 алхмыг бүрэн гүйцэтгэсэн эсэхээ шалгаарай! Бид хүсэлт тус бүртэй нэг бүрчлэн танилцах ба бүх шаардлагыг хангасан тохиолдолд та бэлгээ авах боломжтой.</li>
                      <li><i class="color-style fa fa-check" aria-hidden="true"></i>Илгээмжийг дэлхийн аль ч оронд үнэгүй явуулна</li>
                      <li><i class="color-style fa fa-check" aria-hidden="true"></i>Энэхүү хөтөлбөр нь одоогоор туршилтын шатандаа байгаа бөгөөд ирээдүйд илгээмж явуулах хүрээ, футболкны хэмжээ өөрчлөгдөх боломжтой.</li>
                    </ul>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>

          <div class="agn-counter-section">
    				<img src="images/shape/shape-55.svg" alt="" class="shape-one"/>
    				<img src="images/shape/shape-59.svg" alt="" class="shape-two"/>
    				<img src="images/shape/shape-61.svg" alt="" class="shape-three"/>
    				<div class="container">
  						<div class="flex">
  						   <div data-erxes-embed="moR3aE" style={{width:'900px'}}></div>
  						</div>
    				</div>
    			</div>
  			</div>
      </Layout>
    )
  }
}

export default Swag;
