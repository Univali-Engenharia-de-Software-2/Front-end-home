document.addEventListener("DOMContentLoaded", () => {
  const titulo = localStorage.getItem("titulo") || "Título Padrão";
  const descricao = localStorage.getItem("descricao") || "Descrição padrão.";
  const logo = localStorage.getItem("logo") || "";
  const nomegrupo = localStorage.getItem("nomegrupo") || "Grupo";
  const tipogrupo = localStorage.getItem("tipogrupo") || "ONG";

  const tituloEl = document.getElementById("titulo-view");
  const descricaoEl = document.getElementById("descricao-view");
  const logoEl = document.getElementById("logoVisualizacao");
  const nomegrupoEl = document.getElementById("nomegrupo-view");
  const tipogrupoEl = document.getElementById("tipogrupo-view");

  if (tituloEl) tituloEl.textContent = titulo;
  if (descricaoEl) descricaoEl.innerText = descricao; // mantém quebras de linha
  if (logoEl && logo) logoEl.src = logo;
  if (nomegrupoEl) nomegrupoEl.textContent = nomegrupo;
  if (tipogrupoEl) tipogrupoEl.textContent = tipogrupo;
});
