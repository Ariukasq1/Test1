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
    <img src="images/shape/shape-25.svg" alt="" className="section-shape-three" />
    <div className="section-shape-four" />
    <img src="images/shape/shape-26.svg" alt="" className="section-shape-five" />
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
          Эрксисийн ашиглах алтан <br /> 3 шалтгаан
        </h2>
      </div>{' '}
      {/* /.theme-title-one */}
      {/* <div className="pricing-tab-menu pb-150">
        <div className="nav-wrapper">
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#month">
                Monthly
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#annual">
                Annual
              </a>
            </li>
          </ul>
        </div>
        <p>Save 30% on annual plan</p>
      </div>{' '} */}
      {/* /.pricing-tab-menu */}
      <div className="tab-content">
        {/* ^^^^^^^^^^^^^^^^^^^^^ Monthly ^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
        <div id="month" className="tab-pane fade show active">
          <div className="row no-gutters">
            <div className="col-lg-4">
              <div className="single-pr-table free">
                {/* <div className="pr-header">
                  <div className="price">$0.00</div>
                  <h4 className="title">Free</h4>
                </div>{' '} */}
                {/* /.pr-header */}
                <div className="pr-body">
                  <h3 className="feature">НЭГ ПЛАТФОРМ</h3>
                  <ul>
                    <li>Нэг багаж ашиглаад бүгдийг хийнэ</li>
                    <li>Нэг санд бүх мэдээллүүдээ төвлөрүүлнэ</li>
                    <li>Нэг системрүү хандан, үүрэг даалгавруудаа хуваарилна</li>
                  </ul>
                </div>{' '}
                {/* /.pr-body */}
                {/* <div className="pr-footer">
                  <a href="#" className="upgrade-button">
                    Upgrade
                  </a>
                  <a href="#" className="trial-button">
                    Get your 30 day free trial
                  </a>
                </div> */}
                {/* /.pr-footer */}
              </div>{' '}
              {/* /.single-pr-table */}
            </div>{' '}
            {/* /.col- */}
            <div className="col-lg-4">
              <div className="single-pr-table regular">
                {/* <div className="pr-header">
                  <div className="price">$11.25</div>
                  <h4 className="title">Reguler</h4>
                  <div className="package">Single User, Billed Monthly</div>
                </div>{' '} */}
                {/* /.pr-header */}
                <div className="pr-body">
                  <h3 className="feature">НЭГ ТӨЛБӨР</h3>
                  <ul>
                    <li>Хэрэглэгчийн тооны өсөлтөөс шалтгаалж нэмэлт төлбөр авахгүй</li>
                    <li>Аль нэг боломжоо тусад нь үнэлээд нэмэлт төлбөр авахгүй</li>
                    <li>Шинээр хөгжүүлэгдэх боломжуудаасаа нэмэлт төлбөр авахгүй</li>
                  </ul>
                </div>{' '}
                {/* /.pr-body */}
                {/* <div className="pr-footer">
                  <a href="#" className="upgrade-button">
                    Upgrade
                  </a>
                  <a href="#" className="trial-button">
                    Get your 30 day free trial
                  </a>
                </div>{' '} */}
                {/* /.pr-footer */}
              </div>{' '}
              {/* /.single-pr-table */}
            </div>{' '}
            {/* /.col- */}
            <div className="col-lg-4">
              <div className="single-pr-table plus">
                {/* <div className="pr-header">
                  <div className="price">$39.15</div>
                  <h4 className="title">Plus</h4>
                  <div className="package">Multiple User, Billed Monthly</div>
                </div>{' '}
                /.pr-header */}
                <div className="pr-body">
                  <h3 className="feature">НЭГ ҮНДЭСТЭН/ ГЭР БҮЛ</h3>
                  <ul>
                    <li>Монгол хэрэглэгчид эх хэл дээрээ платформоо ашиглана</li>
                    <li>Монгол хэрэглэгчдийн амжилтын кейсийг бүтээж, дэлхийд танилцуулна</li>
                    <li>
                      Монгол бизнесүүд технологийн хурдыг ашиглан, бизнесээ хөгжүүлэхэд хувь нэмрээ
                      оруулна
                    </li>
                  </ul>
                </div>{' '}
                {/* /.pr-body */}
                {/* <div className="pr-footer">
                  <a href="#" className="upgrade-button">
                    Upgrade
                  </a>
                  <a href="#" className="trial-button">
                    Get your 30 day free trial
                  </a>
                </div>{' '} */}
                {/* /.pr-footer */}
              </div>{' '}
              {/* /.single-pr-table */}
            </div>{' '}
            {/* /.col- */}
          </div>{' '}
          {/* /.row */}
        </div>{' '}
        {/* /#month */}
        {/* ^^^^^^^^^^^^^^^^^^^^^ Yearly ^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
        <div id="annual" className="tab-pane fade">
          <div className="row no-gutters">
            <div className="col-lg-4">
              <div className="single-pr-table free">
                <div className="pr-header">
                  <div className="price">$0.00</div>
                  <h4 className="title">Free</h4>
                </div>{' '}
                {/* /.pr-header */}
                <div className="pr-body">
                  <h3 className="feature">Top Features</h3>
                  <ul>
                    <li>Limited Acess Library</li>
                    <li>Single User</li>
                    <li>No Updates</li>
                  </ul>
                </div>{' '}
                {/* /.pr-body */}
                <div className="pr-footer">
                  <a href="#" className="upgrade-button">
                    Upgrade
                  </a>
                  <a href="#" className="trial-button">
                    Get your 30 day free trial
                  </a>
                </div>{' '}
                {/* /.pr-footer */}
              </div>{' '}
              {/* /.single-pr-table */}
            </div>{' '}
            {/* /.col- */}
            <div className="col-lg-4">
              <div className="single-pr-table regular">
                <div className="pr-header">
                  <div className="price">$560.25</div>
                  <h4 className="title">Reguler</h4>
                  <div className="package">Single User, Billed Monthly</div>
                </div>{' '}
                {/* /.pr-header */}
                <div className="pr-body">
                  <h3 className="feature">Top Features</h3>
                  <ul>
                    <li>Full Acess Library</li>
                    <li>Multiple User</li>
                    <li>10gb Bandwith &amp; 2 Panel</li>
                    <li>2x Faster speed </li>
                  </ul>
                </div>{' '}
                {/* /.pr-body */}
                <div className="pr-footer">
                  <a href="#" className="upgrade-button">
                    Upgrade
                  </a>
                  <a href="#" className="trial-button">
                    Get your 30 day free trial
                  </a>
                </div>{' '}
                {/* /.pr-footer */}
              </div>{' '}
              {/* /.single-pr-table */}
            </div>{' '}
            {/* /.col- */}
            <div className="col-lg-4">
              <div className="single-pr-table plus">
                <div className="pr-header">
                  <div className="price">$999.15</div>
                  <h4 className="title">Plus</h4>
                  <div className="package">Multiple User, Billed Monthly</div>
                </div>{' '}
                {/* /.pr-header */}
                <div className="pr-body">
                  <h3 className="feature">Top Features</h3>
                  <ul>
                    <li>Full Acess Library</li>
                    <li>Multiple User</li>
                    <li>10gb Bandwith &amp; 2 Panel</li>
                    <li>2x Faster speed </li>
                    <li>Hotline Support 24x7</li>
                  </ul>
                </div>{' '}
                {/* /.pr-body */}
                <div className="pr-footer">
                  <a href="#" className="upgrade-button">
                    Upgrade
                  </a>
                  <a href="#" className="trial-button">
                    Get your 30 day free trial
                  </a>
                </div>{' '}
                {/* /.pr-footer */}
              </div>{' '}
              {/* /.single-pr-table */}
            </div>{' '}
            {/* /.col- */}
          </div>{' '}
          {/* /.row */}
        </div>{' '}
        {/* /#annual */}
      </div>
    </div>{' '}
    {/* /.container */}
  </div>
);

export default Pricing;