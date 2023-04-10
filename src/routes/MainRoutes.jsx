import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddProductPage from "../pages/AddProductPage";
import EditProductPage from "../pages/EditProductPage";
import HommePage from "../pages/HommePage";
import ListProductPage from "../pages/ListProductPage";
import DetailsProductPage from "../pages/DetailsProductPage";
import CartPage from "../pages/CartPage";
import AuthPage from "../pages/AuthPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HommePage />} />
        <Route path="/list" element={<ListProductPage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
        <Route path="/details/:id" element={<DetailsProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default MainRoutes;
