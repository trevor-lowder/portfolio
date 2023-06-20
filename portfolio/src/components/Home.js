import React from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { GitHub, LinkedIn, Pageview } from "@mui/icons-material";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = () => {
  return (
    <Container>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        style={{ minHeight: "75vh", marginTop: "20px" }}
      >
        <Grid
          container
          xs={12}
          direction="row"
          justifyContent="center"
          alignItems="center"
          textAlign={"center"}
        >
          <TransitionGroup component={null}>
            <CSSTransition classNames={"slideInLeft"} timeout={2000}>
              <Grid item sx={{ marginTop: "10px" }}>
                <Typography variant="h2">TREVOR LOWDER</Typography>
                <Typography variant="h4">
                  Full Stack Software Developer
                </Typography>
                <Typography variant="h6">
                  Building modern, clean, and functional web apps{" "}
                </Typography>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    sx={{
                      fontSize: "25px",
                      marginTop: "10px",
                      backgroundColor: "red",
                    }}
                    href="https://drive.google.com/drive/u/0/folders/1x2LTkCksTdGASM5ElAHwjrUseBrvoKjf"
                    startIcon={<Pageview style={{ fontSize: 35 }} />}
                  >
                    Resume
                  </Button>
                </Grid>
                <Grid item xs={12} sx={{ marginTop: "10px" }}>
                  <IconButton
                    aria-label="github"
                    href="https://github.com/trevor-lowder"
                  >
                    <GitHub sx={{ fontSize: "50px" }} />
                  </IconButton>
                  <IconButton
                    aria-label="linkedin"
                    href="https://www.linkedin.com/in/trevor-lowder/"
                  >
                    <LinkedIn sx={{ fontSize: "55px" }} />
                  </IconButton>
                </Grid>
              </Grid>
            </CSSTransition>
            <CSSTransition classNames="slideInRight" timeout={2000}>
              <Grid>
                <Avatar
                  src="https://avatars.githubusercontent.com/u/92330109?v=4"
                  alt="Trevor Lowder"
                  style={{
                    margin: "20px",
                    marginLeft: "30px",
                    height: "250px",
                    width: "250px",
                  }}
                />
              </Grid>
            </CSSTransition>
          </TransitionGroup>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
