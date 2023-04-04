import React from "react";
import ContactForm from "./ContactForm";
import { Box } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 14 }}>
        <ContactForm />
      </Box>
    </>
  );
};

export default Contact;
