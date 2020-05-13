import Head from 'next/head';

const HtmlHead = (props) => {
  const { erxesSettings = {}, sources = [] } = props;
  const scripts = [];

  for (const s of sources) {
    scripts.push(<script src={s} async={true} key={s}></script>);
  }

  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta
        name='keywords'
        content='эрхэс, эрксис, CRM, маркетинг, Хэрэглэгчидтэй харилцах, борлуулалт, хэрэглэгч, маркетингийн автоматжуулалт'
      />
      <meta
        name='description'
        content='Маркетингийн санаануудаа үнэлэх, хэмжих, борлуулалтаа төлөвлөх хянах, хэрэглэгчтэйгээ харилцах, халамжлах үйл ажиллагааг нэг технологиос удирдаарай'
      />
      <meta
        name='og:image'
        content='https://erxes.io/static/images/logo/icon.png'
      />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>Эрксис - Маркетингийн цогц платформ</title>

      <link
        href='https://erxes.io/static/images/logo/icon.png'
        rel='shortcut icon'
      />
      <link
        href='static/owl-carousel/owl.carousel.css'
        type='text/css'
        rel='stylesheet'
      />
      <link
        href='static/jquery-ui/jquery-ui.min.css'
        type='text/css'
        rel='stylesheet'
      />
      <script dangerouslySetInnerHTML={{ __html: `${erxesSettings}` }}></script>
      {scripts}
      <script src='static/jquery.2.2.3.min.js'></script>
      <script src='static/popper.js/popper.min.js'></script>
      <script src='static/bootstrap/js/bootstrap.min.js'></script>
      <script src='static/mega-menu/assets/js/custom.js'></script>
      <script src='static/aos-next/dist/aos.js'></script>
      <script src='static/WOW-master/dist/wow.min.js'></script>
      <script src='static/owl-carousel/owl.carousel.min.js'></script>
      <script src='static/jquery.appear.js'></script>
      <script src='static/jquery.countTo.js'></script>
      <script src='static/fancybox/dist/jquery.fancybox.min.js'></script>
      <script src='static/isotope.pkgd.min.js'></script>
      <script src='static/theme.js'></script>
    </Head>
  );
};

export default HtmlHead;
