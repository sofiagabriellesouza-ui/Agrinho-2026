function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function enviarMensagem(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const resposta = document.getElementById("resposta");

  resposta.innerHTML = `🌱 Obrigado, <b>${nome}</b>! Sua mensagem sobre o agronegócio foi enviada.`;

  document.querySelector("form").reset();
}