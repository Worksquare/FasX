import React from "react";
import Success from "../../images/success.png";
// import mark1 from "../../images/mark1.png";
// import "./PasswordResetSuccess.css";

const VerificationSuccess = () => {
  return (
    <section className="verification_success">
      <div className="verification_success_container">
        <img src={Success} alt="sucess pic" className="image_main" />

        <span>Password reset link sent to your email</span>
        <button className="verification_success_btn">Send</button>
      </div>
    </section>
  );
};

export default VerificationSuccess;
