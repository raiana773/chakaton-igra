import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProductContext } from "../context/ProductContext";
import { Container, Grid, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import { useAuthContext } from "../context/AutContext";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import EditIcon from "@mui/icons-material/Edit";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

export default function ProductCard({ item }) {
  //импортировали useNavigate - что бы наши icons работали которые мы взяли из библеотеки mui
  // если просто поставить icons с компонентом и путем что она не отоброжается на экране хотя при наведении
  // выходит клик поэтому импользовали navigate
  const navigate = useNavigate();

  const { deleteProduct } = useProductContext();
  const { addProductToCart, deleteProductFromCart, isAlredyInCart } =
    useCartContext();
  const { isAdmin } = useAuthContext();
  if (!item) {
    return;
  }

  return (
    <Grid item md={3} sm={5} xs={12}>
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "700px",
          maxHeight: "900px",
        }}
      >
        <CardMedia
          onClick={() => navigate(`/details/${item.id}`)}
          type="submit"
          component="img"
          alt="green iguana"
          height="200px"
          image={item.image}
        />
        <CardContent>
          <Typography
            style={{ fontSize: "15px" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {item.title}
          </Typography>
          <Typography
            style={{ fontSize: "10px" }}
            variant="body2"
            color="text.secondary"
          >
            ${item.price}
          </Typography>
        </CardContent>
        <CardActions>
          {isAdmin() ? (
            <>
              <DeleteIcon
                onClick={() => deleteProduct(item.id)}
                color="error"
                size="small"
                type="submit"
              >
                Delete
              </DeleteIcon>
              <EditIcon
                onClick={() => navigate(`/edit/${item.id}`)}
                type="submit"
              >
                Edit
              </EditIcon>
            </>
          ) : null}

          {isAlredyInCart(item.id) ? (
            <IconButton
              onClick={() => deleteProductFromCart(item.id)}
              color="error"
            >
              <RemoveShoppingCartOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => addProductToCart(item)} color="primary">
              <ShoppingCartCheckoutIcon />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
