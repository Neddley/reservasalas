// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* Aquí puedes agregar más rutas para otras páginas */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
