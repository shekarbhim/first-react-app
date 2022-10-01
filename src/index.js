import React from "react";
import ReactDOM from "react-dom/client";
import Routing from './app';

import { SideBarProvider } from "./context/sideBarContext";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SideBarProvider><Routing /></SideBarProvider>);

//reportWebVitals();
