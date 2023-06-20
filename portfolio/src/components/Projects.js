import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import twitterAPI from "./images/twitterbird.jpg";
import whoswho from "./images/who's who.png";
import companyDashboard from "./images/company dashboard.png";
import quizAPI from "./images/Quiz API.png";

const Projects = () => {
  const projectDetails = [
    {
      title: "Who's Who?",
      description:
        "A React game where you match a song to it's artist. Plays music using Spotify's API",
      imageUrl: whoswho,
      repoUrl: "https://github.com/trevor-lowder/twitter-api/tree/master",
      tech: ["React", "JavaScript", "MUI", "Fetch"],
    },
    {
      title: "Twitter API",
      description:
        "This project implements a RESTful API using Spring Boot, JPA, and PostgreSQL that exposes operations for social media data that resembles the conceptual model of Twitter.",
      imageUrl: twitterAPI,
      repoUrl: "https://github.com/trevor-lowder/twitter-api/tree/master",
      tech: ["Java", "Spring", "PostgreSQL", "REST", "Postman"],
    },
    {
      title: "Quiz API",
      description:
        "A RESTful API implemented in Spring Boot allowing users to create, view, edit, and delete quizzes stored in PostgreSQL database.",
      imageUrl: quizAPI,
      repoUrl:
        "https://github.com/trevor-lowder/spring-quiz-api/blob/master/src/main/java/com/cooksys/quiz_api/controllers/QuizController.java",
      tech: ["Java", "Spring", "PostgreSQL", "REST", "Postman"],
    },
    {
      title: "Team Dashboard",
      description:
        "A Full Stack Application where users can sign in and view company announcements, team rosters, and project details, including admin view with create/edit/delete privileges.",
      imageUrl: companyDashboard,
      repoUrl:
        "https://github.com/trevor-lowder/cook-systems-team-dashboard/tree/main",
      tech: [
        "JavaScript",
        "React",
        "Java",
        "Spring",
        "PostgreSQL",
        "REST",
        "Postman",
      ],
    },
  ];

  return (
    <Container sx={{ marginTop: "25px" }}>
      <Typography variant="h4" align="center">
        PROJECTS
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Click on a card to see the repo/live site
      </Typography>
      <Grid container spacing={3}>
        {projectDetails.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea href={project.repoUrl}>
                <CardMedia
                  component={"img"}
                  src={project.imageUrl}
                  title={project.title}
                />
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2">{project.description}</Typography>
                  {project.tech.map((tech, i) => (
                    <Chip
                      label={tech}
                      key={i}
                      variant="outlined"
                      style={{ margin: "5px", color: "red" }}
                    />
                  ))}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
