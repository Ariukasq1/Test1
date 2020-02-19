import React, {Component} from 'react';
import Layout from '../components/Layout';

class Team extends Component {
  render() {
    return (
      <Layout>
        <div className="solid-inner-banner">
          <h2 className="page-title">Хөрөнгө оруулагчид</h2>
        </div>

        <div class="team-business our-team pt-150 agn-about-us">
          <img src="images/shape/shape-61.svg" alt="" class="shape-one"/>
  				<img src="images/shape/shape-33.svg" alt="" class="shape-two" data-aos="fade-left"/>
  				<img src="images/shape/shape-65.svg" alt="" class="shape-three" data-aos="fade-right"/>
  				<img src="images/shape/shape-60.svg" alt="" class="shape-four"/>
  				<div class="container">
  					<div class="row">
  						<div class="col-lg-6">
  							<div class="single-team-member">
  								<div class="wrapper d-sm-flex">
  									<div class="img-box">
  										<img src="images/investors/otgonbat.jpg" alt=""/>
  									</div>
  									<div class="info-meta">
  										<h6 class="name"><strong>Cэдбазарын Отгонбат</strong></h6>
  										<span>Аврагас Трейд ХХК-ийн Ерөнхий Захирал</span>
                      <q>Төлөөлөн Удирдах Зөвлөлийн Дарга</q>
  									</div>
  								</div>
  							</div>
  						</div>
  						<div class="col-lg-6">
  							<div class="single-team-member">
  								<div class="wrapper d-sm-flex">
  									<div class="img-box">
  										<img src="images/investors/batsaikhan.jpg" alt=""/>
  									</div>
  									<div class="info-meta">
  										<h6 class="name"><strong>Пүрэвийн Батсайхан</strong></h6>
                      <span>Шунхлай Группын Ерөнхийлөгч</span>
  										<q>Төлөөлөн Удирдах Зөвлөлийн Гишүүн</q>
  									</div>
  								</div>
  							</div>
  						</div>
  						<div class="col-lg-6">
  							<div class="single-team-member">
  								<div class="wrapper d-sm-flex">
  									<div class="img-box">
  										<img src="images/investors/damjin.jpg" alt=""/>
  									</div>
  									<div class="info-meta">
  										<h6 class="name"><strong>Одонгийн Дамжин</strong></h6>
                      <span>ТЭСО Корпорацийн Төлөөлөн Удирдах Зөвлөлийн Дарга</span>
  										<q>Төлөөлөн Удирдах Зөвлөлийн Гишүүн</q>
  									</div>
  								</div>
  							</div>
  						</div>
  						<div class="col-lg-6">
  							<div class="single-team-member">
  								<div class="wrapper d-sm-flex">
  									<div class="img-box">
  										<img src="images/investors/altanbagana.jpg" alt=""/>
  									</div>
  									<div class="info-meta">
  										<h6 class="name"><strong>Шийтуугийн Алтанбагана</strong></h6>
                      <span>Тера Экспресс ХХК-ийн Ерөнхий Захирал</span>
  										<q>Төлөөлөн Удирдах Зөвлөлийн Гишүүн</q>
  									</div>
  								</div>
  							</div>
  						</div>
  						<div class="col-lg-6">
  							<div class="single-team-member">
  								<div class="wrapper d-sm-flex">
  									<div class="img-box">
  										<img src="images/investors/mendorshikh.jpg" alt=""/>
  									</div>
  									<div class="info-meta">
  										<h6 class="name"><strong>Амартайваны Мэнд-Орших</strong></h6>
                      <span>Эрксис Монголиа ХХК-ийн Гүйцэтгэх Захирал</span>
  										<q>Төлөөлөн Удирдах Зөвлөлийн Гишүүн</q>
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

export default Team;
