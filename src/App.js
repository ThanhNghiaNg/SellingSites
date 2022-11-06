import React from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DetailPage from "./Pages/DetailPage";
import ShopPage from "./Pages/ShopPage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Layout from "./component/Layout/Layout";
import { useSelector } from "react-redux";
function App() {
  const currentUser = useSelector((state) => state.users.currentUser);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />

            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
