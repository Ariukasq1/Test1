import React, {Component} from 'react';
import Layout from '../components/Layout';

class HumanResource extends Component {
  render() {
    return (
      <Layout>
        <div className="solid-inner-banner">
          <h2 className="page-title">Хүний нөөцийн бодлого</h2>
        </div>

        <div className="our-service service-minimal our-feature-app">
  				<div className="container">
  					<div className="demo-container-1100">
  						<div className="row">
  							<div className="col-lg-6 single-feature-box">
  								<div className="service-block feature-img-box" data-aos="fade-up">
                    <img src="images/shape/shape-45.svg" alt="" className="shape-one"/>
    								<img src="images/shape/shape-46.svg" alt="" className="shape-two"/>
    								<img src="images/shape/shape-47.svg" alt="" className="shape-three"/>
    								<img src="images/shape/shape-48.svg" alt="" className="shape-four"/>
    								<img src="images/shape/shape-49.svg" alt="" className="shape-five"/>
  									<div className="icon-box"><i className="fa fa-check success" aria-hidden="true"></i></div>
  									<h3 className="service-title">Хэрвээ та дараах шаардлагыг хангаж байвал <span>Эрксис баг </span>
                    таныг хүлээж байна</h3>
  									<ul>
                      <li>Хүчтэй
                        <q className="yellow">Үр дүн</q> + Хамгаас илүү
                        <q className="red">Суралцах, сургах сэтгэлгээ</q> + Өөртөө болон бусдад хамгийн
                        <q className="blue">Үнэнч шударгаар хандах</q> = Та Эрксис багт яг тохирох хүн.
                      </li>
                      <li>Сул
                        <q className="yellow">Үр дүн</q> + Хамгаас илүү
                        <q className="red">Суралцах, сургах сэтгэлгээ</q> + Өөртөө болон бусдад хамгийн
                        <q className="blue">Үнэнч шударгаар хандах</q> = Эрксис баг таныг хөгжүүлэн, гэр бүлдээ авах болно.
                      </li>
                      <li>Өндөр
                        <q className="yellow">Үр дүн</q> + Сул
                        <q className="red">Суралцах, сургах сэтгэлгээ</q> + Өөртөө болон бусдад хамгийн
                        <q className="blue">Үнэнч шударгаар хандах</q> = Эрксис баг таныг хөгжүүлэн, гэр бүлдээ авах болно.
                      </li>
                    </ul>
  								</div>
  							</div>
  							<div className="col-lg-6 single-feature-box">
  								<div className="service-block" data-aos="fade-up" data-aos-delay="100">
  									<div className="icon-box"><i className="fa fa-times cancel" aria-hidden="true"></i></div>
                    <h3 className="service-title">Харин та дараах сэтгэлгээтэй бол бидэнд <span>CV илгээх шаардлагагүй</span></h3>
  									<ul>
                      <li>Хүчтэй
                        <q className="yellow">Үр дүн</q> + Хамгаас илүү
                        <q className="red">Суралцах, сургах сэтгэлгээ</q> + Сул
                        <q className="blue">Үнэнч шударга байдал</q> = Та Эрксис багт CV илгээх шаардлагагүй.
                      </li>
                      <li>Сул
                        <q className="yellow">Үр дүн</q> + Сул
                        <q className="red">Суралцах, сургах сэтгэлгээ</q> + Өндөр
                        <q className="blue">Үнэнч шударга байдал</q> = Та Эрксис багт CV илгээх шаардлагагүй.
                      </li>
                      <li>Сул
                        <q className="yellow">Үр дүн</q> + Сул
                        <q className="red">Суралцах, сургах сэтгэлгээ</q> + Сул
                        <q className="blue">Үнэнч шударга байдал</q> = Та Эрксис багт CV илгээх шаардлагагүй.
                      </li>
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

export default HumanResource;
