import React, {Component} from 'react';
import Layout from '../components/Layout';

class Team extends Component {
  render() {
    return (
      <Layout>
        <div className="solid-inner-banner">
          <h2 className="page-title">Хөрөнгө оруулагчид</h2>
        </div>


        <div className="team-business our-team pt-150 agn-about-us">
          <img src="images/shape/shape-61.svg" alt="" className="shape-one"/>
          <img src="images/shape/shape-33.svg" alt="" className="shape-two" data-aos="fade-left"/>
          <img src="images/shape/shape-65.svg" alt="" className="shape-three" data-aos="fade-right"/>
          <img src="images/shape/shape-60.svg" alt="" className="shape-four"/>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="single-team-member">
                  <div className="wrapper d-sm-flex">
                    <div className="img-box">
                      <img src="images/investors/otgonbat.jpg" alt=""/>
                    </div>
                    <div className="info-meta">
                      <h6 className="name"><strong>Cэдбазарын Отгонбат</strong></h6>
                      <span>Аврагас Трейд ХХК-ийн Ерөнхий Захирал</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-team-member">
                  <div className="wrapper d-sm-flex">
                    <div className="img-box">
                      <img src="images/investors/batsaikhan.jpg" alt=""/>
                    </div>
                    <div className="info-meta">
                      <h6 className="name"><strong>Пүрэвийн Батсайхан</strong></h6>
                      <span>Шунхлай Группын Ерөнхийлөгч</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-team-member">
                  <div className="wrapper d-sm-flex">
                    <div className="img-box">
                      <img src="images/investors/damjin.jpg" alt=""/>
                    </div>
                    <div className="info-meta">
                      <h6 className="name"><strong>Одонгийн Дамжин</strong></h6>
                      <span>ТЭСО Корпорацийн Төлөөлөн Удирдах Зөвлөлийн Дарга</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-team-member">
                  <div className="wrapper d-sm-flex">
                    <div className="img-box">
                      <img src="images/investors/altanbagana.jpg" alt=""/>
                    </div>
                    <div className="info-meta">
                      <h6 className="name"><strong>Шийтуугийн Алтанбагана</strong></h6>
                      <span>Тера Экспресс ХХК-ийн Ерөнхий Захирал</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-team-member">
                  <div className="wrapper d-sm-flex">
                    <div className="img-box">
                      <img src="images/investors/mendorshikh.jpg" alt=""/>
                    </div>
                    <div className="info-meta">
                      <h6 className="name"><strong>Амартайваны Мэнд-Орших</strong></h6>
                      <span>Эрксис Монголиа ХХК-ийн Гүйцэтгэх Захирал</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-team-member">
                  <div className="wrapper d-sm-flex">
                    <div className="img-box">
                      <img src="images/investors/batka.jpg" alt=""/>
                    </div>
                    <div className="info-meta">
                      <h6 className="name"><strong>Ганхуягийн Бат-Эрдэнэ</strong></h6>
                      <span>Монгол HD Телевизийн Дэд Ерөнхийлөгч</span>
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
