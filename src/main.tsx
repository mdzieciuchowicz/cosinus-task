import { LazyMotion, domMax } from "framer-motion";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "./style/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LazyMotion strict features={domMax}>
      <App />
    </LazyMotion>
  </StrictMode>,
);
