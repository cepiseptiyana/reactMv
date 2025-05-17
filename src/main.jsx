import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router";

// aos scrolling
import "aos/dist/aos.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
