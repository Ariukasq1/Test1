import Header from './Header';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import HtmlHead from './HtmlHead';

import '../style/css/custom.css';
import '../style/css/responsive.css';
import '../style/fonts/font-awesome/css/font-awesome.css';

const Layout = (props) => (
  <>
    <HtmlHead forms={props.forms} />
    <Header />
    {props.children}
    <ScrollTop />
    <Footer />
  </>
);

export default Layout;
