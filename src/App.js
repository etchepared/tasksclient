import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import Reports from "./pages/Reports";
import Staff from "./pages/Staff";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </div>
  );
}

export default App;
