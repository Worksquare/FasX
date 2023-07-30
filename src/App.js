import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import ContactUs from "./pages/contactUs";
import Login from "./pages/Login/Login";
import UserSignup from "./pages/user signup/UserSignup";

import "./App.css";
<<<<<<< HEAD
// import Loading from "./components/Loading/Loading";
import Login from "./components/Login/Login";
import PasswordReset from "./components/Password reset/PasswordReset";
import PopUp2 from "./components/PopUp2/PopUp2.jsx";


import PasswordResetSuccess from "./components/password reset success/PasswordResetSuccess";

// import UserSignup from "./components/user signup/UserSignup";
// import Verification from "./components/verification/Verification";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <PasswordReset />
        <PasswordResetSuccess />
        <PopUp2/>
        
      </header>
    </div>
=======

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<UserSignup />} />
        </Routes>
      </Router>
    </ChakraProvider>
>>>>>>> f26dd2684bbbbee08b6efb0c09e0da0f8ea1adad
  );
}

export default App;
