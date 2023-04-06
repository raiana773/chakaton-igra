import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddProductPage from "../pages/AddProductPage";
import EditProductPage from "../pages/EditProductPage";
import HommePage from "../pages/HommePage";
import ListProductPage from "../pages/ListProductPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HommePage />} />
        <Route path="/list" element={<ListProductPage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
