// PageCard.jsx
import React from "react";

export default function PageCard({ title, image, link }) {
  return (
    <div className="col">
      <div className="card">
        <div className="containerImagem">
          <img
            src={image}
            className="card-img-top imagem-com-fundo"
            alt={title}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <a href={link} className="btn btn-primary">
            Leia mais...
          </a>
        </div>
      </div>
    </div>
  );
}
