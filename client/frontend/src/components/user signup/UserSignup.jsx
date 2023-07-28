import React from "react";
//styles
import "./UserSignup.css";
// assets
import Facebook from "../../images/facebook.png";
import Google from "../../images/google.png";

const UserSignup = () => {
  return (
    <section className="user_signup">
      <form>
        <h1 className="signup_header">Register</h1>
        <p className="signup_welcome">Welcome, Please enter your details</p>
        <div className="signup_images">
          <span>Continue with</span>
          <img src={Facebook} alt="login with facebook" />
          <img src={Google} alt="login with google" />
        </div>

        <div className="first_last">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
        </div>
        <input type="text" placeholder="Email" />
        <div className="first_last">
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="City" />
        </div>
        <input type="text" placeholder="Phone number" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />

        <button className="signup_btn">Continue</button>
      </form>
    </section>
  );
};

export default UserSignup;
