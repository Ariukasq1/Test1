import React,{Component} from 'react';
import Layout from '../components/Layout';

class About extends Component {
  render() {
    return (
      <Layout>
        <div className="solid-inner-banner">
          <h2 className="page-title">Бидний тухай</h2>
        </div>

        <div class="about-us-standard pt-150 pb-100">
  				<div class="container">
  					<div class="theme-title-three text-center mb-120">
  						<h2 class="title">Хэрэглэгчидтэй харилцах, борлуулалтыг дэмжих, маркетингийн автоматжуулалтын платформ</h2>
  					</div>

						<div class="row">
							<div class="col-lg-6" data-aos="fade-up">
								<div class="single-block">
									<h5 class="block-title pb-30">Бидний түүх</h5>
									<p>Хүмүүсийн харилцаа холбооны энгийн шаардлагаас эхлээд бүхий л технологи маш хурдацтай хөгжиж байна. Хэрэглэгчид алхам тутамдаа Фэйсбүүк, Твиттер, Вийчат, Инстаграм зэрэг аппликейшн ашиглан харилцаа холбоогоо шийддэг болжээ. Энэ хөгжлийг дагаад бизнесүүд ч мөн хөгжих хэрэгтэй болсон цагт бид эрксис системийг нэвтрүүлснээр бизнесийн хөгжилд том түлхэц болж байна. <br/><br/>
                эрксис нь хэрэглэгчидтэй харилцах хязгааргүй олон сувгийг нэг дор нэгтгэж, хэрэглэгчидтэй харилцах алба хэлтсүүдийн үйл ажиллагааг дэмжиж, хоорондын уялдаа холбоог сайжруулах, үнэнч хэрэглэгчдээ бөөцийлөх, шинэ хэрэглэгчдэд борлуулалтын сэжим үүсгэх, харилцагчийн үйлчилгээг сайжруулах нээлттэй эхийн систем юм.</p></div>
							</div>
							<div class="col-lg-6" data-aos="fade-up">
								<div class="single-block">
									<h5 class="block-title pb-30">Бид хэн бэ</h5>
									<p>Монгол улсын технологийн шинэчлэлийг тэргүүлэгч эрксис багийнхан 8 жилийн турш хамт ажилласан туршлагатай бөгөөд эх орныхоо эдийн засгийн хөгжлийг тогтворжуулах, улмаар дэлхийн тавцанд аваачихыг зорьсон хариуцлагатай албыг бахархалтайгаар гүйцэтгэж байна.  <br /> <br />
                Байгалийн баялгаар дэлхийд танигдсан Монгол улсад уул уурхайн дэвшилтэт технологи өндөр хөгжсөн боловч энэ хөгжил нийт ард түмэнд үр өгөөж багатай. эрксисийн хамт олон бид дэлхийд Монгол улс ашигт малтмалаас илүүг хийж чадна гэдгээ баталж, байгалийн баялгаас илүү тархины баялаг, тэр дундаа мэдээллийн технологийн хөгжлөөр дэлхийн хэмжээнд тэргүүлж чадна гэдэгт бүрэн дүүрэн итгэж ажилладаг.</p>
								</div>
							</div>
						</div>
  				</div>
  			</div>

        <div className="agn-counter-section fix-bg-position m0 pt-50">
          <div className="container">
            <div className="main-wrapper">
              <div className="counter-wrapper">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="single-counter-box">
                      <h2 className="number"><span className="timer" data-from="0" data-to="10" data-speed="1200" data-refresh-interval="5">0</span>+</h2>
                      <p>Жил туршлага</p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="single-counter-box">
                      <h2 className="number"><span className="timer" data-from="0" data-to="1000" data-speed="1200" data-refresh-interval="5">0</span>+</h2>
                      <p>Цахим хуудас</p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="single-counter-box">
                      <h2 className="number"><span className="timer" data-from="0" data-to="100" data-speed="1200" data-refresh-interval="5">0</span>+</h2>
                      <p>Гар утасны апп</p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="single-counter-box">
                      <h2 className="number"><span className="timer" data-from="0" data-to="50" data-speed="1200" data-refresh-interval="5">0</span>+</h2>
                      <p>Цахим систем</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="video-action-banner-one mt-95">
          <div className="overlay">
            <a data-fancybox href="https://www.youtube.com/embed/aXFSJTjVjw0" className="video-button fancybox"><img src="images/icon/icon47.svg" alt="" /></a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About;
