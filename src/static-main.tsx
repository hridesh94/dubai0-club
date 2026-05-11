import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SmoothScroll from "./components/ui/SmoothScroll";
import App from "./App";
import "./styles.css";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <SmoothScroll>
        <App />
      </SmoothScroll>
    </StrictMode>,
  );
}
