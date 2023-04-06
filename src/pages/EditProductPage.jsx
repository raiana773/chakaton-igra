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
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          value={formValue.title}
          style={{ backgroundColor: "grey" }}
          name="title"
          // id="standard-basic"
          label="TITLE"
          variant="standard"
        />
        <TextField
          value={formValue.description}
          style={{ backgroundColor: "grey" }}
          name="description"
          // id="standard-basic"
          label="DESCRIPTOIN"
          variant="standard"
        />
        <TextField
          value={formValue.price}
          style={{ backgroundColor: "grey" }}
          name="price"
          // id="standard-basic"
          label="PRICE"
          variant="standard"
        />

        <TextField
          value={formValue.image}
          // onChange={(e) => handleChance(e)}
          style={{ backgroundColor: "grey" }}
          name="image"
          // id="standard-basic"
          label="IMAGE"
          variant="standard"
        />
        <Button style={{ backgroundColor: "black" }}>Add</Button>
      </form>
    </div>
  );
}

export default EditProductPage;
