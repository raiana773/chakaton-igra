import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProductContext } from "../context/ProductContext";
import { Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import { useAuthContext } from "../context/AutContext";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProductContext();
  const { addProductToCart, deleteProductFromCart, isAlredyInCart } =
    useCartContext();
  const { isAdmin } = useAuthContext();
  if (!item) {
    return;
  }
  return (
    <Grid item md={4} sm={5} xs={12}>
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "200px",
          maxHeight: "300px",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
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
              <Button
                onClick={() => deleteProduct(item.id)}
                color="error"
                size="small"
              >
                Delete
              </Button>
              <Button
                component={Link}
                to={`/edit/${item.id}`}
                color="warning"
                size="small"
              >
                Edit
              </Button>
            </>
          ) : null}

          <Button component={Link} to={`/details/${item.id}`} size="small">
            Learn more
          </Button>
          {isAlredyInCart(item.id) ? (
            <IconButton
              onClick={() => deleteProductFromCart(item.id)}
              color="error"
            >
              <RemoveShoppingCartOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => addProductToCart(item)} color="primary">
              <AddShoppingCartIcon />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
