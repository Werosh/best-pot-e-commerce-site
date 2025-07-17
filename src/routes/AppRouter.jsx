import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/layout/Navbar";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AddProduct from "../pages/admin/AddProduct";
import EditProduct from "../pages/admin/EditProduct";
import Footer from "../components/layout/Footer";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add" element={<AddProduct />} />
        <Route path="/admin/edit/:id" element={<EditProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}
