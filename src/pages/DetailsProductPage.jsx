import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { Player } from "video-react";
import "./style.css";
import details from "./image/games.jpg";

function DetailsProductPage() {
  <img src={details} />;
  const { oneProduct, getOneProduct } = useProductContext();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  console.log(oneProduct);

  //   if (!oneProduct) {
  //     return <h1>Loading...</h1>;
  //   }

  return (
    <div
      className="details"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {oneProduct ? (
        <Card
          sx={{
            display: "flex",
            maxWidth: "65%",
            marginTop: "115px",
            marginBottom: "15%",
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{ width: "400px" }}
            // height="140"
            image={oneProduct.image}
          />
          <Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {oneProduct.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {oneProduct.description}
              </Typography>
              <Typography variant="h6">${oneProduct.price}</Typography>
            </CardContent>
            <CardActions>
              <Button type="submit" size="small">
                Share
              </Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Box>
        </Card>
      ) : (
        <h1>Loading...</h1>
      )}
      {/* <div>
        <Player
          playsInline
          poster="/assets/poster.png"
          src="C:\Users\LENOVO\Desktop\makers\Хакатон\internet-magazin-sonos1\src\video\Игра Fox Legends - Трейлер.mp4"
        />
      </div> */}
    </div>
  );
}

export default DetailsProductPage;
