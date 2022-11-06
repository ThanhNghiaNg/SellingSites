import classesBanner from "../component/Banner/Banner.module.css";
import UserForm from "../component/UserForm/UserForm";
const RegisterPage = (props) => {
  return (
    <div>
      <div className={classesBanner.banner}>
        <img src={"./images/banner1.jpg"}></img>
        <img src={"./images/banner1.jpg"}></img>
        <UserForm isLogining={false}/>
      </div>
    </div>
  );
};

export default RegisterPage;
