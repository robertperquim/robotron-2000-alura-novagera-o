const enviarNotas = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

enviarNotas.addEventListener("click", () => {
  resultado.innerHTML = "Fui clicado";
});
