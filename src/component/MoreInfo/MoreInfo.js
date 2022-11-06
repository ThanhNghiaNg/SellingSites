import { Container } from "react-bootstrap";
import Button from "../UI/Button";
import classes from "./MoreInfo.module.css";

// MoreInfo Component - dislpay other information
const MoreInfo = (props) => {
  
  // prevent reload page when click on button in form
  const subribeHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Container className={classes["more-info"]}>
      <div className="row text-center bg-light-gray pt-4 pb-4 mb-4">
        <div className="col">
          <label className="text-uppercase fs-4">free shipping</label>
          <p className="light-gray">Free shipping worldwide</p>
        </div>
        <div className="col">
          <label className="text-uppercase fs-4">24 x 7 service</label>
          <p className="light-gray">Free shipping worldwide</p>
        </div>
        <div className="col">
          <label className="text-uppercase fs-4">festival offer</label>
          <p className="light-gray">Free shipping worldwide</p>
        </div>
      </div>
      <div className="row gx-0">
        <div className="col no-padding">
          <label className="text-uppercase fs-4">let's be friend!</label>
          <p className="light-gray">Nisi nisi tempor consequat laboris nisi</p>
        </div>
        <div className="col text-end no-padding">
          <form className={classes.contact}>
            <input type="email" placeholder="Enter your email address"></input>
            <Button onClick={subribeHandler}>Subcribe</Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default MoreInfo;
