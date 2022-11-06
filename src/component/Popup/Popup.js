import classes from "./Popup.module.css";
import { createPortal } from "react-dom";
import { addStyleCurrency } from "../ProductList/ProductItem";
import { popupActions } from "../../store/popup";
import Button from "../UI/Button";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Backdrop Component - to prevent event click on other component
const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

// Overlay Component - in front of Backdrop, to show Detail about the displayed product
const Overlay = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Go to detail page of the products determine by id
  const viewDetailHandler = () => {
    const id = props.product._id.$oid;
    closePopupHandler();
    navigate(`/detail/${id}`);
  };

  // Close popup when user click on 'Close' Button
  const closePopupHandler = () => {
    dispatch(popupActions.hidePopup()); // change state to close pop up from store
    dispatch(popupActions.removeID()); // remove current display product id from store
  };
  
  return (
    <div className={classes.overlay}>
      <div className="row p-4">
        <div className="col">
          <img
            src={props.product.img1}
            className={classes["product-img"]}
          ></img>
        </div>
        <div className="col">
          <button
            className={`btn-close ${classes["top-right"]}`}
            onClick={closePopupHandler}
          ></button>
          <label className="fs-3 dark-gray">{props.product.name}</label>
          <p className="light-gray">
            {addStyleCurrency(props.product.price)} VNĐ
          </p>
          <p className="light-gray">{props.product.short_desc}</p>
          <Button className={classes["btn-detail"]} onClick={viewDetailHandler}>
            View Detail
          </Button>
        </div>
      </div>
    </div>
  );
};

const Popup = (props) => {
  return (
    <React.Fragment>
      {createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {createPortal(
        <Overlay product={props.product} />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Popup;
