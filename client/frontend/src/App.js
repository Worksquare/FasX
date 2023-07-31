import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import ContactUs from "./pages/contactUs";
import Login from "./pages/Login/Login";
import UserSignup from "./pages/user signup/UserSignup";
import RiderList from "./components/riders list/RiderList";

import "./App.css";
// import OrderPickup from "./components/layout/OrderPickup";

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
          <Route path="/orderpickup" element={<RiderList />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
