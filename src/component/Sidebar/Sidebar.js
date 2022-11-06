import classes from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import { productsActions } from "../../store/products";
import { useDispatch, useSelector } from "react-redux";

const dummyCategory = [
  { title: "iphone & mac", categories: ["iphone", "ipod", "macbook"] },
  { title: "wireless", categories: ["airpod", "watch"] },
  { title: "other", categories: ["mouse", "keyboard", "other"] },
];

const Sidebar = (props) => {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products.allProducts); // get allProducts state from store

  // Show all product when click on category 'All'
  const showAllHandler = () => {
    dispatch(productsActions.setFilter("All"));
    dispatch(productsActions.changeProducts(allProducts));
  };

  // Render sidebar main content
  const categoriesContent = dummyCategory.map((category) => {
    // Get sidebar item, item smaller related with title
    const categories = category.categories.map((item) => {
      return <SidebarItem data={item} key={item} />;
    });
    // render title and related item
    return (
      <div key={category.title}>
        <p className={`${classes.title} ${classes["item-padding"]} bg-light`}>
          {category.title}
        </p>
        {categories}
      </div>
    );
  });

  
  return (
    <div className={classes.sidebar}>
      <p className="fs-3">CATEGORIES</p>
      <p className={`fs-4 bg-dark text-light ${classes["item-padding"]}`}>
        APPLE
      </p>
      <p className={`${classes["item-padding"]}`} onClick={showAllHandler}>
        All
      </p>
      {categoriesContent}
    </div>
  );
};

export default Sidebar;
