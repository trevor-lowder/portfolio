import React, { useState } from "react";
import CustomFormInput from "./CustomFormInput.jsx";
import {
  faEnvelope,
  faPhone,
  faUser,
  faPaperPlane,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  phone: Yup.string().nullable(),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
    setTouched((prevState) => ({ ...prevState, [name]: true }));
  };
  const [isSubmitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    validationSchema
      .validate(formState, { abortEarly: false })
      .then(() => {
        fetch("https://formspree.io/f/xayzlnkv", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        })
          .then(() => {
            alert(
              "Thanks for your message! I will respond as soon as possible"
            );
            setFormState({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          })
          .catch((error) => {
            alert("There was an issue sending your message. Please try again");
            console.log(error);
          });
      })
      .catch((validationErrors) => {
        const errors = {};
        validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setErrors(errors);
      });
    setSubmitting(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CustomFormInput
          label="Name (First, Last)"
          id="name"
          variant="outlined"
          name="name"
          startAdornment={faUser}
          value={formState.name}
          onChange={handleChange}
          error={touched.name && errors.name}
          helperText="Enter your name"
        />
        <CustomFormInput
          label="Email"
          id="email"
          variant="outlined"
          name="email"
          helperText="Enter a valid email"
          startAdornment={faEnvelope}
          value={formState.email}
          onChange={handleChange}
          error={touched.email && errors.email}
        />
        <CustomFormInput
          label="Phone"
          id="phone"
          variant="outlined"
          name="phone"
          required={false}
          startAdornment={faPhone}
          value={formState.phone}
          onChange={handleChange}
          error={touched.phone && errors.phone}
        />
        <CustomFormInput
          label="Message"
          id="message"
          variant="outlined"
          name="message"
          multiline
          helperText="Enter your message"
          startAdornment={faMessage}
          value={formState.message}
          onChange={handleChange}
          error={touched.message && errors.message}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting}
          fullWidth
          startIcon={
            <FontAwesomeIcon icon={faPaperPlane} color="#0e1013" />
          }
          sx={{
            mt: 2,
            color: "#0e1013",
            backgroundColor:"rgb(30,233,121)"
          }}
        >
          <div style={{marginLeft: 10, fontSize:'18px'}}>SUBMIT</div>
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
