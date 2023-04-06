import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useProductContext } from "../context/ProductContext";

function ProductList() {
  const { products, getProducts } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "50px",
        // fontSize: "10px",
      }}
    >
      {products.map((item) => {
        console.log(products);
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ProductList;
