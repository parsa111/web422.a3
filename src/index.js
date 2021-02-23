/*********************************************************************************
 *  WEB422 – Assignment 3
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Parsa Parichehreh Student ID: 156794182 Date: February 23th, 2021
 *
 *
 ********************************************************************************/

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// =================================================

import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import "./index.css";

// ===============================================================

ReactDOM.render( <
    React.StrictMode >
    <
    BrowserRouter >
    <
    App / >
    <
    /BrowserRouter> <
    /React.StrictMode>,
    document.getElementById("root")
);

// ====================================================

reportWebVitals();