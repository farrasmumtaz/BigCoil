import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "@fontsource/inter";
import "@fontsource/playfair-display";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "12px",
            background: "#B8935F",
            color: "#fff",
            padding: "14px 18px",
            fontSize: "14px",
          },
        }}
      />
      <App />
    </BrowserRouter>
  </StrictMode>
);