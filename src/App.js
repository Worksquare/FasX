import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import ContactUs from "./pages/contactUs";
import Login from "./pages/Login/Login";
import UserSignup from "./pages/user signup/UserSignup";
import OrderPickUp from './pages/OrderPickUp/OrderPickUp'

import "./App.css";




function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <OrderPickUp/>
        <header className="App-header">
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
      </header>
      </div>
    </ChakraProvider>

  );
}

export default App;
