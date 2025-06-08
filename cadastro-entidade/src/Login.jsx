import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Login() {
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

      <main>
        <div className="left-side-text">
          NOME DO PROJETO
        </div>

        <div className="login-box">
          <h2>Login</h2>

          <form>
            <label htmlFor="usuario">Usuário</label>
            <input type="text" id="usuario" name="usuario" required />

            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" name="senha" required />

            <div className="checkbox-container">
              <label>
                <input type="checkbox" /> Lembrar dessa conta?
              </label>
              <Link to="/cadastro-usuario">Cadastrar</Link>
            </div>

            <button type="submit">Entrar</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
