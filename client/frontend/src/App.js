import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import ContactUs from "./pages/contactUs";
import Login from "./pages/Login/Login";
import UserSignup from "./pages/user signup/UserSignup";
// import OrderPickUp from "./pages/OrderPickUp/OrderPickUp";

import "./App.css";

// import DashboardLayout from "./components/layout/DashboardLayout";
import OrderPickup from "./components/layout/OrderPickup";
import VerificationSuccess from "./components/verification/verificationSuccess";
import VerificationError from "./components/verification/verificationError";
import { useAuthContext } from "./hooks/useAuthContext";
// import Sidebar from "./components/molecules/Sidebar";
import Dashboard from "./components/layout/Dashboard";

const breakpoints = {
  sm: "320px",
  md: "500px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1400px",
};
const theme = extendTheme({ breakpoints });

function App() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <ChakraProvider theme={theme}>
      {/* <div className="App"> */}
      {/* <OrderPickUp /> */}

      {/* <header className="App-header"> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/Login"
            element={!user ? <Login /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/Signup"
            element={!user ? <UserSignup /> : <Navigate to="/dashboard" />}
          />

          <Route path="/Orderpickup" element={<OrderPickup />} />
          <Route path="/verify_email" element={<VerificationSuccess />} />
          <Route path="/verification_email" element={<VerificationError />} />

          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/Login" />}
          />
        </Routes>
      </Router>
      {/* </header> */}
      {/* // </div> */}
    </ChakraProvider>
  );
}

export default App;
