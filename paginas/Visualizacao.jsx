import React, { useEffect, useState } from "react";
import "./visualizarEditar.css";

export default function Visualizacao() {
  const [data, setData] = useState({
    titulo: "Título Padrão",
    descricao: "Descrição padrão.",
    logo: "",
    nomegrupo: "Grupo",
    tipogrupo: "ONG",
  });

  useEffect(() => {
    setData({
      titulo: localStorage.getItem("titulo") || "Título Padrão",
      descricao: localStorage.getItem("descricao") || "Descrição padrão.",
      logo: localStorage.getItem("logo") || "",
      nomegrupo: localStorage.getItem("nomegrupo") || "Grupo",
      tipogrupo: localStorage.getItem("tipogrupo") || "ONG",
    });
  }, []);

  return (
    <div className="container mt-4">
      <h1>{data.titulo}</h1>
      <p style={{ whiteSpace: "pre-wrap" }}>{data.descricao}</p>
      <aside className="grupo-sidebar mt-4">
        {data.logo && (
          <img className="grupo-img" src={data.logo} alt="Logo do Grupo" />
        )}
        <h2>{data.nomegrupo}</h2>
        <button className="grupo-btn">EVENTOS</button>
        <button className="grupo-btn">CONTATO</button>
        <button className="grupo-btn">FOTOS</button>
        <div>{data.tipogrupo}</div>
      </aside>
    </div>
  );
}
