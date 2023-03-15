import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = ["About", "Projects", "Contact"];

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#0e1013" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 14,
              display: { xs: "none", md: "flex" },
              fontFamily: "Consolas",
              fontWeight: 700,
              fontSize: "28px",
              letterSpacing: ".1rem",
              color: "rgb(30, 233, 121)",
              textDecoration: "none",
            }}
          >
            TREVOR L
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={NavLink}
                to={`/${page}`}
                exact="true"
                sx={{
                  my: 2,
                  mx: 2,
                  fontSize: "large",
                  fontFamily: "Consolas",
                  color: "rgb(30, 233, 121)",
                  display: "block",
                  "&:hover": { transform: "scale(1.5)" },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
