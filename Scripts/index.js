// Variables
let noticias = [];

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
const seccionNoticia = document.getElementById("section-noticia");
const escenasArray = [
  seccionNoticiasPrincipales,
  seccionBotonContacto,
  seccionTopicos,
  seccionActualidad,
  seccionCultura,
  seccionDeporte,
  seccionStreaming,
  seccionEspectaculo,
  seccionNoticia,
];
const escenasInicio = [
  seccionNoticiasPrincipales,
  seccionBotonContacto,
  seccionTopicos,
];
const escenasNoticias = [
  seccionActualidad,
  seccionCultura,
  seccionDeporte,
  seccionStreaming,
  seccionEspectaculo,
];
// Botones
// Escena NAV
const botonInicio = document.getElementById("boton-inicio");
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
  cambiarEscena(seccionActualidad, botonActualidad);
});

botonCultura.addEventListener("click", () => {
  cambiarEscena(seccionCultura, botonCultura);
});

botonDeporte.addEventListener("click", () => {
  cambiarEscena(seccionDeporte, botonDeporte);
});

botonStreaming.addEventListener("click", () => {
  cambiarEscena(seccionStreaming, botonStreaming);
});

botonEspectaculo.addEventListener("click", () => {
  cambiarEscena(seccionEspectaculo, botonEspectaculo);
});

botonInicio.addEventListener("click", irAlInicio);
// Funciones
// Boton de inicio
function irAlInicio() {
  botonInicio.removeAttribute("style");
  for (let i of escenasInicio) {
    i.removeAttribute("style");
    if (i == seccionNoticiasPrincipales) {
      i.style.display = "grid";
    } else {
      i.style.display = "flex";
    }
  }
  seccionNoticia.style.display = "none";
  for (let i of escenasNoticias) {
    i.removeAttribute("style");
    i.style.display = "none";
  }
  reinciarBotones(botonInicio);
}

// Reiniciar botones
function reinciarBotones(botonActual) {
  for (let i of botonArray) {
    if (botonActual != i) {
      i.removeAttribute("style");
    }
    if (botonActual != botonInicio) {
      botonInicio.style.top = "0";
    }
  }
}
// cambio de escena
function cambiarEscena(escena, botonActual) {
  for (let i of escenasArray) {
    if (i != escena) {
      i.removeAttribute("style");
      i.style.display = "none";
    }
  }
  botonActual.style.borderTop = "4rem blue solid";
  // Reset botones
  reinciarBotones(botonActual);
  escena.style.display = "flex";
  setTimeout(() => {
    escena.style.opacity = "100%";
  }, 10);
}

// Conseguir noticias
fetch("https://lasilla-api.herokuapp.com/noticias/todas")
  .then((res) => res.json())
  .then((res) => {
    noticias = res;
    // Separar los que tienen importancia
    let importanteUno = res.filter((obj) => obj.importancia == "importante1");
    let importanteDos = res.filter((obj) => obj.importancia == "importante2");
    let importanteTres = res.filter((obj) => obj.importancia == "importante3");

    // Noticia Importante 1
    const imgNotUno = document.getElementById("img-not1");
    const titNotUno = document.getElementById("tit-not1");
    const contNotUno = document.getElementById("cont-not1");
    const autNotUno = document.getElementById("aut-not1");
    const btnNotUno = document.getElementById("btn-not1");

    let imgUno = JSON.parse(importanteUno[0].imagenesUrl);

    imgNotUno.src = imgUno[0];
    titNotUno.innerText = importanteUno[0].titulo;
    contNotUno.innerText = importanteUno[0].contenidoRes;
    autNotUno.innerText = `Autor: ${importanteUno[0].autor}`;
    btnNotUno.addEventListener("click", () => {
      cargarNoticia(importanteUno[0]);
    });

    // Noticia Importante 2
    const imgNotDos = document.getElementById("img-not2");
    const titNotDos = document.getElementById("tit-not2");
    const contNotDos = document.getElementById("cont-not2");
    const autNotDos = document.getElementById("aut-not2");
    const btnNotDos = document.getElementById("btn-not2");

    let imgDos = JSON.parse(importanteDos[0].imagenesUrl);

    imgNotDos.src = imgDos[0];
    titNotDos.innerText = importanteDos[0].titulo;
    contNotDos.innerText = importanteDos[0].contenidoRes;
    autNotDos.innerText = `Autor: ${importanteDos[0].autor}`;
    btnNotDos.addEventListener("click", () => {
      cargarNoticia(importanteDos[0]);
    });

    // Noticia Importante 3
    const imgNotTres = document.getElementById("img-not3");
    const titNotTres = document.getElementById("tit-not3");
    const contNotTres = document.getElementById("cont-not3");
    const autNotTres = document.getElementById("aut-not3");
    const btnNotTres = document.getElementById("btn-not3");

    let imgTres = JSON.parse(importanteTres[0].imagenesUrl);

    imgNotTres.src = imgTres[0];
    titNotTres.innerText = importanteTres[0].titulo;
    contNotTres.innerText = importanteTres[0].contenidoRes;
    autNotTres.innerText = `Autor: ${importanteTres[0].autor}`;
    btnNotTres.addEventListener("click", () => {
      cargarNoticia(importanteTres[0]);
    });
  });

// Seccion noticia seleccionada
let imgNumber = 0;
const flechaIzq = document.getElementById("flecha-izq");
const flechaDer = document.getElementById("flecha-der");
const imgNumb = document.getElementById("img-numb");

flechaIzq.addEventListener("click", () => {
  let arrayImgNoticia = document.getElementsByClassName("scrollImg");
  if (imgNumber > 0) {
    imgNumber--;
  }
  let iterFor = 0;
  for (let i of arrayImgNoticia) {
    if (iterFor == imgNumber) {
      i.style.display = "block";
    } else {
      i.style.display = "none";
    }
    iterFor++;
  }
  imgNumb.innerText = `${imgNumber + 1}/${arrayImgNoticia.length}`;
});
flechaDer.addEventListener("click", () => {
  let arrayImgNoticia = document.getElementsByClassName("scrollImg");
  if (imgNumber < arrayImgNoticia.length - 1) {
    imgNumber++;
  }
  let iterFor = 0;
  for (let i of arrayImgNoticia) {
    if (iterFor == imgNumber) {
      i.style.display = "block";
    } else {
      i.style.display = "none";
    }
    iterFor++;
  }
  imgNumb.innerText = `${imgNumber + 1}/${arrayImgNoticia.length}`;
});

// Cargar noticia
function cargarNoticia(noticia) {
  // Traer donde autocompleta
  botonInicio.style.top = "0";
  const tituloNoticia = document.getElementById("titulo-noticia");
  const contenidoNoticia = document.getElementById("contenido-noticia");
  const autorNoticia = document.getElementById("autor-noticia");
  const fechaNoticia = document.getElementById("fecha-noticia");
  const contImagenes = document.getElementById("grid-img-cont");

  tituloNoticia.innerText = noticia.titulo;
  contenidoNoticia.innerText = noticia.contenido;
  autorNoticia.innerText = `Autor: ${noticia.autor}`;
  fechaNoticia.innerText = `Fecha: ${noticia.fecha.slice(
    8,
    10
  )}/${noticia.fecha.slice(5, 7)}/${noticia.fecha.slice(0, 4)}`;
  let arrayImg = JSON.parse(noticia.imagenesUrl);
  let isFirst = true;
  contImagenes.innerHTML = "";
  for (let i of arrayImg) {
    let imgChild = document.createElement("img");
    imgChild.setAttribute("class", "imagen-noticia scrollImg");
    if (!isFirst) {
      imgChild.style.display = "none";
    }
    isFirst = false;
    imgChild.src = i;
    contImagenes.append(imgChild);
  }

  imgNumb.innerText = `1/${arrayImg.length}`;
  for (let i of escenasArray) {
    if (i.id != "section-noticia") {
      i.style.display = "none";
    } else {
      i.style.display = "flex";
    }
  }
}
