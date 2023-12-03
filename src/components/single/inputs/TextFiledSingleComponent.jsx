import { TextField } from "@mui/material";

export const TextFiledSingleComponent = ({ input }) => {
  const {
    name = "",
    label = "",
    variant = "standard",
    errors = {},
    register = () => {},
    rules = {},
    type = "text",
  } = input;
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      variant={variant}
      {...register(name, rules)}
      helperText={errors[name] && errors[name].message}
      error={!!errors[name]}
    />
  );
};
