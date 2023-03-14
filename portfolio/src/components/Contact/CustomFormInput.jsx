import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, FormHelperText } from "@mui/material";

const CustomTextField = styled(TextField)({
  "& label": {
    color: "rgb(30,233,121)",
  },
  "& .MuiInputBase-input": {
    color: "rgb(30,233,121)",
  },
  "& .MuiFormHelperText-root": {
    color: "rgb(30,233,121)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgb(30,233,121)",
    },
    "&:hover fieldset": {
      borderColor: "green",
    },
  },
});

const CustomFormInput = ({
  label,
  id,
  name,
  variant,
  fullWidth = true,
  required = true,
  startAdornment,
  onChange,
  value,
  error,
  helperText,
  ...props
}) => {
  return (
    <>
      <CustomTextField
        {...props}
        label={label}
        id={id}
        name={name}
        variant={variant}
        fullWidth={fullWidth}
        required={required}
        onChange={onChange}
        value={value}
        error={error}
        InputProps={{
          startAdornment: startAdornment && (
            <Box sx={{ marginRight: 2 }}>
              <FontAwesomeIcon icon={startAdornment} color="rgb(30,233,121)" />
            </Box>
          ),
        }}
        sx={{ my: 2 }}
      />
      {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </>
  );
};
export default CustomFormInput;
