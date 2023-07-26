import React from "react";
import Success from "../../images/success.png";
// import mark1 from "../../images/mark1.png";
import "./PasswordResetSuccess.css";

const PasswordResetSuccess = () => {
  return (
    <section className="password_reset_success">
      <div className="password_reset_success_container">
        <img src={Success} alt="sucess pic" className="image_main" />
        {/* <div className="password_reset_success_image">
          <img src={Success} alt="sucess pic" className="image_main" />
          <img src={mark1} alt="sucess pic" className="image_mark" />
        </div> */}

        <span>Password reset link sent to your email</span>
        <button className="password_reset_success_btn">Send</button>
      </div>
    </section>
  );
};

export default PasswordResetSuccess;
