import React from "react";
import "./Verification.css";

const Verification = () => {
  return (
    <section className="verification">
      <form>
        <h1 className="verification_header"> Verification</h1>
        <p className="verification_welcome">
          Please enter the four digits sent to your phone number
        </p>
        <div className="otp">      
          <input type="password" />
          <input type="password" />   
          <input type="password" />
          <input type="password" />
        </div>
        <span>
          Didn't receive any code? <strong>Resend</strong>    
        </span>

        <button className="verification_btn">Verify</button>    
      </form>
    </section>    
  );
};

export default Verification;
