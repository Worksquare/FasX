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
import Loading from "./components/Loading/Loading";
import Login from "./components/Login/Login";
import PasswordReset from "./components/Password reset/PasswordReset";
import RiderSignUp2 from "./components/RiderSignUp2/RiderSignUp2";


import UserSignup from "./components/user signup/UserSignup";
import Verification from "./components/verification/Verification";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <PasswordReset />
        <PasswordResetSuccess />
        <RiderSignUp2/>
        
      </header>
      </div>
    </ChakraProvider>

  );
}

export default App;
