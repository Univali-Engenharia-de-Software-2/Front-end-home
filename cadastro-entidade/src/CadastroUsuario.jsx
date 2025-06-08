import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function CadastroUsuario() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    contato: '',
    senha: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validarFormulario = () => {
    const novosErros = {};
    let valid = true;

    if (!formData.nome.trim()) {
      novosErros.nome = 'Informe o nome.';
      valid = false;
    }

    if (!formData.email.includes('@')) {
      novosErros.email = 'E-mail inválido.';
      valid = false;
    }

    if (!formData.contato.trim()) {
      novosErros.contato = 'Informe o contato.';
      valid = false;
    }

    if (formData.senha.length < 6) {
      novosErros.senha = 'Senha deve ter no mínimo 6 caracteres.';
      valid = false;
    }

    setErrors(novosErros);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      alert('Cadastro válido! (aqui você pode chamar o backend)');
      // Aqui você pode enviar os dados ou limpar o formulário se quiser
    }
  };

  return (
    <>
      <header>
        <div className="logo">Nome Projeto</div>

        <nav>
          <a href="#">Home</a>
          <a href="#">Categorias ▼</a>
        </nav>

        <div className="header-right">
          <input type="text" className="search-input" placeholder="Pesquisar..." />
          <button className="user-btn" id="userBtn" title="Perfil">
            <i className="fa-solid fa-user"></i>
          </button>
        </div>
      </header>

      <div className="form-container">
        <h2>Cadastro</h2>
        <p>Visitante</p>
        <form id="formCadastro" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="nome">Nome completo <br /></label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
            <div className="error">{errors.nome}</div>
          </div>

          <div>
            <label htmlFor="email">E-mail<br /></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="error">{errors.email}</div>
          </div>

          <div>
            <label htmlFor="contato">Contato<br /></label>
            <input
              type="text"
              id="contato"
              name="contato"
              value={formData.contato}
              onChange={handleChange}
              required
            />
            <div className="error">{errors.contato}</div>
          </div>

          <div>
            <label htmlFor="senha">Senha<br /></label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
              minLength="6"
            />
            <div className="error">{errors.senha}</div>
          </div>

          <button type="submit">Cadastrar</button>
        </form>

        <Link to="/">Voltar para área de login</Link><br />
        <Link to="/cadastro-entidade">Cadastrar como entidade</Link>
      </div>
    </>
  );
}

export default CadastroUsuario;
