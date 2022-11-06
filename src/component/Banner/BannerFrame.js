import classes from "./BannerFrame.module.css";

// BannerFrame component - Show simple banner with name of Page as props
const BannerFrame = (props) => {
  return (
    <div className={classes["banner-frame"]}>
      <div className="fs-1">{props.pageName}</div>
      <div className={classes.sub}>
        <span className="fs-5">{props.sub}</span>
        <span className="light-gray fs-5">{props.pageName}</span>
      </div>
    </div>
  );
};

export default BannerFrame;
