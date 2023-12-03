import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import {
  Box,
  FormHelperText,
  InputLabel,
  TextareaAutosize as BaseTextareaAutosize,
} from "@mui/material";

export const TextAreaSingleComponent = ({ textArea }) => {
  const {
    name = "",
    placeholder = "",
    minRow,
    label,
    errors = {},
    register = () => {},
    rules = {},
  } = textArea;
  const [hasError, setHasError] = useState(!!errors[name]);
  useEffect(() => setHasError(!!errors[name]), [errors[name]]);
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };
  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };
  const red = {
    50: "#FFEBEE", // Lightest red, almost pink
    100: "#FA8072", // Salmon red
    200: "#C94C4F", // Scarlet red
    300: "#820014", // Maroon red
    400: "#F44336", // Crimson red
    500: "#FF0000", // Pure red
    600: "#E53935", // Dark crimson red
    700: "#C62828", // Wine red
    800: "#A01A1A", // Deep maroon red
    900: "#670000", // Darkest red, almost black
  };
  const TextareaAutosize = styled(BaseTextareaAutosize)(
    ({ theme }) => `
  width : 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 1rem;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${
    hasError ? red[500] : theme.palette.mode === "dark" ? grey[700] : grey[200]
  };
  box-shadow: 0px 2px 2px ${
    hasError ? red[400] : theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${hasError ? red[700] : blue[400]};
  }

  &:focus {
    border-color: ${hasError ? red[700] : blue[400]};
    box-shadow: 0 0 0 3px ${
      hasError ? red[50] : theme.palette.mode === "dark" ? blue[600] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
  );

  return (
    <Box>
      <InputLabel
        error={hasError}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
        }}
      >
        {label} :
        <TextareaAutosize
          minRows={minRow}
          aria-label="empty textarea"
          placeholder={hasError ? "Please fix the error" : placeholder}
          {...register(name, rules)}
        />
        {hasError && (
          <FormHelperText error={hasError}>
            {errors[name] && errors[name].message}
          </FormHelperText>
        )}
      </InputLabel>
    </Box>
  );
};
