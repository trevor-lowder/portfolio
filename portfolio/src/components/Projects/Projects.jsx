import React from "react";
import ProjectList from "./ProjectList";
import { Box, Typography } from "@mui/material";
import Scroll from "../Navbar/Scroll";

const Projects = () => {
  return (
    <>
      <Scroll />
      <Box sx={{ display: "flex", justifyContent: "center", flexDirection:"column", alignItems:"center" }}>
        <Typography sx={{margin:"30px"}}>
          <h2>
            Click to see the repo/live site for my recent projects
          </h2>
        </Typography>
        <ProjectList />
      </Box>
    </>
  );
};

export default Projects;
