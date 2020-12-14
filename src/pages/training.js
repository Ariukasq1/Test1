import React, { Component } from "react";
import Layout from "../components/Layout";

class Training extends Component {
  render() {
    return (
      <Layout forms={[{ brand_id: "m7DmKt", form_id: "3QPxQs" }]}>
        <div className="our-service pt-150 pb-100">
          <div className="agn-about-us pt-250 pb-100">
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
            <img
              src="images/shape/shape-60.svg"
              alt=""
              className="shape-four"
            />
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-md-9">
                  <div className="text-wrapper">
                    <div className="theme-title-one">
                      <h2 className="main-title text-center">
                        Эрксисийн цахим сургалт зөвлөгөө
                      </h2>
                    </div>
                    <p className="pb-30">
                      <b>ХЭЗЭЭ:</b> Долоо хоног бүрийн мягмар гарагт ⏳15:30 -
                      17:00 <br />
                      <b>ХЭРХЭН:</b> Сургалт цахимаар явагдана. Бизнесийн үйл
                      ажиллагааг технологи ашиглан хэрхэн сайжруулах тухай
                      ойлголтууд авахаас гадна эрксис програмийг хэрхэн ашиглах
                      талаар бүрэн мэдлэгтэй болно.
                    </p>
                    <b>ХӨТӨЛБӨР:</b>
                    <ul className="theme-list-item pb-30">
                      <li>
                        <i
                          className="fa fa-chevron-right"
                          aria-hidden="true"
                        ></i>{" "}
                        15:20 - Цахим ангид бүртгүүлсэн хэрэглэгчид орох
                      </li>
                      <li>
                        <i
                          className="fa fa-chevron-right"
                          aria-hidden="true"
                        ></i>{" "}
                        15:30 - Танилцах
                      </li>
                      <li>
                        <i
                          className="fa fa-chevron-right"
                          aria-hidden="true"
                        ></i>{" "}
                        15:40 - Эрксис бүтээгдэхүүний ерөнхий танилцуулга
                      </li>
                      <li>
                        <i
                          className="fa fa-chevron-right"
                          aria-hidden="true"
                        ></i>{" "}
                        15:50 - Эрксис дээрх боломжууд
                      </li>
                      <li>
                        <i
                          className="fa fa-chevron-right"
                          aria-hidden="true"
                        ></i>{" "}
                        16:10 - Асуулт, ярилцлага
                      </li>
                      <li>
                        <i
                          className="fa fa-chevron-right"
                          aria-hidden="true"
                        ></i>{" "}
                        16:30 - Нэмэлт зөвөлгөө
                      </li>
                      <li>
                        <i
                          className="fa fa-chevron-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Гарын авлага
                      </li>
                    </ul>
                    <div className="alert alert-warning" role="alert">
                      1. Доорхи бүртгэлийг хийснээр таны цаг баталгаажиж танд
                      мэдэгдэл очих ба өөрийн болон бусдын цагийг хүндэтгэн
                      цахим ангид сургалт эхлэхээс 15 минутын өмнө орсон байхыг
                      хүсч байна. <br /> <br />
                      2. Баталгаажуулах мэдэгдэл таны бөглөсөн мэдээллээр очих
                      тул үнэн зөв бөглөнө үү.
                    </div>
                  </div>
                  <br />
                  <br />
                  <div
                    data-erxes-embed="3QPxQs"
                    style={{ width: "100%", height: "650px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Training;
