function logarTelaPrincipal() {
  
  var inEmail = document.getElementById("inEmail");
  var inSenha = document.getElementById("inSenha");

  var email = inEmail.value;
  var senha = Number(inSenha.value);

  if (email != "Pronatec@gmail.com") {
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
