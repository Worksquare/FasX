import React from "react";
import { useAuthContext } from "./hooks/useAuthContext";
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

import "./App.css";

import OrderPickup from "./components/layout/OrderPickup";
import Sidebar from "./components/molecules/Sidebar";
import Footer from "./components/molecules/Footer";

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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        
          <Route path="/blog" element={<Blog />} />
         

          <Route
            path="/Orderpickup"
            element={!user ? <OrderPickup /> : <Navigate to="/dashboard" />}
          />

          <Route
            path="/Login"
            element={!user ? <Login /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/Signup"
            element={!user ? <UserSignup /> : <Navigate to="/dashboard" />}
          />

          <Route
            path="/dashboard"
            element={user ? <Sidebar /> : <Navigate to="/Login" />}
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
