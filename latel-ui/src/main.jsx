import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./components/Error";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Error message="Something went wrong! Try refreshing the page."/>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
