import React from "react";
import ContactForm from "./ContactForm";
import NavBar from "../Navbar/NavBar";
import { Box } from "@mui/material";

const Contact = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 36 }}>
        <ContactForm />
      </Box>
    </>
  );
};

export default Contact;
