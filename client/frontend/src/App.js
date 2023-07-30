import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import ContactUs from "./pages/contactUs";
import Login from "./pages/Login/Login";
import UserSignup from "./pages/user signup/UserSignup";



const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contactUs" element={<ContactUs />} />
          <Route exact path="/blog" element={<Blog />} />
        <Route exact path= "/Login" element= { <Login />}/>
        <Route exact path= "/Signup" element= { <UserSignup />}/>

        </Routes>
      </Router>

    </ChakraProvider>
  );
};

export default App;
