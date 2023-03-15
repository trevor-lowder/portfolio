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
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };
  const [isSubmitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    validationSchema
      .validate(formState, { abortEarly: false })
      .then(() => {
        console.log(formState);
        // TODO: handle form submission})
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
          error={errors.name}
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
          error={errors.email}
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
          error={errors.phone}
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
          error={errors.message}
        />
        <Button
          type="submit"
          variant="outlined"
          disabled={isSubmitting}
          fullWidth
          startIcon={
            <FontAwesomeIcon icon={faPaperPlane} color="rgb(30,233,121)" />
          }
          sx={{
            mt: 2,
            color: "rgb(30,233,121)",
            borderColor: "rgb(30,233,121)",
          }}
        >
          SUBMIT
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
