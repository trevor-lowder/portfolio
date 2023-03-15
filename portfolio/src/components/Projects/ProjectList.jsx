import React from "react";
import { Box } from "@mui/material";
import ActionAreaCard from "./ProjectCard";

const projects = [
  {
    title: "Project 1",
    description: "Description for Project 1",
    image: "/static/images/cards/contemplative-reptile.jpg",
    githubLink: "https://github.com/user/project-1",
  },
  {
    title: "Project 2",
    description: "Description for Project 2",
    image: "/static/images/cards/contemplative-reptile.jpg",
    githubLink: "https://github.com/user/project-2",
  },
  // more projects...
];

const ProjectList = () => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {projects.map((project) => (
        <Box sx={{ my: 4 }}>
          <ActionAreaCard key={project.title} project={project} />
        </Box>
      ))}
    </div>
  );
};

export default ProjectList;
