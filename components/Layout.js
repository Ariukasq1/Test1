import Header from './Header';
import Footer from './Footer';
import ScrollTop from './ScrollTop';

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <ScrollTop />
    <Footer />
  </div>
);

export default Layout;
