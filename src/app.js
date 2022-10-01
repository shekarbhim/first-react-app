import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Login from "./components/login/login";
import Welcome from "./components/welcome";
import Admin from "./components/admin";
import Registration from "./components/registration";
import { SideBarContext } from "./context/sideBarContext";
import SideBar from "./components/layout/sideBar";
import "./index.css";
import "./App.css";

export default function Routing() {
  const { isOpen } = React.useContext(SideBarContext);
  return (
    <div className="container">
      {isOpen && (
        <div className="sidebar">
          <SideBar />
        </div>
      )}
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="middle-container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          </BrowserRouter>
        </div>
        <div className="footer">Footer</div>
      </div>
    </div>
  );
}
