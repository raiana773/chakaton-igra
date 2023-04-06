import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddProductPage from "../pages/AddProductPage";
import ProductCard from "../components/ProductCard";
import EditProductPage from "../pages/EditProductPage";
import HommePage from "../pages/HommePage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HommePage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/card" element={<ProductCard />} />
        <Route path="/edit" element={<EditProductPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
