import React from "react";

import { IoIosCheckmarkCircle } from "react-icons/io";

import "./PasswordResetSuccess.css";

const PasswordResetSuccess = () => {
  return (
    <section className="password_reset_success">
      <div className="password_reset_success_container">
        <div className="success_icon">
          <IoIosCheckmarkCircle className="image_main" />
        </div>

        <span>Password reset link sent to your email</span>
        <button className="password_reset_success_btn">Send</button>
      </div>
    </section>
  );
};

export default PasswordResetSuccess;
