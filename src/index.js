import ReactDOM from "react-dom/client";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import AddData from './components/AddData';
import Header from "./components/Header";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  children: [
    {
      path: "/addData",
      element: <AddData />,
    },
    {
      path : "/",
      element: <App />
    }
  ],
  },
],
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
