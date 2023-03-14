import React from "react";

const projects = ["project1", "project2", "project3"];

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
        <div key={project} style={{ marginTop: 24 }}>
          {project}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
