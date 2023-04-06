import { Button, TextField } from "@mui/material";
import React from "react";
import fon from "./image/fon.jpg";

function AddProductPage() {
  <img src={fon} />;
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <h1>Add Product</h1>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Button>button</Button>
    </div>
  );
}

export default AddProductPage;
