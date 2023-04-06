import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import fon from "./image/fon.jpg";
import "./style.css";
import React, { useState } from "react";
import { useProductContext } from "../context/ProductContext";

function AddProductPage() {
  <img src={fon} />;
  const { addProduct } = useProductContext();
  const [formValue, setFormValue] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  function handleChance(e) {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
    console.log(handleChance);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.price.trim() ||
      !formValue.category.trim() ||
      !formValue.description.trim() ||
      !formValue.image.trim()
    ) {
      alert("Пока все поля не заполнишь, не пропущу ✌🏻 !!!");
      return;
    }

    addProduct(formValue);
    setFormValue({
      title: "",
      price: "",
      category: "",
      description: "",
      image: "",
    });
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "70px" }}>
        Гоу Добавим новые Игры
      </h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
          gap: "10px",
        }}
      >
        <TextField
          value={formValue.title}
          onChange={(e) => handleChance(e)}
          style={{ backgroundColor: "grey" }}
          name="title"
          label="TITLE"
          variant="standard"
        />
        <TextField
          value={formValue.description}
          onChange={(e) => handleChance(e)}
          style={{ backgroundColor: "grey" }}
          name="description"
          label="DESCRIPTOIN"
          variant="standard"
        />
        <TextField
          value={formValue.price}
          onChange={(e) => handleChance(e)}
          style={{ backgroundColor: "grey" }}
          name="price"
          label="PRICE"
          variant="standard"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formValue.category}
            label="Category"
            name="category"
            onChange={(e) => handleChance(e)}
            style={{ backgroundColor: "grey" }}
          >
            <MenuItem value={"men's clothing"}>Men</MenuItem>
            <MenuItem value={"women's clothing"}>Women</MenuItem>
            <MenuItem value={"jewelery"}>Jewelery</MenuItem>
            <MenuItem value={"electronics"}>Electronics</MenuItem>
          </Select>
        </FormControl>
        <TextField
          value={formValue.image}
          onChange={(e) => handleChance(e)}
          style={{ backgroundColor: "grey" }}
          name="image"
          label="IMAGE"
          variant="standard"
        />
        <Button type="submit" style={{ backgroundColor: "black" }}>
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddProductPage;
