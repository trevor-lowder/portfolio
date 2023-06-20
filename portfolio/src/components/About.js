import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={3}
        style={{ minHeight: "75vh" }}
      >
        <Grid
          item
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={"20px"}
          xs={12}
        >
          <Typography variant="h4" textAlign={"center"}>
            ABOUT ME
          </Typography>
          <Typography variant="body1">
            I grew up in Arizona and joined the Air Force straight out of high
            school, where I spent a total of 8 years traveling, learning about
            new cultures and finding my passions while honing my professional
            skills in technology and human relations as a personnel specialist
            (AFSC 3F0X1). I was stationed in Okinawa, Japan early in my career
            and started learning Japanese, which sparked a passion for language
            and culture. I had a great career in the military, with the
            privelege of deploying to Iraq in support of Operation Enduring
            Freedom, and the experience of becoming a manager and a leader,
            earning the highest honor at Airman Leadership School, the John
            Levitow Award. I achieved the goals I set to achieve in my military
            career and I wanted to try something new. I've always loved tech and
            enjoyed learning new things, so programming came as a natural joy to
            me. The COVID19 pandemic opened the door to transition into remote
            work, and finally gave me the push to leap into a tech career as a
            software developer. My military experience instilled in me
            adaptability, resilience, attention to detail, and pride and
            confidence in my abilities. I bring these characteristics with a
            strong passion for technology and learning into my software
            development career.
          </Typography>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ margin: 10, paddingTop: 10 }}>
              <img
                className="iconImage"
                alt="Bash"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
              />
              <img
                className="iconImage"
                alt="C#"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              />
              <img
                className="iconImage"
                alt="CSS3"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              />
              <img
                className="iconImage"
                alt="Git"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              />
              <img
                className="iconImage"
                alt="HTML5"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              />
              <img
                className="iconImage"
                alt="Java"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              />
              <img
                className="iconImage"
                alt="JavaScript"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              />
              <img
                className="iconImage"
                alt="Markdown"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"
              />
              <img
                className="iconImage"
                alt="Typescript"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
            </div>
            <div>
              <img
                className="iconImage"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                alt="Angular"
                height="50px"
              />
              <img
                className="iconImage"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
                alt="Azure"
                height="50px"
              />
              <img
                className="iconImage"
                alt=".NET Core"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
              />
              <img
                className="iconImage"
                alt="Figma"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              />
              <img
                className="iconImage"
                alt="GitHub"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              />
              <img
                className="iconImage"
                alt="Material UI"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
              />
              <img
                className="iconImage"
                alt="MongoDB"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              />
              <img
                className="iconImage"
                alt="NodeJS"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              />
              <img
                className="iconImage"
                alt="PostgreSQL"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              />
              <img
                className="iconImage"
                alt="React"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
              <img
                className="iconImage"
                alt="Spring"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
              />
              <img
                className="iconImage"
                alt="Visual Studio"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
              />
              <img
                className="iconImage"
                alt="Visual Studio Code"
                height="50px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
