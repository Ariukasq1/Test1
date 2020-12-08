import React, { Component } from "react";
import Layout from "../components/Layout";

class Team extends Component {
  renderMember(name, position, image, fb, twt, gb, lkdn) {
    return (
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-team-member">
          <div className="wrapper">
            <div>
              <img src={`images/team/${image}`} alt="" />
            </div>
            <div className="info-meta">
              <h6 className="name">
                <div
                  dangerouslySetInnerHTML={{
                    __html: name,
                  }}
                />
              </h6>
              <span>{position}</span>
            </div>
          </div>
          <div className="hover-content">
            <ul>
              {fb && (
                <li>
                  <a href={fb} target="_blank">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
              )}
              {twt && (
                <li>
                  <a href={twt} target="_blank">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
              )}
              {gb && (
                <li>
                  <a href={gb} target="_blank">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
              )}
              {lkdn && (
                <li>
                  <a href={lkdn} target="_blank">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Layout>
        <div className="solid-inner-banner">
          <h2 className="page-title">Баг хамт олон</h2>
        </div>
        <div className="team-standard agn-about-us our-team mt-70 pb-100">
          <img src="images/shape/shape-61.svg" alt="" className="shape-one" />
          <img
            src="images/shape/shape-64.svg"
            alt=""
            className="shape-two"
            data-aos="fade-left"
          />
          <img
            src="images/shape/shape-65.svg"
            alt=""
            className="shape-three"
            data-aos="fade-right"
          />
          <img src="images/shape/shape-60.svg" alt="" className="shape-four" />
          <div className="container">
            <div className="row">
              {this.renderMember(
                "Баттулгын <br /> Бат-Амар",
                "Технологи хариуцсан захирал",
                "bat-amar.jpg",
                "",
                "https://twitter.com/b_batamar",
                "https://github.com/batamar",
                "https://www.linkedin.com/in/mrbatamar/"
              )}
              {this.renderMember(
                "Батжаргалын <br /> Наран",
                "Үйл ажиллагаа хариуцсан захирал",
                "naran.png",
                "",
                "https://twitter.com/NaranBNayantai",
                "https://github.com/batamar",
                "https://www.linkedin.com/in/nauren/"
              )}
              {this.renderMember(
                "Амартайваны <br /> Мэнд-Орших",
                "Үйл ажиллагаа хариуцсан захирал",
                "mend-orshikh.jpg",
                "https://www.facebook.com/MendOrshikh/",
                "https://twitter.com/MendOrshikh",
                "https://github.com/mendorshikh",
                "https://www.linkedin.com/in/mendorshikh/"
              )}
              {this.renderMember(
                "Ганзоригийн <br /> Индра",
                "Бүтээгдэхүүн маркетингийн ахлах менежер",
                "indra.png",
                "",
                "https://twitter.com/IndraGanzorig",
                "https://github.com/indraganzorig",
                "https://www.linkedin.com/in/indraganzorig/"
              )}
              {this.renderMember(
                "Амаржаргалын <br /> Удвал",
                "Харилцагчийн ахлах менежер",
                "udval.jpg",
                "",
                "",
                "",
                "https://www.linkedin.com/in/udval-amarjargal-9bbaaba4/"
              )}
              {this.renderMember(
                "Баярсайханы <br /> Ганзориг",
                "UX хөгжүүлэгч",
                "ganzorig.jpg",
                "",
                "https://twitter.com/ganzorig_bs",
                "https://github.com/ganzorig",
                "https://www.linkedin.com/in/ganzorigbayarsaikhan/"
              )}
              {this.renderMember(
                "Энхбатын <br /> Мөнгөншагай",
                "Систем хөгжүүлэгч",
                "mungunshagai.jpg",
                "",
                "https://twitter.com/mungunshagai",
                "https://github.com/mungunshagai",
                "https://www.linkedin.com/in/mungunshagai/"
              )}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-team-member">
                  <div className="wrapper">
                    <div>
                      <img src="images/team/munkhjin.jpg" alt="" />
                    </div>
                    <div className="info-meta">
                      <h6 className="name">
                        Бадамхандын <br /> Мөнхжин
                      </h6>
                      <span>Систем хөгжүүлэгч</span>
                    </div>
                  </div>
                  <div className="hover-content">
                    <ul>
                      <li>
                        <a href="https://twitter.com/munkhjin" target="_blank">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/munkhjin0223"
                          target="_blank"
                        >
                          <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/bmunkhjin/"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-team-member">
                  <div className="wrapper">
                    <div>
                      <img src="images/team/munkhsaikhan.jpg" alt="" />
                    </div>
                    <div className="info-meta">
                      <h6 className="name">
                        Ганчимэгийн
                        <br /> Мөнхсайхан
                      </h6>
                      <span>Систем хөгжүүлэгч</span>
                    </div>
                  </div>
                  <div className="hover-content">
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/munkhsaikhan"
                          target="_blank"
                        >
                          <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-team-member">
                  <div className="wrapper">
                    <div>
                      <img src="images/team/munhorgil.jpg" alt="" />
                    </div>
                    <div className="info-meta">
                      <h6 className="name">
                        Мягмарсүрэнгийн
                        <br /> Мөнх-Оргил
                      </h6>
                      <span>Систем хөгжүүлэгч</span>
                    </div>
                  </div>
                  <div className="hover-content">
                    <ul>
                      <li>
                        <a href="https://github.com/munkhorgil" target="_blank">
                          <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/munkhorgil/"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-team-member">
                  <div className="wrapper">
                    <div>
                      <img src="images/team/enkhtuwshin.jpg" alt="" />
                    </div>
                    <div className="info-meta">
                      <h6 className="name">
                        Нармандахын
                        <br /> Энхтүвшин
                      </h6>
                      <span>Систем хөгжүүлэгч</span>
                    </div>
                  </div>
                  <div className="hover-content">
                    <ul>
                      <li>
                        <a
                          href="https://twitter.com/Enkhtuv40099032"
                          target="_blank"
                        >
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/Enkhtuvshin0513"
                          target="_blank"
                        >
                          <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/narmandakh-enkhtuvshin-340443175/"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-team-member">
                  <div className="wrapper">
                    <div>
                      <img src="images/team/anu.jpg" alt="" />
                    </div>
                    <div className="info-meta">
                      <h6 className="name">
                        Бат-Өлзийн
                        <br /> Ану-Үжин
                      </h6>
                      <span>Веб инженер</span>
                    </div>
                  </div>
                  <div className="hover-content">
                    <ul>
                      <li>
                        <a href="https://twitter.com/anuvjin1" target="_blank">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/Anu-Ujin" target="_blank">
                          <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/anu-ujin/"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-team-member">
                  <div className="wrapper">
                    <div>
                      <img src="images/team/soyombo.jpg" alt="" />
                    </div>
                    <div className="info-meta">
                      <h6 className="name">
                        Бат-Эрдэнийн
                        <br /> Соёмбо
                      </h6>
                      <span>Мобайл хөгжүүлэгч</span>
                    </div>
                  </div>
                  <div className="hover-content">
                    <ul>
                      <li>
                        <a
                          href="https://twitter.com/soko_e11iot"
                          target="_blank"
                        >
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/soyombo-cook"
                          target="_blank"
                        >
                          <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/soyombo-bat-erdene-772a9a62/"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-team-member">
                  <div className="wrapper">
                    <div>
                      <img src="images/team/batorshih.png" alt="" />
                    </div>
                    <div className="info-meta">
                      <h6 className="name">
                        Нямбаярын
                        <br /> Бат-Орших
                      </h6>
                      <span>Мобайл хөгжүүлэгч</span>
                    </div>
                  </div>
                  <div className="hover-content">
                    <ul>
                      <li>
                        <a href="https://twitter.com/orshih1" target="_blank">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/batorshih" target="_blank">
                          <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-team-member">
                  <div className="wrapper">
                    <div>
                      <img src="images/team/itgel.jpg" alt="" />
                    </div>
                    <div className="info-meta">
                      <h6 className="name">
                        Галтын
                        <br /> Итгэл
                      </h6>
                      <span>Мобайл хөгжүүлэгч</span>
                    </div>
                  </div>
                  <div className="hover-content">
                    <ul>
                      <li>
                        <a href="https://twitter.com/iwalker77" target="_blank">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/iwalker7" target="_blank">
                          <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/itgel-galt-9801aa183/"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-team-member">
                  <div className="wrapper">
                    <div>
                      <img src="images/team/batnasan.jpg" alt="" />
                    </div>
                    <div className="info-meta">
                      <h6 className="name">
                        Бямбасүрэнгийн
                        <br /> Батнасан
                      </h6>
                      <span>Систем админ</span>
                    </div>
                  </div>
                  <div className="hover-content">
                    <ul>
                      <li>
                        <a
                          href="https://twitter.com/batnasan06"
                          target="_blank"
                        >
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/batnasan" target="_blank">
                          <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/batnasan/"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-team-member">
                  <div className="wrapper">
                    <div>
                      <img src="images/team/shinebayar.jpg" alt="" />
                    </div>
                    <div className="info-meta">
                      <h6 className="name">
                        Гансүхын
                        <br /> Шинэбаяр
                      </h6>
                      <span>Систем админ</span>
                    </div>
                  </div>
                  <div className="hover-content">
                    <ul>
                      <li>
                        <a
                          href="https://medium.com/@shinebayar.g"
                          target="_blank"
                        >
                          <i className="fa fa-medium" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/shinebayar-g"
                          target="_blank"
                        >
                          <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/shinebayar-gansukh-47a064163/"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Team;
