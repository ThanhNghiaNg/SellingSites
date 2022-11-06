import Container from "../UI/Container";
import { useSelector } from "react-redux";
import classes from "./Checkout.module.css";
import Button from "../UI/Button";
import { addStyleCurrency } from "../ProductList/ProductItem";

const Checkout = (props) => {
  const allRecord = useSelector((state) => state.cart.listCart); // get allRecord from store
  const currentUser = useSelector((state) => state.users.currentUser); // get currentUser from store

  let totalPriceCart = 0; // contain total price of cart

  // Get quick information about the cart
  const shortDetail = allRecord
    // Filter product added by user email in all record
    .filter((record) => {
      if (currentUser) {
        return record.user === currentUser.email;
      }
      return record.user === "unknown";
    })
    .map((record) => {
      totalPriceCart += record.product.price * record.amount; // calculate total price of cart
      return (
        <div className="row border-bottom mb-2 gap-1">
          <p className="col-7 fw-bold text-capitalize p-0">
            {record.product.name}
          </p>
          <p className="col light-gray p-0">
            {addStyleCurrency(record.product.price)} VNĐ{" "}
            <span className="text-lowercase">x{record.amount}</span>
          </p>
        </div>
      );
    });

  return (
    <div className={classes.checkout}>
      <p className="fs-3 text-uppercase mt-5">billing details</p>
      <div className="row text-uppercase">
        <form className="col-7">
          <div className={classes["input-controls"]}>
            <label>full name:</label>
            <input placeholder="Enter Your Full Name Here!"></input>
          </div>
          <div className={classes["input-controls"]}>
            <label>email:</label>
            <input placeholder="Enter Your Email Here!"></input>
          </div>
          <div className={classes["input-controls"]}>
            <label>Phone Number:</label>
            <input placeholder="Enter Your Phone Number Here!"></input>
          </div>
          <div className={classes["input-controls"]}>
            <label>Address:</label>
            <input placeholder="Enter Your Address Here!"></input>
          </div>
          <Button className={classes.order}>Place order</Button>
        </form>
        <div className="col">
          <div className="row p-5 text-uppercase bg-light-gray ms-4">
            <p className="fs-3 ">your order</p>
            {shortDetail}

            <div className="row">
              <p className="col">total</p>
              <p className="col fs-5">{addStyleCurrency(totalPriceCart)} VNĐ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
