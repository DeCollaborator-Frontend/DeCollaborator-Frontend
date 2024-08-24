import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/tailwind.css";
import "./styles/styles.min.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
import Analytics from "./pages/Analytics/Analytics.jsx";
import Chats from "./pages/Chats/Chats.jsx";
import { AppProviders } from "./AppProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
);
