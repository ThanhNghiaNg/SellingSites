import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LiveChat from "../LiveChat/LiveChat";

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Layout;
