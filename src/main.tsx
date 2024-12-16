import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Layout } from "./components/layout/Layout.tsx";
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme.ts";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <App />
        </Layout>
      </Router>
    </ThemeProvider>
  </StrictMode>
);
