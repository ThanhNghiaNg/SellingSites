import classes from "./Footer.module.css";
import Container from "../UI/Container";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <Container className={classes.footer}>
      <div className={classes["grid-col"]}>
        <p>customer sevices</p>
        <Link to="#">help & contact us</Link>
        <Link to="#">returns & refunds</Link>
        <Link to="#">online stores</Link>
        <Link to="#">terms & conditions</Link>
      </div>
      <div className={classes["grid-col"]}>
        <p>company</p>
        <Link to="#">what we do</Link>
        <Link to="#">available services</Link>
        <Link to="#">latest posts</Link>
        <Link to="#">FAQs</Link>
      </div>
      <div className={classes["grid-col"]}>
        <p>customer sevices</p>
        <Link to="#">twitter</Link>
        <Link to="#">instagram</Link>
        <Link to="#">facebook</Link>
        <Link to="#">pinterest</Link>
      </div>
    </Container>
  );
};

export default Footer;
