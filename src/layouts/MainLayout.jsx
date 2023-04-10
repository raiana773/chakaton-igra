import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
// import { Container } from "@mui/material";

function MainLayout() {
  return (
    <div>
      <Navbar />
      {/* <Container> */}
      <Outlet />
      {/* </Container> */}
    </div>
  );
}

export default MainLayout;
