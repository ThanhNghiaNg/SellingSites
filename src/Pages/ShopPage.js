import Container from "../component/UI/Container";
import BannerFrame from "../component/Banner/BannerFrame";
import ProductList from "../component/ProductList/ProductList";
import Sidebar from "../component/Sidebar/Sidebar";
import FilterBar from "../component/FilterBar/FilterBar";

const ShopPage = (props) => {
  return (
    <Container>
      <BannerFrame pageName="Shop" />
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <FilterBar></FilterBar>
          <ProductList numCols="3" showTitle={false} itemToDetail={true}/>
        </div>
      </div>
    </Container>
  );
};

export default ShopPage;
