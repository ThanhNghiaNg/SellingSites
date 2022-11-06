import classes from "./SidebarItem.module.css";
import sidebarClasses from "./Sidebar.module.css";
import { productsActions } from "../../store/products";
import { useDispatch, useSelector } from "react-redux";

const SidebarItem = (props) => {
  const dispatch = useDispatch();

  const filter = props.data.toLowerCase(); // get filter from props
  const currentFilter = useSelector((state) => state.products.filterCategory); // get currentFilter from store
  const allProducts = useSelector((state) => state.products.allProducts); // get allProducts from store

  // Handle when user click on each filter
  const filterHandler = () => {
    dispatch(productsActions.setFilter(filter)); // Set current filter of store

    // filter product from allProducts by obtained filter
    const filteredProducts = allProducts.filter((product) => {
      return (
        product.category.toLowerCase().includes(filter) ||
        product.name.toLowerCase().includes(filter)
      );
    });

    // If have filtered result, change current display product of store to display in ProductList component
    if (filteredProducts.length > 0) {
      dispatch(productsActions.changeProducts(filteredProducts));
    }
  };

  return (
    // Change style to active when this filter matched with filter in store
    <div
      className={`${sidebarClasses["item-padding"]} ${classes.item} ${
        filter === currentFilter ? classes.active : ""
      }`}
      onClick={filterHandler}
    >
      <p>{props.data}</p>
    </div>
  );
};

export default SidebarItem;
