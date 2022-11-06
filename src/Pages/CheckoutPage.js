import Checkout from "../component/Checkout/Checkout";
import BannerFrame from '../component/Banner/BannerFrame'
import Container from "../component/UI/Container";
const CheckoutPage = (props) => {
  return (
    <Container>
      <BannerFrame pageName="Checkout" sub='home / cart / '/>
      <Checkout />
    </Container>
  );
};

export default CheckoutPage;
