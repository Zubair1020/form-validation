import {
  FormHelperText,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Controller } from "react-hook-form";

export const SelectInputSingleComponent = ({ selectInput }) => {
  const {
    control,
    name = "",
    selectValues = [],
    label = "",
    errors = {},
    variant = "standard",
  } = selectInput;
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "This field is required" }}
      render={({ field }) => (
        <FormControl fullWidth error={!!errors[name]}>
          <InputLabel>{label}</InputLabel>
          <Select label={label} variant={variant} {...field}>
            {selectValues.map(({ value, text }, index) => (
              <MenuItem key={index} value={value}>
                {text}
              </MenuItem>
            ))}
          </Select>
          {errors[name] && (
            <FormHelperText error={!!errors[name]}>
              {errors[name] && errors[name].message}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};
