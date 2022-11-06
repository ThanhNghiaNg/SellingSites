import classes from "./CategoryList.module.css";
import CategoryItem from "./CategoryItem";

// CategoryList Component - for render catergory image
const CategoryList = (props) => {

  return (
    <div className={classes["category-list"]}>
      <div className={classes.header}>
        <h5>carefully created collections</h5>
        <h3>browse our categories</h3>
      </div>
      <div className="d-grid gap-4 pt-4 pb-4">
        <div className="row">
          <div className="col">
            <CategoryItem imgPath={"./images/product_1.png"}></CategoryItem>
          </div>
          <div className="col">
            <CategoryItem imgPath={"./images/product_2.png"}></CategoryItem>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CategoryItem imgPath={"./images/product_3.png"}></CategoryItem>
          </div>
          <div className="col">
            <CategoryItem imgPath={"./images/product_4.png"}></CategoryItem>
          </div>
          <div className="col">
            <CategoryItem imgPath={"./images/product_5.png"}></CategoryItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
