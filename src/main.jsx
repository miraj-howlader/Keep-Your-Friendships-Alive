import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import FriendProvider from "./context/FriendContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FriendProvider>
  </StrictMode>,
);
