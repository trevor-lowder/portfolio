import React from "react";
import ContactForm from "./ContactForm";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign:"center",
          margin:"20px"
        }}
      >
        <Typography>
          <h2>
            Questions, Comments, or Suggestions? Fill out the form below and
            send me a message. I'll get back to you ASAP.
          </h2>
        </Typography>
        <ContactForm />
      </Box>
    </>
  );
};

export default Contact;
