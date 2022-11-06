import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import __classes from "../CategoryList/CategoryList.module.css";
import classes from "./ProductList.module.css";
import { productsActions } from "../../store/products";
import ProductItem from "./ProductItem";

// define URL 
export const URL =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

// ProductList Component - for render grid of Products
const ProductList = React.memo((props) => {
  const [isLoading, setIsLoading] = useState(false); // State for status if is loading

  const dispatch = useDispatch();
  let data = useSelector((state) => state.products.products); // get data from store about the display products
  const allProducts = useSelector((state) => state.products.allProducts); // get data from store about all products

  //  Change display data to all products when requested
  if (props.showAll) {
    data = allProducts;
  }

  // fetch data from url
  const getData = useCallback(
    async (url) => {
      setIsLoading(true); // Change state isLoading when start fectching
      const respone = await fetch(url);
      const product = await respone.json(); // Get data
      dispatch(productsActions.setAllProducts(product)); // Change all product of store
      dispatch(productsActions.changeProducts(product)); // Change display product of store
      setIsLoading(false); // Change state isLoading when finish fectching
    },
    [dispatch]
  );

  useEffect(() => {
    // If data is empty, use getData to fetch data, else use current display product as data (not always all products)
    if (data.length < 1) {
      getData(URL);
    }
  }, [getData, data.length]);

  let contentProducts = []; // keep the content of display products to render
  const numCols = props.numCols ? Number(props.numCols) : 4; // Determine the number of columns on grid to display products (default is 4)

  if (data.length > 0) {
    for (let i = 0; i < data.length / numCols; i++) {
      // Split the display data to smaller chunks, one chunks (for one row) have no more than numCols element
      const chunkProucts = data
        .slice(i * numCols, i * numCols + numCols)
        .map((product) => {
          return (
            <div className="col" key={product.name}>
              <ProductItem product={product} toDetail={props.itemToDetail} />
            </div>
          );
        });

      // Add more empty columns to keep the grid structure
      while (chunkProucts.length % numCols !== 0) {
        chunkProucts.push(<div className="col" key={Math.random()}></div>);
      }

      // Push each chunks to the contentProducts to display
      contentProducts.push(
        <div className="row" key={Math.random()}>
          {chunkProucts}
        </div>
      );
    }
  }

  return (
    <div className={classes["product-list"]}>
      {props.showTitle && (
        <div className={__classes.header}>
          <h5>make the hard way</h5>
          <h3>top trending products</h3>
        </div>
      )}
      {/* Show mode Loading or contentProduct when finish loading */}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="d-grid gap-4">{contentProducts}</div>
      )}
    </div>
  );
});

export default ProductList;
