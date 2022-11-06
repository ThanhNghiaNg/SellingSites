import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./Banner.module.css";

// Banner Component - for render Banner and some detail
const Banner = (props) => {
  const navigate = useNavigate();

  //Go to shop page when user click on button 'Browse collections'
  const BrowseHandler = (event) => {
    navigate("/shop");
  };
  
  return (
    <div className={classes.banner}>
      <img src={"./images/banner1.jpg"}></img>
      <div className={classes.description}>
        <h4>new inspiration 2020</h4>
        <h1>20% off on new season</h1>
        <Button onClick={BrowseHandler}>Browse collections</Button>
      </div>
    </div>
  );
};

export default Banner;
