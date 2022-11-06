import Container from "../component/UI/Container";
import BannerFrame from "../component/Banner/BannerFrame";
import Cart from "../component/Cart/Cart";

const CartPage = (props) => {
  return (
    <Container>
      <BannerFrame pageName="Cart" />
      <Cart />
    </Container>
  );
};

export default CartPage;
