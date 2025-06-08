import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Login';
import CadastroUsuario from './CadastroUsuario';
import CadastroEntidade from './CadastroEntidade';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/cadastro-entidade" element={<CadastroEntidade />} />
      </Routes>
    </Router>
  );
}

export default App;
