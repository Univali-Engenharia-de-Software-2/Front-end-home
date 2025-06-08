import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./components/paginaPrincipal";
import SaibaMais from "./components/saibaMais";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/saiba-mais" element={<SaibaMais />} />
      </Routes>
    </Router>
  );
}
