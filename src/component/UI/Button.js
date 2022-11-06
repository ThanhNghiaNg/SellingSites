import classes from "./Button.module.css";


const Button = (props) => {
  const buttonClasses = `${classes.button} ${props.className}`;
  return (
    <button className={buttonClasses} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
