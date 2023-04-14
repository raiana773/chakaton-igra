import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useProductContext } from "../context/ProductContext";
import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../utils/consts";
import "./components.css";
import fon from "./image/fon.jpg";

function ProductList() {
  <img src={fon} />;
  const { products, getProducts, pageTotalCount } = useProductContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputVal, setInputVal] = useState(
    searchParams.get("title_like") || ""
  );
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [page, setPage] = useState(+searchParams.get("_page") || 1);
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  const [firstMount, setFirstMount] = useState(true);

  useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }
    if (category === "all") {
      setSearchParams({
        title_like: inputVal,
        _limit: LIMIT,
        _page: 1,
      });
    } else {
      setSearchParams({
        title_like: inputVal,
        category: category,
        _limit: LIMIT,
        _page: 1,
      });
    }
    setPage(1);
  }, [inputVal, category]);

  useEffect(() => {
    if (category === "all") {
      setSearchParams({
        title_like: inputVal,
        _limit: LIMIT,
        _page: page,
      });
    } else {
      setSearchParams({
        title_like: inputVal,
        category: category,
        _limit: LIMIT,
        _page: page,
      });
    }
  }, [page]);

  useEffect(() => {
    if (pageTotalCount < page) {
      setPage(pageTotalCount);
    }
  }, [pageTotalCount]);
  console.log(pageTotalCount);

  return (
    <div
      className="list"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "80px",
        backgroundColor: "linear-gradient(  grey, blue, grey)",
      }}
    >
      <Box
        style={{
          display: "flex",
          marginTop: "10%",
          marginRight: "20px",
        }}
      >
        <TextField
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
          label="Search..."
          className="search"
          variant="standard"
          style={{ width: "650%", marginRight: "15px" }}
        />
        <FormControl fullWidth>
          <InputLabel className="search" id="demo-simple-select-label">
            Categoty
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="search"
            value={category}
            label="Categoty"
            style={{ width: "450%" }}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"action adventure"}>Action adventure</MenuItem>
            <MenuItem value={"race"}>Race</MenuItem>
            <MenuItem value={"action"}>Action</MenuItem>
            <MenuItem value={"shooting games"}>Shooting Games</MenuItem>
            <MenuItem value={"zombie"}>Zombie</MenuItem>
            <MenuItem value={"battle royale"}>Battle Royale</MenuItem>
            <MenuItem value={"casual"}>Casual</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* spacing- расстояние между карточками снизу и с верху */}
      <Grid container spacing={2}>
        {products.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </Grid>

      <Box sx={{ maxWidth: "max-content", margin: "20px auto" }}>
        <Pagination
          onChange={(e, p) => setPage(p)}
          page={page}
          color="primary"
          count={pageTotalCount}
        />
      </Box>
    </div>
  );
}

export default ProductList;
