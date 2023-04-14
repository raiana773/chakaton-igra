import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import games from "./image/games.jpg";
import "./style.css";
import React, { useState } from "react";
import { useProductContext } from "../context/ProductContext";

function AddProductPage() {
  <img src={games} />;
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
    <Box>
      <div className="img">
        <h1
          style={{
            textAlign: "center",
            // display: "flex",
            // alignContent: "center",
          }}
        >
          <br />
          Go Add New Games
        </h1>
        <br />
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <TextField
            value={formValue.title}
            onChange={(e) => handleChance(e)}
            className="textfild"
            name="title"
            label="TITLE"
            variant="standard"
          />
          <TextField
            value={formValue.description}
            onChange={(e) => handleChance(e)}
            className="textfild"
            name="description"
            label="DESCRIPTOIN"
            variant="standard"
          />
          <TextField
            value={formValue.price}
            onChange={(e) => handleChance(e)}
            className="textfild"
            name="price"
            label="PRICE"
            variant="standard"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">CATEGORY</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={formValue.category}
              className="textfild"
              label="Category"
              name="category"
              onChange={(e) => handleChance(e)}
            >
              <MenuItem value={"action adventure"}>Action adventure</MenuItem>
              <MenuItem value={"race"}>Race</MenuItem>
              <MenuItem value={"action"}>Action</MenuItem>
              <MenuItem value={"shooting games"}>Shooting Games</MenuItem>
              <MenuItem value={"zombie"}>Zombie</MenuItem>
              <MenuItem value={"battle royale"}>Battle Royale</MenuItem>
              <MenuItem value={"casual"}>Casual</MenuItem>
            </Select>
          </FormControl>
          <TextField
            value={formValue.image}
            onChange={(e) => handleChance(e)}
            className="textfild"
            name="image"
            label="IMAGE"
            variant="standard"
          />
          <Button
            type="submit"
            className="button"
            style={{ marginBottom: "28px" }}
          >
            Add
          </Button>
        </form>
      </div>
    </Box>
  );
}

export default AddProductPage;
