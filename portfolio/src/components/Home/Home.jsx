import { Box, Button } from "@mui/material";
import React from "react";
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mt: 12,
          mx: 10,
        }}
      >
        <img
          src={avatarUrl}
          style={{ height: "250px", width: "250px", borderRadius:"50%" }}
          alt="profile-img"
        />
        <p>{bio}</p>
        <Button
          href={resume}
          sx={{ fontSize: "20px", "&:hover": { transform: "scale(1.25)" } }}
        >
          Download Resume
        </Button>
      </Box>
    </>
  );
};

export default Home;
