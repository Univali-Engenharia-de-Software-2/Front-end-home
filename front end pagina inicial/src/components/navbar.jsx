import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Entre Tradições
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="login-icon mx-2 d-lg-none" href="#" title="Login">
        <i className="fas fa-user"></i>
      </a>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Saiba mais
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorias
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  categoria 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  categoria 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  categoria 3
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <form className="barraPesquisa d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="O que você procura?"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <a className="login-icon ml-3 d-none d-lg-flex" href="#" title="Login">
          <i className="fas fa-user"></i>
        </a>
      </div>
    </nav>
  );
}
