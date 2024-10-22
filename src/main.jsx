import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./contexts/authContext.jsx";
import { ChatContextProvider } from "./contexts/ChatContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChatContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ChatContextProvider>
  </StrictMode>
);
