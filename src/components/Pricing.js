const Pricing = () => (
  <div className="sass-our-pricing">
    <div className="section-shape-one">
      <img src="images/shape/shape-18.svg" alt="" />
    </div>
    <img
      src="images/shape/shape-24.svg"
      alt=""
      className="section-shape-two"
      data-aos="fade-right"
      data-aos-duration={3000}
    />
    <img
      src="images/shape/shape-25.svg"
      alt=""
      className="section-shape-three"
    />
    <div className="section-shape-four" />
    <img
      src="images/shape/shape-26.svg"
      alt=""
      className="section-shape-five"
    />
    <img
      src="images/shape/shape-27.svg"
      alt=""
      className="section-shape-six"
      data-aos="fade-left"
      data-aos-duration={3000}
    />
    <div className="container">
      <div className="theme-title-one text-center hide-pr">
        <div className="icon-box hide-pr">
          <img src="images/shape/bg-shape4.svg" alt="" className="bg-shape" />
          <img src="images/icon/icon26.svg" alt="" className="icon" />
        </div>
        <h2 className="main-title">
          Эрксисийг ашиглах алтан <br /> 3 шалтгаан
        </h2>
      </div>

      <div className="tab-content reason">
        <div id="month" className="tab-pane fade show active">
          <div className="row no-gutters">
            <div className="col-lg-4">
              <div className="single-pr-table free">
                <div className="pr-body">
                  <h3 className="feature">НЭГ ПЛАТФОРМ</h3>
                  <ul>
                    <li>Нэг багаж ашиглаад бүгдийг хийнэ</li>
                    <li>Нэг санд бүх мэдээллүүдээ төвлөрүүлнэ</li>
                    <li>
                      Нэг системрүү хандан, үүрэг даалгавруудаа хуваарилна
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-pr-table regular">
                <div className="pr-body">
                  <h3 className="feature">НЭГ ТӨЛБӨР</h3>
                  <ul>
                    <li>
                      Хэрэглэгчийн тооны өсөлтөөс шалтгаалж нэмэлт төлбөр
                      авахгүй
                    </li>
                    <li>
                      Аль нэг боломжоо тусад нь үнэлээд нэмэлт төлбөр авахгүй
                    </li>
                    <li>
                      Шинээр хөгжүүлэгдэх боломжуудаасаа нэмэлт төлбөр авахгүй
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-pr-table plus">
                <div className="pr-body">
                  <h3 className="feature">НЭГ ҮНДЭСТЭН/ ГЭР БҮЛ</h3>
                  <ul>
                    <li>
                      Монгол хэрэглэгчид эх хэл дээрээ платформоо ашиглана
                    </li>
                    <li>
                      Монгол хэрэглэгчдийн амжилтын кейсийг бүтээж, дэлхийд
                      танилцуулна
                    </li>
                    <li>
                      Монгол бизнесүүд технологийн хурдыг ашиглан, бизнесээ
                      хөгжүүлэхэд хувь нэмрээ оруулна
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Pricing;
