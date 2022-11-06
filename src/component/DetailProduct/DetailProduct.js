import classes from "./DetailProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import Container from "../UI/Container";
import { useEffect, useState } from "react";
import { addStyleCurrency } from "../ProductList/ProductItem";
import { cartActions } from "../../store/cart";
import { URL } from "../ProductList/ProductList";
import Button from "../UI/Button";
import ProductItem from "../ProductList/ProductItem";
import { useNavigate } from "react-router-dom";

// DetailProduct Componet - render all information about the product
const DetailProduct = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.users.currentUser); // get currentUser from store
  const allProducts = useSelector((state) => state.products.allProducts);

  const product = allProducts.filter((item) => item._id.$oid === props.id)[0]; //

  const [showLongDesc, setShowLongDesc] = useState(true); // state for handling show description or not
  const [mainImageSrc, setMainImageSrc] = useState(null); // state for changing the largest display image
  const [amount, setAmount] = useState(1); // state for changing the quantity of product

  // Increase quantity of product
  const increaseAmountHandler = () => {
    setAmount((amount) => amount + 1);
  };

  // Descrease quantity of product
  const descreaseAmountHandler = () => {
    setAmount((amount) => (amount - 1 > 0 ? amount - 1 : 1));
  };

  // Handle when user add product to cart
  const addToCartHandler = () => {
    dispatch(
      cartActions.addCart({
        user: currentUser ? currentUser.email : "unknown",
        product: product,
        amount: amount,
      })
    );
  };

  // Change the main image when click on images
  const changeMainImageHandler = (event) => {
    setMainImageSrc(event.target.src);
  };

  // Handle toggle description
  const toggleLongDescHandler = () => {
    setShowLongDesc((prevState) => !prevState);
  };

  useEffect(() => {
    // When user reload Detail Page, state and data will lost, go back to shop to fecth data again
    if (!product) {
      navigate("/shop");
      return;
    }
    // Change main image and reset the quantity of product if change product
    setMainImageSrc(product.img1);
    setAmount(1);
  }, [product]);

  // When user reload Detail Page, state and data will lost, have no data to render anything
  if (!product) {
    return;
  }
  
  let imagesList = []; // Contains all imagesof product
  let mainImage = (
    <img src={mainImageSrc} className={classes["imgs-product"]}></img>
  ); // mainImage of the product (the largest size)

  // Add display images element to imagesList
  for (let i = 1; i <= 4; i++) {
    const imgEl = (
      <div key={i} onClick={changeMainImageHandler}>
        <img src={product[`img${i}`]} className={classes["imgs-product"]}></img>
      </div>
    );
    imagesList.push(imgEl);
  }

  // Create description
  const longDescription = product.long_desc
    .split("\n") // split whole paragraps by '\n'
    .map((str) => <p>{str}</p>); // put text to p tag to display  newline

  // Get relatedProduct from all product
  const relatedProducts = allProducts
    .filter(
      (item) => product.category === item.category && item._id.$oid !== props.id
    ) // filter which product has the same category, and not this product from all product
    .map((productItem) => {
      return (
        <div className="col" key={productItem.name}>
          <ProductItem product={productItem} toDetail={false} />
        </div>
      );
    });

  // push some empty columns to keep structure of grid
  while (relatedProducts.length % 4 !== 0) {
    relatedProducts.push(<div className="col"></div>);
  }

  return (
    <Container className={classes.detail}>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-2">{imagesList}</div>
            <div className="col-9">{mainImage}</div>
          </div>
        </div>
        <div className="col">
          <h1>{product.name}</h1>
          <p className="fs-4 light-gray">
            {addStyleCurrency(product.price)} VNĐ
          </p>
          <p className="light-gray">{product.short_desc}</p>
          <h5 className="text-uppercase">
            category:{" "}
            <span className="fs-6 text-lowercase light-gray">
              {product.category}
            </span>
          </h5>
          <div className={classes["add-form"]}>
            <label className="light-gray">QUANTITY</label>
            <button
              className={classes["no-style"]}
              onClick={descreaseAmountHandler}
            >
              <i className="fa fa-caret-left"></i>
            </button>
            <input type="number" value={amount} min={1}></input>
            <button
              className={classes["no-style"]}
              onClick={increaseAmountHandler}
            >
              <i className="fa fa-caret-right"></i>
            </button>
            <Button
              className={classes["add-cart-button"]}
              onClick={addToCartHandler}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.description}>
        <Button onClick={toggleLongDescHandler}>Description</Button>
        {/* show description when  showLongDesc is true*/}
        {showLongDesc && (
          <div className={classes["content-description"]}>
            <p className="fs-4 text-uppercase">product description</p>
            <div className="light-gray">{longDescription}</div>
          </div>
        )}
      </div>
      <div className={`row ${classes.related}`}>
        <p className="fs-4 text-uppercase">related products</p>
        {relatedProducts}
      </div>
    </Container>
  );
};

export default DetailProduct;
