import React from "react";
import "./PasswordReset.css";

const PasswordReset = () => {
  return (
    <section className="password_reset">
      <form>
        <h1 className="password_reset_header">Recover Password</h1>
        <p className="password_reset_welcome">
          Please enter your email. You will recieve a link to create new
          password via mail
        </p>
        <input type="password" placeholder="Recover password" />
        <button className="password_reset_btn">Send</button>
      </form>
    </section>
  );
};

export default PasswordReset;
