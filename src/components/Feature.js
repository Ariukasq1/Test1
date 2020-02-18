const Feature = () => (
  <div className="our-feature-sass">
    <div className="section-shape-one" />
    <div className="section-shape-two">
      <img src="images/shape/shape-18.svg" alt="" />
    </div>
    <img src="images/shape/shape-18.svg" alt="" className="section-shape-three" />
    <div className="section-shape-four" />
    <img src="images/shape/shape-20.svg" alt="" className="section-shape-five" />
    <img src="images/shape/shape-21.svg" alt="" className="section-shape-six" />
    <img src="images/shape/shape-22.svg" alt="" className="section-shape-seven" />
    <img src="images/shape/shape-19.svg" alt="" className="section-shape-eight" />
    <a href="#feature-sass" className="down-arrow scroll-target">
      <span>
        <i className="flaticon-back" />
      </span>
    </a>
    <div className="feature-wrapper" id="feature-sass">
      <div className="single-feature-block">
        <div className="container clearfix">
          <div className="text-box">
            <div className="theme-title-one hide-pr">
              <div className="icon-box hide-pr">
                <img src="images/shape/bg-shape2.svg" alt="" className="bg-shape" />
                <img src="images/icon/icon24.svg" alt="" className="icon" />
              </div>
              <h2 className="main-title">
              Маркетинг баг
                <b className="line" />
              </h2>
            </div>
            <ul className="mt-30">
              <li>Маркетингийнхаа санааг үнэлэх, шигших, хэмжих, архивлах боломж</li>
              <li>10000 имэйлийг $1-оор илгээх боломж</li>
              <li>Цахим хуудасны цэс болгонд угтах мессэж тохируулах боломж</li>
            </ul>
          </div>
        </div>
        <div className="img-box">
          <img src="images/shape/shape-15.svg" alt="" class="main-shape" data-aos="fade-right" data-aos-delay="200"/>
          <img src="images/shape/shape-16.svg" alt="" class="bg-shape" data-aos="fade-right" data-aos-delay="400"/>
          <img
            src="images/side-1.png"
            alt=""
            className="main-shape screen-one"
            data-aos="fade-right"
            data-aos-delay={200}
          />
        </div>
      </div>
      <div className="single-feature-block">
        <div className="container clearfix">
          <div className="text-box">
            <div className="theme-title-one hide-pr">
              <div className="icon-box hide-pr">
                <img src="images/shape/bg-shape3.svg" alt="" className="bg-shape" />
                <img src="images/icon/icon25.svg" alt="" className="icon" />
              </div>
              <h2 className="main-title">
              Борлуулалт баг <b className="line" />
              </h2>
            </div>
            <ul className="mt-30">
              <li>
              Борлуулалтаа үе шатаар нь төлөвлөн, үйл явцтай тухай бүрд танилцах боломж
              </li>
              <li>
              Борлуулалтаа ажилтнаар, бүтээгдэхүүнээр, хугацаагаар гэх мэт төрөл бүрийн нөхцлүүдээр ангилах боломж
              </li>
              <li>
              Ирэх саруудад ямар борлуулалтууд хийгдэх магадлалтай танилцах боломж
              </li>
            </ul>
          </div>
        </div>
        <div className="img-box">
          <img
            src="images/side-2.png"
            alt=""
            style={{width: '900px'}}
            className="screen-one"
            data-aos="fade-down"
            data-aos-delay={400}
          />
        </div>
      </div>
      <div className="single-feature-block">
        <img src="images/shape/shape-45.svg" alt="" class="section-shape-one"/>
        <img src="images/shape/shape-46.svg" alt="" class="section-shape-two"/>
        <img src="images/shape/shape-58.svg" alt="" class="section-shape-three"/>
        <img src="images/shape/shape-60.svg" alt="" class="section-shape-four"/>
        <img src="images/shape/shape-61.svg" alt="" class="section-shape-five"/>
        <div className="container clearfix">
          <div className="text-box">
            <div className="theme-title-one hide-pr">
              <div className="icon-box hide-pr">
                <img src="images/shape/bg-shape2.svg" alt="" className="bg-shape" />
                <img src="images/icon/icon24.svg" alt="" className="icon" />
              </div>
              <h2 className="main-title">
              Хэрэглэгчтэй харилцах баг
                <b className="line" />
              </h2>
            </div>
            <ul className="mt-30">
              <li>
              Фэйсбүүк, твиттер, вайбер гэх мэт сошиал платформууд, имэйл, цахим хуудасны мессенжер, мобайл апп-ын чат,  утас гэх мэт хэрэглэгчтэй харилцах сувгуудыг нэг инбокст хүлээн авна.
              </li>
              <li>
              Хэрэглэгчтэй харилцах явцад үүссэн санал гомдол, шинэ борлуулалтыг холбогдох багуудад хуваарилан, мэдээллийн давхцалгүй уялдаатай ажиллана.
              </li>
              <li>
              Хэрэглэгчтэй харилцах явцад илэрсэн мэдээллүүдийг бүртгэн, хэрэглэгчийн мэдээллийн сангаа улам баяжуулна.
              </li>
            </ul>
          </div>
        </div>
        <div className="img-box" style={{marginTop:'30px', left:'20px'}}>
          <img
            src="images/side-3.png"
            alt=""
            className="main-shape"
            data-aos="fade-right"
            data-aos-delay={200}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Feature;
