function logarTelaPrincipal() {
  
  var idEmail = document.getElementById("idEmail");
  var idSenha = document.getElementById("idSenha");

  var email = idEmail.value;
  var senha = Number(idSenha.value);

  if (email === "") {
    alert("o Email(usuario) esta incorreto...");

    email.focus();
    return;
  }
  if (senha != 123456 || isNaN(senha)) {
    alert("Senha  incorreta...");

    senha.focus();
    return;
  }

  window.location.replace("iniciar.html");  

}
var btnEntrar = document.getElementById("btnEntrar");
btnEntrar.addEventListener("click", logarTelaPrincipal);
