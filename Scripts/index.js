// Variables
let noticias = [];

// Escenas
const spinner = document.getElementById("spinner");
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

// Actualidad
const tituloActualidad = document.getElementById("actualidad-titulo-port");
const contenidoActualidad = document.getElementById("actualidad-cont-port");
const imgActualidad = document.getElementById("actualidad-img-port");
const contenedorNoticiasActualidad = document.getElementById(
  "actualidad-cont-noticias"
);
const arrayDomActualidad = [
  tituloActualidad,
  contenidoActualidad,
  imgActualidad,
  contenedorNoticiasActualidad,
];

botonActualidad.addEventListener("click", () => {
  cargarNoticiasSeccion("actualidad", arrayDomActualidad);
  cambiarEscena(seccionActualidad, botonActualidad);
});

// Cultura
const tituloCultura = document.getElementById("cultura-titulo-port");
const contenidoCultura = document.getElementById("cultura-cont-port");
const imgCultura = document.getElementById("cultura-img-port");
const contenedorNoticiasCultura = document.getElementById(
  "cultura-cont-noticias"
);
const arrayDomCultura = [
  tituloCultura,
  contenidoCultura,
  imgCultura,
  contenedorNoticiasCultura,
];

botonCultura.addEventListener("click", () => {
  cargarNoticiasSeccion("cultura", arrayDomCultura);
  cambiarEscena(seccionCultura, botonCultura);
});

// Deporte
const tituloDeporte = document.getElementById("deporte-titulo-port");
const contenidoDeporte = document.getElementById("deporte-cont-port");
const imgDeporte = document.getElementById("deporte-img-port");
const contenedorNoticiasDeporte = document.getElementById(
  "deporte-cont-noticias"
);
const arrayDomDeporte = [
  tituloDeporte,
  contenidoDeporte,
  imgDeporte,
  contenedorNoticiasDeporte,
];

botonDeporte.addEventListener("click", () => {
  cargarNoticiasSeccion("deporte", arrayDomDeporte);
  cambiarEscena(seccionDeporte, botonDeporte);
});

// Streaming
const tituloStreaming = document.getElementById("streaming-titulo-port");
const contenidoStreaming = document.getElementById("streaming-cont-port");
const imgStreaming = document.getElementById("streaming-img-port");
const contenedorNoticiasStreaming = document.getElementById(
  "streaming-cont-noticias"
);
const arrayDomStreaming = [
  tituloStreaming,
  contenidoStreaming,
  imgStreaming,
  contenedorNoticiasStreaming,
];

botonStreaming.addEventListener("click", () => {
  cargarNoticiasSeccion("streaming", arrayDomStreaming);
  cambiarEscena(seccionStreaming, botonStreaming);
});

// Espectaculo
const tituloEspectaculo = document.getElementById("espectaculo-titulo-port");
const contenidoEspectaculo = document.getElementById("espectaculo-cont-port");
const imgEspectaculo = document.getElementById("espectaculo-img-port");
const contenedorNoticiasEspectaculo = document.getElementById(
  "espectaculo-cont-noticias"
);
const arrayDomEspectaculo = [
  tituloEspectaculo,
  contenidoEspectaculo,
  imgEspectaculo,
  contenedorNoticiasEspectaculo,
];

botonEspectaculo.addEventListener("click", () => {
  cargarNoticiasSeccion("espectaculo", arrayDomEspectaculo);
  cambiarEscena(seccionEspectaculo, botonEspectaculo);
});

// Funcion Cargar noticias seccion
function cargarNoticiasSeccion(topico, objetosDOM) {
  let noticiasTopico = noticias.filter((obj) => obj.temaPrincipal == topico);
  if (noticiasTopico.length == 0) {
    return;
  }
  let primero = true;
  objetosDOM[3].innerHTML = "";
  for (let i of noticiasTopico) {
    if (primero) {
      objetosDOM[0].innerText = i.titulo;
      objetosDOM[1].innerText = i.contenidoRes;
      let urlIMG = JSON.parse(i.imagenesUrl);
      objetosDOM[2].src = urlIMG[0] || urlIMG;
      primero = false;
      objetosDOM[2].addEventListener("click", () => {
        cargarNoticia(i);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
    } else {
      // Contenedor
      let divCont = document.createElement("div");
      divCont.setAttribute("class", "noticia");
      // Imagen noticia
      let imgNot = document.createElement("img");
      let urlIMGnot = JSON.parse(i.imagenesUrl);
      imgNot.src = urlIMGnot[0] || urlIMGnot;
      divCont.append(imgNot);
      // Contenido texto
      let notTextCont = document.createElement("div");
      notTextCont.setAttribute("class", "noticia-textos");
      // Titulo
      let tituloNot = document.createElement("h3");
      tituloNot.innerText = i.titulo;
      notTextCont.append(tituloNot);
      // Contenido
      let contenidoNot = document.createElement("p");
      contenidoNot.innerText = i.contenidoRes;
      notTextCont.append(contenidoNot);
      // // Autor
      // let autorNot = document.createElement("p");
      // autorNot.innerText = `Autor: ${i.autor}`;
      // notTextCont.append(autorNot);
      // // Fecha
      // let fechaNot = document.createElement("p");
      // fechaNot.innerText = `Fecha: ${i.fecha.slice(8, 10)}/${i.fecha.slice(
      //   5,
      //   7
      // )}/${i.fecha.slice(0, 4)}`;
      // notTextCont.append(fechaNot);
      divCont.append(notTextCont);
      divCont.addEventListener("click", () => {
        cargarNoticia(i);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
      objetosDOM[3].append(divCont);
    }
  }
}

botonInicio.addEventListener("click", irAlInicio);
// Funciones
// Boton de inicio
function irAlInicio() {
  botonInicio.removeAttribute("style");
  for (let i of escenasInicio) {
    i.removeAttribute("style");
    if (i == seccionNoticiasPrincipales) {
      i.style.display = "grid";
      seccionNoticiasPrincipales.style.opacity = "100%";
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
  botonActual.style.borderTop = "5rem #4caf50 solid";
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
    let importanteCuatro = res.filter(
      (obj) => obj.importancia == "importante4"
    );

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
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
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
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
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
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });

    // Noticia Importante 4
    const imgNotCuatro = document.getElementById("img-not4");
    const titNotCuatro = document.getElementById("tit-not4");
    const contNotCuatro = document.getElementById("cont-not4");
    const autNotCuatro = document.getElementById("aut-not4");
    const btnNotCuatro = document.getElementById("btn-not4");

    let imgCuatro = JSON.parse(importanteCuatro[0].imagenesUrl);

    imgNotCuatro.src = imgCuatro[0];
    titNotCuatro.innerText = importanteCuatro[0].titulo;
    contNotCuatro.innerText = importanteCuatro[0].contenidoRes;
    autNotCuatro.innerText = `Autor: ${importanteCuatro[0].autor}`;
    btnNotCuatro.addEventListener("click", () => {
      cargarNoticia(importanteCuatro[0]);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
    seccionNoticiasPrincipales.style.opacity = "100%";
    spinner.style.display = "none";
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
