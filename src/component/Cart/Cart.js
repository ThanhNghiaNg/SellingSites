import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import { addStyleCurrency } from "../ProductList/ProductItem";

const Cart = (props) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.users.currentUser); // get currentUser from store
  const allRecord = useSelector((state) => state.cart.listCart); // // get allRecord from store

  // Handle when click 'Continue' shopping button
  const backToShopHandler = () => {
    navigate("/shop");
  };

  // Handle when click 'Proceed to checkout' shopping button
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  let totalPriceCart = 0; // contain total price of cart
  const contentRecord = allRecord
    // Filter all product added to cart by user email
    .filter((record) => {
      if (currentUser) {
        return record.user === currentUser.email;
      }
      return record.user === "unknown";
    })
    .map((record) => {
      totalPriceCart += record.product.price * record.amount; // calculate total price of cart
      return <CartItem key={Math.random()} record={record} />;
    });

  return (
    <div className={classes.cart}>
      <p className="fs-3 text-uppercase mt-5">shopping cart</p>
      <div className="row">
        <div className="col-8">
          <div className={`row bg-light-gray ${classes.header}`}>
            <div className="col-1">image</div>
            <div className="col-3">product</div>
            <div className="col">price</div>
            <div className="col">quantity</div>
            <div className="col-1">total</div>
            <div className="col">remove</div>
          </div>

          {contentRecord}

          <div className="row">
            <div className="d-flex justify-content-between align-items-center bg-light-gray p-4">
              <button
                className={classes["no-border"]}
                onClick={backToShopHandler}
              >
                <p>
                  <span>
                    <i className="fa-sharp fa-solid fa-arrow-left-long"></i>
                  </span>
                  Continue shopping
                </p>
              </button>
              <button onClick={goToCheckoutHandler}>
                <p>
                  Proceed to checkout
                  <span>
                    <i className="fa-sharp fa-solid fa-arrow-right-long"></i>
                  </span>
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row p-5 text-uppercase bg-light-gray ms-4">
            <p className="fs-3 ">cart total</p>
            <div className="d-flex justify-content-between border-bottom mb-3">
              <p className="">subtotal</p>
              <p className="light-gray">
                {addStyleCurrency(totalPriceCart)} VNĐ
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p>total</p>
              <p className="fs-5">{addStyleCurrency(totalPriceCart)} VNĐ</p>
            </div>
            <div className="mt-3">
              <input
                type="text"
                placeholder="Enter your coupon"
                className="p-3 w-100"
              ></input>
              <button className="w-100 text-white bg-dark d-flex gap-2 justify-content-center py-1">
                <span>
                  <i className="fa-solid fa-gift"></i>
                </span>
                <p>Apply coupon</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
