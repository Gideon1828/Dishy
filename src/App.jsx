import React from "react";
import { Routes, Route } from "react-router-dom";
import Home1 from "./pages/Home1.jsx";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";
import Working from "./pages/Working.jsx";
import ResultsPage from "./pages/ResultsPage.jsx";
import VisitDish from "./pages/VisitDish.jsx";
import LanguageSwitcher from "./LanguageSwitcher"; // Import the LanguageSwitcher
//Only Header ,Footer,Login and Register components can be translated to Tamil
//Other Components are Not yet Translated 
export default function App() {
  return (
    <div>
      {/* Common header with Language Switcher */}
      <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px', background: '#f7f7f7' }}>
        <LanguageSwitcher />
      </header>

      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/working" element={<Working />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/visit-dish/:id" element={<VisitDish />} />
      </Routes>
    </div>
  );
}
