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

function ProductList() {
  const { products, getProducts, pageTotalCount } = useProductContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(
    searchParams.get("title_like") || ""
  );
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [page, setPage] = useState(+searchParams.get("_page"));
  const [firstMount, setFirstMount] = useState(true);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }
    if (category === "all") {
      setSearchParams({
        really_like: inputValue,
        _limit: LIMIT,
        _page: 1,
      });
    } else {
      setSearchParams({
        title_like: inputValue,
        category: category,
        _limit: LIMIT,
        _page: 1,
      });
    }
    setPage(1);
  }, [inputValue, category]);

  useEffect(() => {
    if (category === "all") {
      setSearchParams({
        title_like: inputValue,
        _limit: LIMIT,
        _page: page,
      });
    } else {
      setSearchParams({
        title_like: inputValue,
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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "50px",
      }}
    >
      <Box style={{ display: "flex" }}>
        <TextField
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          label="Search..."
          className="search"
          variant="standard"
          style={{ width: "760px", marginLeft: "400px" }}
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
            style={{ width: "200px" }}
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
      {/* <Box sx={{ maxWidth: "max-content", margin: "20px auto" }}> */}
      <Pagination
        onChange={(e, p) => setPage(p)}
        page={page}
        color="primary"
        count={pageTotalCount}
      />
      {/* </Box> */}
    </div>
  );
}

export default ProductList;
