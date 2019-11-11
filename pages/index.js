import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Partner from '../components/Partner';
import Service from '../components/Service';
import Feature from '../components/Feature';
import Pricing from '../components/Pricing';
import Testimonial from '../components/Testimonial';
import Faq from '../components/Faq';
import Contact from '../components/Contact';
import '../style/css/custom.css';
import '../style/css/responsive.css';
import '../style/fonts/font-awesome/css/font-awesome.css';
const Index = () => (
  <Layout>
    <Head>
      <title>Erxes mn</title>
      <link href="static/owl-carousel/owl.carousel.css" type="text/css" rel="stylesheet" />
      <link href="static/jquery-ui/jquery-ui.min.css" type="text/css" rel="stylesheet" />
      <script src="static/jquery.2.2.3.min.js"></script>
      <script src="static/popper.js/popper.min.js"></script>
      <script src="static/bootstrap/js/bootstrap.min.js"></script>
      <script src="static/mega-menu/assets/js/custom.js"></script>
      <script src="static/aos-next/dist/aos.js"></script>
      <script src="static/WOW-master/dist/wow.min.js"></script>
      <script src="static/owl-carousel/owl.carousel.min.js"></script>
      <script src="static/jquery.appear.js"></script>
      <script src="static/jquery.countTo.js"></script>
      <script src="static/fancybox/dist/jquery.fancybox.min.js"></script>
      <script src="static/lang.js"></script>
      <script src="static/theme.js"></script>
    </Head>
    <Banner />
    <Partner />
    <Service />
    <Feature />
    <Pricing />
    <Testimonial />
    <Faq />
    <Contact />
  </Layout>
);

export default Index;
