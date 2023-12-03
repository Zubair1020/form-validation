import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export const RadioButtonsSingleComponent = ({ radioInput }) => {
  const {
    name = "",
    labelGroup = "",
    radioValues = [],
    register = () => {},
  } = radioInput;
  return (
    <FormControl fullWidth>
      <FormLabel>{labelGroup}</FormLabel>
      <RadioGroup defaultValue={radioValues[0].value} row>
        {radioValues.map((radio, index) => (
          <FormControlLabel
            key={index * 5.32 + 1.2}
            value={radio.value}
            label={radio.text}
            control={<Radio {...register(name)} />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
