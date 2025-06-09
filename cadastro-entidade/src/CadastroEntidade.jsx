import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function CadastroEntidade() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    contato: '',
    senha: '',
    cpf: '',
    endereco: '',        // novo campo
    fotoPerfil: null     // novo campo
  });
  

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, fotoPerfil: file });
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

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;

    if (!cpfRegex.test(formData.cpf) && !cnpjRegex.test(formData.cpf)) {
      novosErros.cpf = 'CPF ou CNPJ inválido.';
      valid = false;
    }

    if (!formData.endereco.trim()) {
      novosErros.endereco = 'Informe o endereço.';
      valid = false;
    }
    
    
    

    setErrors(novosErros);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      alert('Cadastro de entidade válido!');
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
        <p>Entidade</p>
        <form id="formCadastroEntidade" onSubmit={handleSubmit} noValidate>
        <div>
      <label htmlFor="fotoPerfil">Foto de Perfil<br /></label>
      <input
        type="file"
        id="fotoPerfil"
        name="fotoPerfil"
       accept="image/*"
        onChange={handleFotoChange}
      />
  <div className="error">{errors.fotoPerfil}</div>
</div>
          <div>
            <label htmlFor="nome">Nome da entidade<br /></label>
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
            />
            <div className="error">{errors.senha}</div>
          </div>

          <div>
            <label htmlFor="cpf">CPF ou CNPJ<br /></label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
            <div className="error">{errors.cpf}</div>
          </div>
          <div>
  <label htmlFor="endereco">Endereço<br /></label>
  <input
    type="text"
    id="endereco"
    name="endereco"
    value={formData.endereco}
    onChange={handleChange}
    required
  />
  <div className="error">{errors.endereco}</div>
</div>
          

          <button type="submit">Cadastrar</button>
        </form>

        <Link to="/">Voltar para área de login</Link><br />
        <Link to="/cadastro-usuario">Cadastrar como visitante</Link>
      </div>
    </>
  );
}

export default CadastroEntidade;
