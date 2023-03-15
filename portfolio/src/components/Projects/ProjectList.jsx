import React from "react";
import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";
import quoteMachineImage from "./images/quoteMachine.png";
import markdownPreview from "./images/markdownpreview.jpg";
import twitterApi from "./images/twitterbird.jpg";

const projects = [
  {
    title: "Twitter API",
    description:
      "A CRUD app made with Java Spring that mimicks Twitter functionality with Users, Tweets, and Hashtags",
    image: twitterApi,
    githubLink:
      "https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-2-2023-team-2",
  },
  {
    title: "Markdown Previewer",
    description: "Immediately Converts Markdown to standard formatting",
    image: markdownPreview,
    githubLink: "https://trevor-lowder.github.io/MarkDown-Previewer/",
  },
  {
    title: "Random Quote Machine",
    description:
      "Get some inspiration. This project pulls quotes from an API using React and Axios",
    image: quoteMachineImage,
    githubLink: "https://trevor-lowder.github.io/Random-Quote-Machine/",
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
          <ProjectCard key={project.title} project={project} />
        </Box>
      ))}
    </div>
  );
};

export default ProjectList;
