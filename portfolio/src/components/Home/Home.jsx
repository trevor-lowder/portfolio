import { Box, Button } from "@mui/material";
import React from "react";
import NavBar from "../Navbar/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://api.github.com/users/trevor-lowder";
const resume =
  "https://drive.google.com/uc?export=download&id=1Q7pQNnffuwLgeZGKdgEq7x4SxcnEb5w8";
const Home = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [bio, setBio] = useState("");
  useEffect(() => {
    axios.get(url).then((response) => {
      setAvatarUrl(response.data.avatar_url);
      setBio(response.data.bio);
    });
  });
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mt: 16,
          mx: 10,
        }}
      >
        <img
          src={avatarUrl}
          style={{ height: "360px", width: "360px" }}
          alt=""
        />
        <p>{bio}</p>
        <Button
          href={resume}
          sx={{ fontSize: "22px", "&:hover": { transform: "scale(1.25)" } }}
        >
          Download Resume
        </Button>
      </Box>
    </>
  );
};

export default Home;
