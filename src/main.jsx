import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { ApplicationProvider } from "./context/ApplicationContext";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <ApplicationProvider>
          <App />
        </ApplicationProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
