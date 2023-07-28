<<<<<<< HEAD
import { ChakraProvider } from "@chakra-ui/react";
import {
 
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import ContactUs from "./pages/contactUs";
=======
import "./App.css";
import Loading from "./components/Loading/Loading";
import Login from "./components/Login/Login";
import PasswordReset from "./components/Password reset/PasswordReset";
import PasswordResetSuccess from "./components/password reset success/PasswordResetSuccess";

// import UserSignup from "./components/user signup/UserSignup";
import Verification from "./components/verification/Verification";
>>>>>>> 18285082c93760dacdadf855459204e90724ede4


const App = () => {
  return (
<<<<<<< HEAD
    <ChakraProvider>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contactUs" element={<ContactUs />} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
      </Router> */}
      <About/>
    </ChakraProvider>
=======
    <div className="App">
      <header className="App-header">
        <Login />
        <PasswordReset />
        <PasswordResetSuccess />
      </header>
    </div>
>>>>>>> 18285082c93760dacdadf855459204e90724ede4
  );
};

export default App;
