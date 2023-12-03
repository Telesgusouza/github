import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";
import "./index.css";

import Providers from "./api/redux/Providers.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer />
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
