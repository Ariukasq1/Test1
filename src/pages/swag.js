import React, { Component } from 'react';
import Layout from '../components/Layout';

class Swag extends Component {
  render() {
    const forms = [{ brand_id: 'm7DmKt', form_id: 'moR3aE' }];

    return (
      <Layout forms={forms}>
        <div className='our-service pt-200 pb-100'>
          <div className='agn-about-us pt-250 pb-100'>
            <img src='images/shape/shape-61.svg' alt='' className='shape-one' />
            <img
              src='images/shape/shape-64.svg'
              alt=''
              className='shape-two'
              data-aos='fade-left'
            />
            <img
              src='images/shape/shape-65.svg'
              alt=''
              className='shape-three'
              data-aos='fade-right'
            />
            <img
              src='images/shape/shape-60.svg'
              alt=''
              className='shape-four'
            />
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 pl-100 order-lg-last'>
                  <div className='text-wrapper'>
                    <div className='theme-title-one'>
                      <h2 className='main-title'>Үнэгүй футболка аваарай!</h2>
                    </div>
                    <p>
                      Шуудангаар эрхэс болон MITPU-н логотой үнэгүй футболка
                      авмаар байвал Github дээр хэдхэн үйлдлийг хийгээрэй.
                    </p>{' '}
                    <br />
                    <p>
                      Бид Эрхэсийг дэмжигчиддээ зориулан нэгэн илгээмжийг
                      бэлдсэн байгаа. Эрхэст хувь нэмрээ оруулсан бүх хүнд
                      талархлаа илэрхийлж футболка болон стикертэй шууданг хүн
                      бүрт илгээх болно.
                    </p>
                  </div>
                </div>
                <div className='col-lg-6 order-lg-first'>
                  <div className='img-box'>
                    <img src='images/swag.jpg' alt='' className='main-img' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='container pt-150'>
            <div className='demo-container-1100'>
              <div className='row service-minimal'>
                <div className='col-lg-6'>
                  <div className='service-block mb-80' data-aos='fade-up'>
                    <div className='icon-box mb-20'>
                      <img
                        className='icon'
                        src='images/icon/icon33.svg'
                        alt=''
                      />
                    </div>
                    <h2 className='service-title'>
                      <a href='#'>Бэлгээ яаж авах вэ?</a>
                    </h2>
                    <ul>
                      <li>
                        <a
                          href='https://github.com/erxes/erxes'
                          target='_blank'
                        >
                          erxes Repository
                        </a>
                        -г Follow, Star, Fork хийх.
                      </li>
                      <li>
                        <a
                          href='https://github.com/erxes/erxes/issues/new/choose'
                          target='_blank'
                        >
                          Github
                        </a>{' '}
                        дээр 3 “Issue” үүсгэх.
                      </li>
                      <li>
                        <a
                          href='https://github.com/erxes/erxes'
                          target='_blank'
                        >
                          Github
                        </a>{' '}
                        дээр 1 Pull Request явуулах
                      </li>
                      <li>Swag авах хүсэлтээ доор буй анкетаар илгээх</li>
                      <li>
                        Хэрэв бүх алхмыг амжилттай гүйцэтгэвэл таны хаягаар
                        бэлэг очих болно!
                      </li>
                    </ul>
                    <div>
                      Бэлгээ аваад футболкаа өмсөж, стикерээ ашигласан зургаа
                      бидэнтэй <q>@erxesHQ</q> tag ашиглан цахим хуудсандаа
                      хуваалцаарай!
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div
                    className='service-block mb-80'
                    data-aos='fade-up'
                    data-aos-delay='100'
                  >
                    <div className='icon-box mb-20'>
                      <img
                        className='icon'
                        src='images/icon/icon30.svg'
                        alt=''
                      />
                    </div>
                    <h2 className='service-title'>
                      <a href='#'>Нөхцөл:</a>
                    </h2>
                    <ul className='theme-list-item'>
                      <li>
                        <i
                          className='color-style fa fa-check'
                          aria-hidden='true'
                        ></i>
                        Эхний 4 алхмыг бүрэн гүйцэтгэсэн эсэхээ шалгаарай! Бид
                        хүсэлт тус бүртэй нэг бүрчлэн танилцах ба бүх шаардлагыг
                        хангасан тохиолдолд та бэлгээ авах боломжтой.
                      </li>
                      <li>
                        <i
                          className='color-style fa fa-check'
                          aria-hidden='true'
                        ></i>
                        Илгээмжийг дэлхийн аль ч оронд үнэгүй явуулна
                      </li>
                      <li>
                        <i
                          className='color-style fa fa-check'
                          aria-hidden='true'
                        ></i>
                        Энэхүү хөтөлбөр нь одоогоор туршилтын шатандаа байгаа
                        бөгөөд ирээдүйд илгээмж явуулах хүрээ, бэлгийн төрөл
                        өөрчлөгдөж магадгүй.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='clearfix'></div>
              </div>
            </div>
          </div>

          <div className='agn-counter-section'>
            <img src='images/shape/shape-55.svg' alt='' className='shape-one' />
            <img src='images/shape/shape-59.svg' alt='' className='shape-two' />
            <img
              src='images/shape/shape-61.svg'
              alt=''
              className='shape-three'
            />
            <div className='container'>
              <div className='flex'>
                <div data-erxes-embed='moR3aE' style={{ width: '600px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  } // end render()
} // end component

export default Swag;
