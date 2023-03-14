import { Box } from "@mui/material";
import React from "react";
import NavBar from "../Navbar/NavBar";

const Home = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 36 }}>Home</Box>
    </>
  );
};

export default Home;
