import React from "react";
import ProjectList from "./ProjectList";
import { Box } from "@mui/material";
import Scroll from "../Navbar/Scroll";

const Projects = () => {
  return (
    <>
      <Scroll />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ProjectList />
      </Box>
    </>
  );
};

export default Projects;
