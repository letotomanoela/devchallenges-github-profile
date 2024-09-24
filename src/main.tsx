import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ProfileContextProvider from "./contexts/ProfileContext.tsx";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProfileContextProvider>
      <App />
    </ProfileContextProvider>
  </StrictMode>
);
