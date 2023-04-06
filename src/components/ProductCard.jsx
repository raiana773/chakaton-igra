import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProductContext } from "../context/ProductContext";
import { Grid } from "@mui/material";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProductContext();
  if (!item) {
    return;
  }
  return (
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
        <Button onClick={() => deleteProduct(item.id)} size="small">
          Уничтожить ?
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
