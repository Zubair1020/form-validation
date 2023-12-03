import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ProductsContextProvider } from "./context/products/ProductsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </CssBaseline>
  </React.StrictMode>,
);
