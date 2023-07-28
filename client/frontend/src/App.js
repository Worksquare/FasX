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
// import Loading from "./components/Loading/Loading";
// import Login from "./components/Login/Login";
// import PasswordReset from "./components/Password reset/PasswordReset";
// import PasswordResetSuccess from "./components/password reset success/PasswordResetSuccess";
// import Verification from "./components/verification/Verification";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contactUs" element={<ContactUs />} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
      </Router>

      {/* <div className="App">
        <header className="App-header">
          <Login />
          <PasswordReset />
          <PasswordResetSuccess />
          <Verification />
          <Loading />
        </header>
      </div> */}
    </ChakraProvider>
  );
  
};

export default App;
