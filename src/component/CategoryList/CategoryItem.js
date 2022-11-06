import classes from "./CategoryItem.module.css";
import { useNavigate } from "react-router-dom";

// CategoryItem Component - get props as imgPath from CategoryList, render image and handle click event onit
const CategoryItem = (props) => {
  const navigate = useNavigate();

  // Go to Shop Page when clicked
  const clickedCategoryHandler = () => {
    navigate("/shop");
  };
  return (
    <div className={classes.item} onClick={clickedCategoryHandler}>
      <img src={props.imgPath} alt='item'></img>
    </div>
  );
};

export default CategoryItem;
