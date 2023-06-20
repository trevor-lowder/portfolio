import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  TextField,
  Button,
  Grid,
  Container,
  InputAdornment,
  Typography,
} from "@mui/material";
import {
  AccountCircle,
  Phone,
  Email,
  Message,
  Send,
} from "@mui/icons-material";

function Contact() {
  const [state, handleSubmit] = useForm("xayzlnkv");
  if (state.succeeded) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20vh",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h5">
            Thanks for your message! I'll get back to you soon.
          </Typography>
        </div>
      </div>
    );
  }
  return (
    <Container>
      <Typography
        variant="h4"
        align="center"
        sx={{ marginTop: "5vh" }}
        gutterBottom
      >
        CONTACT ME
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="first-name"
              label="First Name"
              name="firstName"
              variant="outlined"
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="last-name"
              label="Last Name"
              name="lastName"
              variant="outlined"
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              type="email"
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="phone"
              label="Phone"
              name="phone"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="message"
              label="Message"
              name="message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Message />
                  </InputAdornment>
                ),
              }}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                fontSize: "25px",
                marginTop: "10px",
                backgroundColor: "red",
              }}
              disabled={state.submitting}
              startIcon={<Send style={{ fontSize: 30 }} />}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Contact;
