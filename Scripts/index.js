// Escenas
const seccionNoticiasPrincipales = document.getElementById(
  "noticias-principales"
);
const seccionBotonContacto = document.getElementById("contacto");
const seccionTopicos = document.getElementById("topicos");
const seccionActualidad = document.getElementById("actualidad");
const seccionCultura = document.getElementById("cultura");
const seccionDeporte = document.getElementById("deporte");
const seccionStreaming = document.getElementById("streaming");
const seccionEspectaculo = document.getElementById("espectaculo");
// Botones
// Escena NAV
const botonActualidad = document.getElementById("boton-actualidad");
const botonCultura = document.getElementById("boton-cultura");
const botonDeporte = document.getElementById("boton-deporte");
const botonStreaming = document.getElementById("boton-streaming");
const botonEspectaculo = document.getElementById("boton-espectaculo");
const botonArray = [
  botonActualidad,
  botonCultura,
  botonDeporte,
  botonStreaming,
  botonEspectaculo,
];
// Valores

// Eventos
botonActualidad.addEventListener("click", () => {
  seccionNoticiasPrincipales.style.display = "none";
  botonActualidad.style.color = "blue";
  botonActualidad.style.fontSize = "2rem";

  // Reset botones
  reinciarBotones(botonActualidad);

  seccionBotonContacto.style.display = "none";
  seccionTopicos.style.display = "none";
  seccionActualidad.style.display = "flex";
  setTimeout(() => {
    seccionActualidad.style.opacity = "100%";
  }, 10);
});
// 1.5rem
// color: $primary-color;
// font-size: 2rem;

// Funciones

// Reiniciar botones
function reinciarBotones(botonActual) {
  for (let i of botonArray) {
    if (botonActual != i) {
      i.style.color = "black";
      i.style.fontSize = "1.5rem";
    }
  }
}
