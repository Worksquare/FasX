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

//context
import { useAuthContext } from "./hooks/useAuthContext";

//pages
import DashboardLayout from "./components/layout/DashboardLayout";

import "./App.css";
// import Navbar from "./components/layout/navbar";
// import OrderPickup from "./components/layout/OrderPickup";

function App() {
  const { user } = useAuthContext();
  return (
    <ChakraProvider>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<UserSignup />} />
          <Route path="/orderpickup" element={<RiderList />} />
          <Route
            path="/dashboard"
            element={user ? <DashboardLayout /> : <Login />}
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
