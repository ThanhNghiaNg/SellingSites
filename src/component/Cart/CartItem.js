import classes from "./CartItem.module.css";
import detailClasses from "../DetailProduct/DetailProduct.module.css";
import { addStyleCurrency } from "../ProductList/ProductItem";
import { cartActions } from "../../store/cart";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartItem = (props) => {
  console.log(props.record);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const product = props.record.product;

  const [amount, setAmount] = useState(props.record.amount); // state for handling quantity of product

  // Increase quantity of product in cart, and save it to store, as well as local storage
  const increaseAmountHandler = () => {
    dispatch(
      cartActions.updateCart({
        user: (currentUser && currentUser.email) || "unknown",
        product: product,
        amount: amount + 1,
      })
    );
    setAmount((amount) => amount + 1);
  };

  // Descrease quantity of product in cart, and save it to store, as well as local storage
  const descreaseAmountHandler = () => {
    const displayAmount = amount - 1 > 0 ? amount - 1 : 1;
    dispatch(
      cartActions.updateCart({
        user: (currentUser && currentUser.email) || "unknown",
        product: product,
        amount: displayAmount,
      })
    );
    setAmount((amount) => displayAmount);
  };

  // Delete product in cart, and save it to store, as well as local storage
  const deleteItemHandler = () => {
    dispatch(
      cartActions.deleteCart({
        user: (currentUser && currentUser.email) || "unknown",
        product: product,
      })
    );
  };

  const totalPrice = product.price * props.record.amount; // total price of this product
  
  return (
    <div className={`row ${classes.item}`}>
      <div className="col-1">
        <img src={product.img1}></img>
      </div>
      <div className="col-3 fw-bold">{product.name}</div>
      <div className="col light-gray">
        {addStyleCurrency(product.price)} VNĐ
      </div>
      <div className="col">
        <div
          className={`${detailClasses["add-form"]} ${classes["auto-margin"]} border-0 p-0`}
        >
          <button
            className={detailClasses["no-style"]}
            onClick={descreaseAmountHandler}
          >
            <i className="fa fa-caret-left"></i>
          </button>
          <input type="number" value={amount} min={1}></input>
          <button
            className={detailClasses["no-style"]}
            onClick={increaseAmountHandler}
          >
            <i className="fa fa-caret-right"></i>
          </button>
        </div>
      </div>
      <div className="col-1 light-gray">
        {addStyleCurrency(`${totalPrice}`)} VNĐ
      </div>
      <div className="col">
        <button
          className={`border-0 ${classes["auto-margin"]}`}
          onClick={deleteItemHandler}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
