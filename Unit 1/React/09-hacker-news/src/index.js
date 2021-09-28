import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/main.css";
import { StoryProvider } from "./util/context";

ReactDOM.render(
  <React.StrictMode>
    <StoryProvider>
      <App />
    </StoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
