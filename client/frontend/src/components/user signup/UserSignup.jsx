import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
//styles
import "./UserSignup.css";
// assets
import Facebook from "../../images/facebook.png";
import Google from "../../images/google.png";

const UserSignup = () => {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(number, password);
  };
  return (
    <section className="user_signup">
      <form onSubmit={handleSubmit}>
        <h1 className="signup_header">Register</h1>
        <p className="signup_welcome">Welcome, Please enter your details</p>
        <div className="signup_images">
          <span>Continue with</span>
          <img src={Facebook} alt="login with facebook" />
          <img src={Google} alt="login with google" />
        </div>

        <div className="first_last">
          <input
            type="text"
            placeholder="first name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />

          <input
            type="text"
            placeholder="last name"
            onChange={(e) => setLasttName(e.target.value)}
            value={lastName}
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="first_last">
          <input
            type="text"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
          <input
            type="text"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <input
          placeholder="Phone number"
          type="text"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />

        <button className="signup_btn" disabled={isLoading}>
          Continue
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </section>
  );
};

export default UserSignup;
