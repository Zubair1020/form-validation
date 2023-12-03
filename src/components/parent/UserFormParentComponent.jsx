import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { TextFiledSingleComponent } from "../single/inputs/TextFiledSingleComponent.jsx";
import { TextAreaSingleComponent } from "../single/inputs/TextAreaSingleComponent.jsx";
import { SelectInputSingleComponent } from "../single/inputs/SelectInputSingleComponent.jsx";
import { RadioButtonsSingleComponent } from "../single/inputs/RadioButtonsSingleComponent.jsx";
import { useContext } from "react";
import { ProductContext } from "../../context/products/ProductsContext.jsx";

export const UserFormParentComponent = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: "",
      email: "",
      description: "",
      productColor: "",
      productId: "",
      productPrice: "",
      productQuantity: "",
      productSize: "",
      "terms&Condition": false,
    },
  });
  const { setProducts } = useContext(ProductContext);
  const onSubmit = (productData) => {
    console.log(productData);
    reset();
    setProducts((prevState) => [...prevState, productData]);
  };

  return (
    <Box>
      <Typography textAlign="center" marginBlock={3} variant="h3">
        Add Some <span style={{ color: "#1984c4" }}>Product</span>
      </Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "30rem",
          marginInline: "auto",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/*Product Name*/}
        <TextFiledSingleComponent
          input={{
            name: " ",
            label: "Product Name",
            errors: errors,
            register: register,
            rules: {
              required: {
                value: true,
                message: "This filed is required",
              },
              minLength: {
                value: 4,
                message: "Product name should at-lest 4 char ",
              },
              maxLength: {
                value: 30,
                message: "Product name can not have more then 30 char ",
              },
              pattern: {
                value: /^[A-Za-z\s]*$/,
                message: "Name can only be in alphabets",
              },
              validate: (value) =>
                !!value.trim() || "Please enter a valid name",
            },
          }}
        />
        {/*Product Price*/}
        <TextFiledSingleComponent
          input={{
            name: "productPrice",
            label: "Product Price",
            errors,
            register,
            rules: {
              required: {
                value: true,
                message: "This filed is required",
              },
              validate: (value) => {
                const numericValue = parseInt(value.trim(), 10);
                if (isNaN(numericValue) || numericValue < 1)
                  return "Please enter a valid number greater than or equal to 1";
                return true;
              },
            },
          }}
        />
        {/*Product Quantity*/}
        <TextFiledSingleComponent
          input={{
            name: "productQuantity",
            label: "Product Quantity",
            errors,
            register,
            rules: {
              required: {
                value: true,
                message: "This filed is required",
              },
              validate: (value) => {
                const numericValue = parseInt(value.trim(), 10);
                if (isNaN(numericValue) || numericValue < 1)
                  return "Please enter a valid number greater than or equal to 1";
                if (numericValue > 10)
                  return "You can not add more then 10 product";
                return true;
              },
            },
          }}
        />
        {/*Product ID*/}
        <TextFiledSingleComponent
          input={{
            name: "productId",
            label: "Product ID",
            errors,
            register,
            rules: {
              required: {
                value: true,
                message: "This filed is required",
              },
              maxLength: {
                value: 10,
                message: "ID can not contain more then 10 char",
              },
              validate: (value) => {
                if (!value.trim()) return "Please enter a valid ID";

                if (!value.trim().match(/^#[a-zA-Z]{3,}[0-9]{2,}$/))
                  return "Invalid ID. The ID must start with a #, contain at least 3 letters, 2 digit.";

                return null;
              },
            },
          }}
        />
        {/*Select Colors*/}
        <SelectInputSingleComponent
          selectInput={{
            control,
            errors,
            name: "productColor",
            label: "Product Color",
            selectValues: [
              { text: "Red", value: "red" },
              { text: "Green", value: "green" },
              { text: "Blue", value: "blue" },
            ],
          }}
        />
        {/*Email*/}
        <TextFiledSingleComponent
          input={{
            name: "email",
            label: "Email",
            type: "email",
            errors,
            register,
            rules: {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message:
                  "Invalid email address. Email should be like: user@gmail.com",
              },
            },
          }}
        />
        {/*Size Radio Group*/}
        <RadioButtonsSingleComponent
          radioInput={{
            register,
            name: "productSize",
            labelGroup: "Size",
            radioValues: [
              { text: "S", value: "small" },
              { text: "M", value: "medium" },
              { text: "L", value: "large" },
            ],
          }}
        />
        {/*Description*/}
        <TextAreaSingleComponent
          textArea={{
            name: "description",
            label: "Description",
            minRow: 4,
            errors: errors,
            register: register,
            placeholder: "Write down the product description",
            rules: {
              required: {
                value: true,
                message: "This field is required",
              },
              minLength: {
                value: 10,
                message: "Please enter at least 5 characters",
              },
              maxLength: {
                value: 200,
                message: "Maximum length exceeded (200 characters)",
              },
            },
          }}
        />
        {/*Terms & Condition*/}
        <FormControlLabel
          {...register("terms&Condition", {
            required: {
              value: true,
              message: "You must agree with the terms and conditions",
            },
          })}
          control={<Checkbox />}
          label={
            errors["terms&Condition"]
              ? errors["terms&Condition"].message
              : "I agree with the terms and conditions"
          }
        />
        <Button
          disabled={!!Object.keys(errors).length}
          fullWidth
          type="submit"
          variant="contained"
        >
          Submit me
        </Button>
      </form>
    </Box>
  );
};
