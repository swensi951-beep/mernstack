import React from "react";
import { Routes, Route } from "react-router-dom";



import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Review from "./pages/Review";
import Auth from "./pages/Auth";




import AdminDashboard from './pages/admin/AdminDashboard';
import AddProduct from "./pages/admin/AddProduct";
import ProductList from "./pages/admin/ProductList";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import MyOrders from "./pages/MyOrders";
import AdminOrders from "./pages/admin/AdminOrders";



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
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/my-orders" element={<MyOrders />} />



      

        


    

        <Route path="/admin/*" element={<AdminDashboard/>} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/admin-orders" element={<AdminOrders/>} />





      </Routes>
    </>
  );
}

export default App;