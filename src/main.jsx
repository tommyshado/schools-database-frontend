import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AddSchool } from "./routes/AddSchool.jsx";

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/add-school", element: <AddSchool />},
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
