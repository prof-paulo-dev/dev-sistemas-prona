function logarTelaPrincipal() {
  
  var inEmail = document.getElementById("inEmail");
  var inSenha = document.getElementById("inSenha");

  var email = inEmail.value;
  var senha = Number(inSenha.value);

  if (email != "") {
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
var btEntrar = document.getElementById("btn-entrar");
btEntrar.addEventListener("click", logarFacebook);
