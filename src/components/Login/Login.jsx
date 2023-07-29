import React from "react";
//styles
import "./Login.css";
// assets
import Facebook from "../../images/facebook.png";
import Google from "../../images/google.png";

const Login = () => {
  return (
    <section className="login">
      <form>
        <h1 className="login_header">Login to your account</h1>
        <p className="login_welcome">Welcome back! Please enter your details</p>
        <div className="login_inputs">
          <input type="text" placeholder="Phnone Number" />
          <input type="password" placeholder="Password" />
        </div>
        <span className="forgot_password">Forgot password?</span>
        <button className="login_btn">LOGIN</button>
        <div className="login_remember">
          <input type="checkbox" className="login_checkbox" />
          <span className="remember_me">Remember me</span>
        </div>
        <div className="login_icons">
          <h1 className="continue_with">Continue with</h1>
          <div className="login_images">
            <img src={Facebook} alt="login with facebook" />
            <img src={Google} alt="login with google" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
