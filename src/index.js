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
import UpdateData from './components/UpdateData';
import { BrandList } from "./components/Update/Brand";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Layout>
      
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/addData' element={<AddData />} />
        <Route path='/updateData' element={<UpdateData />} />
      </Routes>
      
      </Layout>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
