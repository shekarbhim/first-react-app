import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Stack from "@mui/material/Stack";
import Header from "./components/header";
import Login from './components/login/login';
import Registration from './components/registration'
import {SideBarProvider} from './components/layout/sideBar';
import "./index.css";
import "./App.css";

export default function Routing() {
  return (
    <div className="container">
      <div className="sidebar"></div>
      <div>
        <div className="header">
          <SideBarProvider>
            <Header />
          </SideBarProvider>
        </div>
        <div className="middle-container">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            style={{ width: "100%" }}
          >
            <BrowserRouter>
              <Routes>
                {/* {<Route path="/" element={<Layout />}>
            <Route index element={<Home />} />} */}
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />

              </Routes>
            </BrowserRouter>
          </Stack>
        </div>
        <div className="footer">Footer</div>
      </div>
    </div>
  );
}