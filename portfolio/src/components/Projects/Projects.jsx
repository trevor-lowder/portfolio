import React from "react";
import ProjectList from "./ProjectList";
import { Box } from "@mui/material";

const Projects = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ProjectList />
      </Box>
    </>
  );
};

export default Projects;
