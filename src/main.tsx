import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TeamProvider } from "./components/TeamContext.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TeamProvider>
      <App />
    </TeamProvider>
  </StrictMode>
);
