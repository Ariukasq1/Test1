import React, {Component} from 'react';
import Layout from '../components/Layout';

class HumanResource extends Component {
  render() {
    return (
      <Layout>
        <div className="solid-inner-banner">
          <h2 className="page-title">Нээлттэй ажлын байр</h2>
        </div>

        <div className="faq-page faq-tab-wrapper pt-150 pb-200">
  				<div className="container">
  					<div className="row">
  						<div className="col-lg-12">
  				      <div className="faq-panel">
  								<div className="panel-group theme-accordion" id="accordion">
  								  <div className="panel">
  								    <div className="panel-heading active-panel">
  								      <h6 className="panel-title">
  								        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
  								        Хөгжүүлэгч <span><i className="fa fa-calendar" aria-hidden="true"></i> 2020-03-20</span></a>
  								      </h6>
  								    </div>
  								    <div id="collapse1" className="panel-collapse collapse show">
  								      <div className="panel-body">
                          <div className="panel-row pt-30">
                            <h4>Гүйцэтгэх үндсэн үүрэг</h4>
                            <ul>
                              <li>Вэбсайт, вэб аппликейшн Backend болон Frontend хөгжүүлэлт хийх</li>
                              <li>Фотошоп дээр гаргасан дизайны дагуу вэб хөгжүүлэлт хийх</li>
                              <li>Шаардлагатай үед UI дизайн дээр ажиллана</li>
                              <li>Ажиллаж байгаа вэбсайт дээр засвар хийх, асуудлыг шийдвэрлэх</li>
                            </ul>
                          </div>
                          <hr />
                          <div className="panel-row pb-30">
                            <h4>Ажлын байранд тавигдах шаардлага:</h4>
                            <ul>
                              <li>Ажилдаа хариуцлагатай</li>
                              <li>Идэвх санаачлагатай, бүтээлч, харилцааны соёлтой</li>
                              <li>Хувийн зохион байгуулалт сайтай байх</li>
                              <li>Мэдээлэл технологи, програм хангамжийн мэргэжилтэй</li>
                              <li>Вэб технологийн HTML, CSS, Javascript, Wordpress CMS эзэмшсэн байх</li>
                              <li>Бэлэн болсон Photoshop дизайныг HTML, CSS, Javascript болгох чадвартай</li>
                              <li>Багаар болон бие дааж ажиллах чадвартай</li>
                            </ul>
                            <div className="pt-30"><button className="line-button-one">Анкет бөглөх</button></div>
                          </div>
                        </div>
  								    </div>
  								  </div>
  								  <div className="panel">
  								    <div className="panel-heading">
  								      <h6 className="panel-title">
  								        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
  								        Төслийн менежер <span><i className="fa fa-calendar" aria-hidden="true"></i> 2020-03-20</span></a>
  								      </h6>
  								    </div>
  								    <div id="collapse2" className="panel-collapse collapse">
                        <div className="panel-body">
                          <div className="panel-row">
                            <h4>Гүйцэтгэх үндсэн үүрэг</h4>
                            <ul>
                              <li>Гадаад болон дотоод зах зээлийн судалгаа хийх</li>
                              <li>Шинэ бизнес төсөл боловсруулах</li>
                              <li>Төслийн үйл ажиллагааг удирдан, зохион байгуулах</li>
                              <li>Төслийн гүйцэтгэл, нөхцөл байдалд шинжилгээ хийх</li>
                              <li>Төслийн хөрөнгө оруулалтын шинжилгээ хийх</li>
                              <li>Төслийн санхүүгийн үйл ажиллагаанд хяналт тавих, санхүүгийн шнжилгээ, үнэлгээ хийх</li>
                            </ul>
                          </div>
                          <hr />
                          <div className="panel-row pb-30">
                            <h4>Ажлын байранд тавигдах шаардлага:</h4>
                            <ul>
                              <li>Англи хэлний бичгийн болон ярианы өндөр түвшний мэдлэгтэй</li>
                              <li>Баримт бичиг боловсруулах болон гэрээ контракт байгуулах чадвартай</li>
                              <li>Бизнесийн ёс зүйн хэм хэмжээг баримталдаг, хууль эрх зүйн зохих ёсны мэдлэгтэй</li>
                              <li>Гадаад зах зээлийн одоогийн болон хөгжлийн чиг хандлагын талаарх мэдлэгтэй</li>
                              <li>Дотоодын болон гадаадын эдийн засгийн өсөлт, үр нөлөөг судлан дүн шинжилгээ хийх чадвартай</li>
                            </ul>
                            <div className="pt-30"><button className="line-button-one">Анкет бөглөх</button></div>
                          </div>
                        </div>
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

export default HumanResource;
