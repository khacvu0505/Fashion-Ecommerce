import React from "react";
import Home from "./page/Home";
import ProductList from "./page/ProductList";
import Product from "./page/Product";
import Register from "./page/Register";
import Login from "./page/Login";
import Cart from "./page/Cart";
import Success from "./page/Success";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/products/:category" element={<ProductList />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            exact
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route exact path="/success" element={<Success />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
