import React from "react";
import add from "./image/add.jpg";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import { Link } from "react-router-dom";
function HommePage() {
  return (
    <div
      style={{
        background: `url(${add})`,
        height: "100vh",
        width: "100%",
        maxWidth: "1280px",
        objectFit: "cover",
        backgroundSize: "cover",
      }}
    >
      <Stack direction="row" spacing={1}>
        <IconButton
          LinkComponent={Link}
          to="/list"
          aria-label="fingerprint"
          color="secondary"
        >
          <Fingerprint />
        </IconButton>
        <IconButton
          LinkComponent={Link}
          to="/add"
          aria-label="fingerprint"
          color="success"
        >
          <Fingerprint />
        </IconButton>
      </Stack>
    </div>
  );
}

export default HommePage;
