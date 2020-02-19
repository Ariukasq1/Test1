import React,{Component} from 'react';
import Layout from '../components/Layout';

class Pricing extends Component {
  render() {
    return (
      <Layout>
        <div className="solid-inner-banner mb-150">
          <h2 className="page-title">Үнийн санал</h2>
        </div>

        <div className="element-section mb-150">
          <div className="agn-our-pricing sass-our-pricing p0">
            <div class="section-shape-one"><img src="images/shape/shape-18.svg" alt="" /></div>
            <img src="images/shape/shape-55.svg" alt="" class="shape-one" />
            <img src="images/shape/shape-62.svg" alt="" class="shape-two" />
            <img src="images/shape/shape-24.svg" alt="" class="section-shape-two" data-aos="fade-right" data-aos-duration="3000" />
            <img src="images/shape/shape-25.svg" alt="" class="section-shape-three" />
            <div class="section-shape-four"></div>
            <img src="images/shape/shape-1.svg" alt="" class="shape-three" />
            <img src="images/shape/shape-60.svg" alt="" class="shape-four" />
            <img src="images/shape/shape-57.svg" alt="" class="shape-five" />
            <img src="images/shape/shape-26.svg" alt="" class="section-shape-five" />
            <img src="images/shape/shape-27.svg" alt="" class="section-shape-six" data-aos="fade-left" data-aos-duration="3000" />

            <div className="container">
              <div className="theme-title-one text-center">
                <div class="icon-box hide-pr">
                  <img src="images/shape/bg-shape4.svg" alt="" class="bg-shape" />
                  <img src="images/icon/icon26.svg" alt="" class="icon" />
                </div>
              </div>
            </div>

            <div className="pricing-tab-menu mt-30">
              <div className="nav-wrapper">
                <ul className="nav nav-tabs justify-content-center">
                  <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#month">Сар бүр</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#annual">Жил бүр</a></li>
                </ul>
              </div>
              <p>Жил бүрийг сонгоод 45%-ийг хэмнээрэй!</p>
            </div>

            <div className="tab-content">
              <div id="month" className="tab-pane fade show active">
                <div className="table-wrapper">
                  <div className="inner-table clearfix">
                    <ul className="pr-list-text">
                      <li>Багын гишүүд</li>
                      <li>Үнэгүй интеграциуд</li>
                      <li>Үнэтэй интеграциуд</li>
                      <li className="odd">Хэрэглэгчийн мэдээллийн хэмжээ</li>
                      <li>Боломжууд</li>
                      <li className="odd">Аюулгүй байдал ба удирдлага</li>
                    </ul>
                    <div className="pr-column single-pr-table free">
                      <div className="pr-header">
                        <div className="price">$0.00</div>
                        <h4 className="title">Үнэгүй</h4>
                        <div class="package">3 гишүүд</div>
                      </div>
                      <ul className="pr-body">
                        <li>3</li>
                        <li>5</li>
                        <li>төлсөн хэмжээгээрээ</li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon flaticon-cancel none"></i>
                        </li>
                      </ul>
                      <div className="pr-footer">
                        <a href="https://erxes.io/create" target="_blank" className="choose-button line-button-two">Үнэгүй турших</a>
                      </div>
                    </div>
                    <div className="pr-column single-pr-table regular">
                      <div className="pr-header ">
                        <div className="price">$55<span>/сар бүр</span></div>
                        <h4 className="title">Баг</h4>
                        <div class="package">5 гишүүд</div>
                      </div>
                      <ul className="pr-body">
                        <li>5-15</li>
                        <li>10</li>
                        <li>төлсөн хэмжээгээрээ</li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon flaticon-cancel none"></i>
                        </li>
                      </ul>
                      <div className="pr-footer">
                        <a href="https://erxes.io/create" target="_blank" className="choose-button line-button-two">Үнэгүй турших</a>
                      </div>
                    </div>
                    <div className="pr-column single-pr-table plus">
                      <div className="pr-header">
                        <div className="price">$220<span>/сар бүр</span></div>
                        <h4 className="title">Байгууллага</h4>
                        <div class="package">Хязгааргүй гишүүд</div>
                      </div>
                      <ul className="pr-body">
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>төлсөн хэмжээгээрээ</li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon flaticon-cancel none"></i>
                        </li>
                      </ul>
                      <div className="pr-footer">
                        <a href="https://erxes.io/create" target="_blank" className="choose-button line-button-two">Үнэгүй турших</a>
                      </div>
                    </div>
                    <div className="pr-column single-pr-table plus">
                      <div className="pr-header">
                        <div className="price">
                          <i className="icon fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <h4 className="title">АЖ АХУЙН НЭГЖ</h4>
                        <div class="package">Хязгааргүй гишүүд</div>
                      </div>
                      <ul className="pr-body">
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>төлсөн хэмжээгээрээ</li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon flaticon-tick available"></i>
                        </li>
                      </ul>
                      <div className="pr-footer">
                        <a href="#" className="choose-button line-button-two">Бидэнтэй холбогдох</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="annual" className="tab-pane fade">
                <div className="table-wrapper">
                  <div className="inner-table clearfix">
                    <ul className="pr-list-text">
                      <li>Багын гишүүд</li>
                      <li>Үнэгүй интеграциуд</li>
                      <li>Үнэтэй интеграциуд</li>
                      <li className="odd">Хэрэглэгчийн мэдээллийн хэмжээ</li>
                      <li>Боломжууд</li>
                      <li className="odd">Аюулгүй байдал ба удирдлага</li>
                    </ul>
                    <div className="pr-column single-pr-table free">
                      <div className="pr-header">
                        <div className="price">$0.00</div>
                        <h4 className="title">Үнэгүй</h4>
                        <div class="package">3 гишүүд</div>
                      </div>
                      <ul className="pr-body">
                        <li>3</li>
                        <li>5</li>
                        <li>төлсөн хэмжээгээрээ</li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon flaticon-cancel none"></i>
                        </li>
                      </ul>
                      <div className="pr-footer">
                        <a href="#" className="choose-button line-button-two">Үнэгүй турших</a>
                      </div>
                    </div>
                    <div className="pr-column single-pr-table regular">
                      <div className="pr-header ">
                        <div className="price">$30<span>/сар бүр</span></div>
                        <h4 className="title">Баг</h4>
                        <div class="package">5 гишүүд</div>
                      </div>
                      <ul className="pr-body">
                        <li>5-15</li>
                        <li>10</li>
                        <li>төлсөн хэмжээгээрээ</li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon flaticon-cancel none"></i>
                        </li>
                      </ul>
                      <div className="pr-footer">
                        <a href="#" className="choose-button line-button-two">Үнэгүй турших</a>
                      </div>
                    </div>
                    <div className="pr-column single-pr-table plus">
                      <div className="pr-header">
                        <div className="price">$99<span>/сар бүр</span></div>
                        <h4 className="title">Байгууллага</h4>
                        <div class="package">Хязгааргүй гишүүд</div>
                      </div>
                      <ul className="pr-body">
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>төлсөн хэмжээгээрээ</li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon flaticon-cancel none"></i>
                        </li>
                      </ul>
                      <div className="pr-footer">
                        <a href="#" className="choose-button line-button-two">Үнэгүй турших</a>
                      </div>
                    </div>
                    <div className="pr-column single-pr-table plus">
                      <div className="pr-header">
                        <div className="price">
                          <i className="icon fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <h4 className="title">АЖ АХУЙН НЭГЖ</h4>
                        <div class="package">Хязгааргүй гишүүд</div>
                      </div>
                      <ul className="pr-body">
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>төлсөн хэмжээгээрээ</li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon fa fa-chain available" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="icon flaticon-tick available"></i>
                        </li>
                      </ul>
                      <div className="pr-footer">
                        <a href="#" className="choose-button line-button-two">Бидэнтэй холбогдох</a>
                      </div>
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

export default Pricing;
