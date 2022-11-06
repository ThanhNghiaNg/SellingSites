import Container from "../component/UI/Container";
import Banner from "../component/Banner/Banner";
import CategoryList from "../component/CategoryList/CategoryList";
import ProductList from "../component/ProductList/ProductList";
import MoreInfo from "../component/MoreInfo/MoreInfo";

const HomePage = (props) => {
  return (
    <Container>
      <Banner />
      <CategoryList/>
      <ProductList showTitle={true} showAll={true}/>
      <MoreInfo/>
    </Container>
  );
};

export default HomePage;
