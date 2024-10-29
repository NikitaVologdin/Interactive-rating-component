import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import RatingProvider from "./store/ratingContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RatingProvider>
      <App />
    </RatingProvider>
  </StrictMode>
);
