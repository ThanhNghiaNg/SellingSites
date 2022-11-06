import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../store/products";

// FilterBar Component - Handler change on filter
const FilterBar = (props) => {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products.allProducts); // get allProducts state from store
  const products = useSelector((state) => state.products.products); // get display product state from store

  // display search result on every keystroke
  const inputSearchHandler = (event) => {
    const inputSearch = event.target.value;
    // if input is empty show all product
    if (!inputSearch) dispatch(productsActions.changeProducts(allProducts));

    // filter result by user input
    const resultProducts = allProducts.filter((product) => {
      return (
        product.name.includes(inputSearch) ||
        product.category.includes(inputSearch)
      );
    });

    dispatch(productsActions.changeProducts(resultProducts)); // change display result of store
  };

  // Handle sort display result when choose Ascending or Descending
  const sortResultHandler = (event) => {
    const type = event.target.value;
    // if type is "Default", do nothing
    if (type === "Default") {
      return;
    }

    // Sort display result by type
    const sortArray = [...products].sort((item1, item2) => {
      if (type === "Ascending") {
        return item1._id.$oid > item2._id.$oid ? 1 : -1;
      }
      if (type === "Descending") {
        return item1._id.$oid < item2._id.$oid ? 1 : -1;
      }
    });

    dispatch(productsActions.changeProducts(sortArray)); // change the display result
  };

  return (
    <div className="d-flex justify-content-between pb-4">
      <input
        type="text"
        placeholder="Enter search Here"
        className="col-4 p-2"
        onChange={inputSearchHandler}
      ></input>
      <select onChange={sortResultHandler}>
        <option value="Default">Default</option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
    </div>
  );
};

export default FilterBar;
