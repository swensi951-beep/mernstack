import React from "react";
import { Routes, Route } from "react-router-dom";



import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Review from "./pages/Review";
import Login from "./pages/Login";


import AdminDashboard from './pages/admin/AdminDashboard';
import DeliveryLogin from "./pages/DeliveryLogin";
import DeliveryDashboard from "./pages/DeliveryDashboard";

function App() {
  return (
    <>

      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/deliverylogin" element={<DeliveryLogin />} />
        <Route  path="/DeliveryDashboard" element={<DeliveryDashboard/>} />

        <Route path="/admin" element={<AdminDashboard/>} />

      </Routes>
    </>
  );
}

export default App;