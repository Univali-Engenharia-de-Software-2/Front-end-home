function salvarEdicao() {
  const titulo = document.getElementById("titulo").value;
  const descricao = document.getElementById("descricao").value;
  const nomegrupo = document.getElementById("nomegrupo").innerText;
  const tipogrupo = document.getElementById("tipogrupo").innerText;

  if (!titulo.trim() || !descricao.trim()) {
    alert("Preencha todos os campos antes de salvar.");
    return;
  }

  localStorage.setItem("titulo", titulo);
  localStorage.setItem("descricao", descricao);
  localStorage.setItem("nomegrupo", nomegrupo);
  localStorage.setItem("tipogrupo", tipogrupo);

  const logo = document.getElementById("logoPreview").src;
  localStorage.setItem("logo", logo);

  alert("Edição salva com sucesso!");
}

document.getElementById("logoInput").addEventListener("change", function () {
  const file = this.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    document.getElementById("logoPreview").src = e.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});

// Carregar imagem já salva (se houver)
window.addEventListener("DOMContentLoaded", () => {
  const savedLogo = localStorage.getItem("logo");
  if (savedLogo) {
    document.getElementById("logoPreview").src = savedLogo;
  }
});
