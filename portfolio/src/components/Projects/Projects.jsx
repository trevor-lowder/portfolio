import React from "react";
import ProjectList from "./ProjectList";
import NavBar from "../Navbar/NavBar";
import { Box } from "@mui/material";

const Projects = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 36 }}>
        <ProjectList />
      </Box>
    </>
  );
};

export default Projects;
