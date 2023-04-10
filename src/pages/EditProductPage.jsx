import React, { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductContext";
import { Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

function EditProductPage() {
  const { oneProduct, getOneProduct, editProduct } = useProductContext();

  const { id } = useParams();
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setFormValue(oneProduct);
    }
  }, [oneProduct]);

  function handleChance(e) {
    const obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.price.toString().trim() ||
      !formValue.category.trim() ||
      !formValue.image.trim()
    ) {
      alert("Заполните все поля");
      return;
    }

    editProduct(id, formValue);

    setFormValue({
      title: "",
      description: "",
      price: "",
      category: "",
      image: "",
    });
    navigate(-1);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Edit Product</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "100px",
        }}
      >
        <TextField
          value={formValue.title}
          onChange={(e) => handleChance(e)}
          className="textfild"
          name="title"
          // id="standard-basic"
          label="Title"
          variant="standard"
        />
        <TextField
          value={formValue.description}
          onChange={(e) => handleChance(e)}
          className="textfild"
          name="description"
          // id="standard-basic"
          label="Description"
          variant="standard"
        />
        <TextField
          value={formValue.price}
          onChange={(e) => handleChance(e)}
          className="textfild"
          name="price"
          // id="standard-basic"
          label="Price"
          variant="standard"
        />
        <TextField
          value={formValue.category}
          onChange={(e) => handleChance(e)}
          className="textfild"
          name="category"
          label="Category"
          variant="standard"
        />

        <TextField
          value={formValue.image}
          onChange={(e) => handleChance(e)}
          className="textfild"
          name="image"
          // id="standard-basic"
          label="Image"
          variant="standard"
        />
        <Button
          variant="contained"
          type="submit"
          style={{ backgroundColor: "grey" }}
        >
          Save
        </Button>
      </form>
    </div>
  );
}

export default EditProductPage;
