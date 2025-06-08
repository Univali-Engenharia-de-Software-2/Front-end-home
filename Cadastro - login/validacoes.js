document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formCadastro");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
  
        let valid = true;
  
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const contato = document.getElementById("contato");
        const senha = document.getElementById("senha");
        const cpfCnpj = document.getElementById("cpf");
  
        // Limpa mensagens anteriores
        const erroNome = document.getElementById("erroNome");
        const erroEmail = document.getElementById("erroEmail");
        const erroContato = document.getElementById("erroContato");
        const erroSenha = document.getElementById("erroSenha");
        const erroCpf = document.getElementById("erroCpf");
  
        if (erroNome) erroNome.textContent = "";
        if (erroEmail) erroEmail.textContent = "";
        if (erroContato) erroContato.textContent = "";
        if (erroSenha) erroSenha.textContent = "";
        if (erroCpf) erroCpf.textContent = "";
  
        // Validações
        if (nome.value.trim() === "") {
          erroNome.textContent = "Informe o nome.";
          valid = false;
        }
  
        if (!email.value.includes("@")) {
          erroEmail.textContent = "E-mail inválido.";
          valid = false;
        }
  
        if (contato.value.trim() === "") {
          erroContato.textContent = "Informe o contato.";
          valid = false;
        }
  
        if (senha.value.length < 6) {
          erroSenha.textContent = "Senha deve ter no mínimo 6 caracteres.";
          valid = false;
        }
  
        if (cpfCnpj && erroCpf) {
          const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
          const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
  
          if (!cpfRegex.test(cpfCnpj.value) && !cnpjRegex.test(cpfCnpj.value)) {
            erroCpf.textContent = "CPF ou CNPJ inválido.";
            valid = false;
          }
        }
  
        if (valid) {
          alert("Cadastro válido! (aqui você pode chamar o backend)");
        }
      });
    }
  });
  