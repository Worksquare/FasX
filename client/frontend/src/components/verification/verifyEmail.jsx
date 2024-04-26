import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const VerifyEmail = () => {
  const handleButtonClick = async () => {
      
  };

  return (
    <section className="password_reset_success">
      <div className="password_reset_success_container">    
        <div className="success_icon">
          <IoIosCheckmarkCircle className="image_main" />
        </div>

        <span>Your Details have been Submitted Successfully</span>
        <button
          onClick={handleButtonClick}
          className="password_reset_success_btn"
        >
          Verify your Email
        </button>
      </div>
    </section>
  );
};

export default VerifyEmail;
