import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import "./i18n/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
