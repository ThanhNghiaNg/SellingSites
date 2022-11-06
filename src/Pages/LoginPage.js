import classesBanner from "../component/Banner/Banner.module.css";
import UserForm from "../component/UserForm/UserForm";
const LoginPage = (props) => {
  return (
    <div className={classesBanner.banner}>
      <img src={"./images/banner1.jpg"}></img>
      <UserForm isLogining={true}/>
    </div>
  );
};

export default LoginPage;
