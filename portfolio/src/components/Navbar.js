import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Link to="/" style={{ color: "white" }}>
              <Home sx={{ fontSize: 40 }} />
            </Link>
          </IconButton>
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/about"
          sx={{ fontSize: 20 }}
        >
          About
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/projects"
          sx={{ fontSize: 20 }}
        >
          Projects
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/contact"
          sx={{ fontSize: 20 }}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
