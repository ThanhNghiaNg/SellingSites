import classes from "./Header.module.css";
import Container from "../UI/Container";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/users";

const Header = (props) => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(userActions.logout());
    navigate("/login", { replace: true });
  };
  return (
    <Container className={classes.header}>
      <div className={classes.group}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : " ")}
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : " ")}
          to="/shop"
        >
          Shop
        </NavLink>
      </div>
      <div className={classes.group}>BOUTIQUE</div>
      <div className={classes.group}>
        <div className={classes["nav-icon"]}>
          <span className={classes["icon-header"]}>
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : " ")}
            to="/cart"
            end
          >
            Cart
          </NavLink>
        </div>
        <div className={classes["nav-icon"]}>
          <span className={classes["icon-header"]}>
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
          {!currentUser && (
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : " ")}
              to="/login"
              end
            >
              Login
            </NavLink>
          )}
          {currentUser && (
            <a href="">
              <span>{currentUser.name + " "}</span>
              <i className="fa fa-caret-down"></i>
            </a>
          )}
        </div>
        {currentUser && (
          <a className={classes.logout} onClick={logoutHandler}>
            (Logout)
          </a>
        )}
      </div>
    </Container>
  );
};

export default Header;
