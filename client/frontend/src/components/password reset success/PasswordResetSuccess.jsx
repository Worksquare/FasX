import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PasswordResetSuccess.css";
const PasswordResetSuccess = ({
  Icon,    
  message,
  button,
  isSendVerification,
}) => {
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleButtonClick = async (
    firstName,
    surName,
    phoneNumber,
    address,
    city,
    email,
    password
  ) => {
    if (isSendVerification) {
      try {
        const response = await fetch(
          "https://fastx-logistic-api.onrender.com/v1/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName,
              surName,
              phoneNumber,
              address,
              city,
              email,
              password,
            }),
          }
        );

        if (response.ok) {
          // Verification code sent successfully
          console.log("Verification code sent successfully");
          // Handle the response here if needed
        } else {
          // Verification code sending failed
          console.error("Failed to send verification code");
        }
      } catch (error) {
        // Error occurred during the API call
        console.error("Error occurred during API call:", error);
      }
    } else {
      // Navigate to the login page
      navigate("/Login");
    }
    setIsButtonDisabled(true);
  };
  return (
    <section className="password_reset_success">
      <div className="password_reset_success_container">
        <div className="success_icon">
          {/* <IoIosCheckmarkCircle className="image_main" /> */}
          <span> {Icon}</span>
        </div>
    
        <span>{message}</span>
        <button
          onClick={handleButtonClick}
          className="password_reset_success_btn"
        >
          {isButtonDisabled ? "Button Disabled" : button}  
        </button>
      </div>
    </section>
  );
};

export default PasswordResetSuccess;