// Variables
let noticias = [];

// Escenas
const spinner = document.getElementById("spinner");
const seccionNoticiasPrincipales = document.getElementById(
  "noticias-principales"
);
const seccionArte = document.getElementById("sectionArte");
const seccionBotonContacto = document.getElementById("contacto");
const seccionTopicos = document.getElementById("topicos");
const seccionActualidad = document.getElementById("actualidad");
const seccionCultura = document.getElementById("cultura");
const seccionDeporte = document.getElementById("deporte");
const seccionStreaming = document.getElementById("streaming");
const seccionEspectaculo = document.getElementById("espectaculo");
const seccionNoticia = document.getElementById("section-noticia");
const seccionTrivia = document.getElementById("sectionTrivia");
const seccionContemporaneo = document.getElementById("sectionVida");
const seccionBuscador = document.getElementById("seccion-buscador");
const seccionEntrevistas = document.getElementById("entrevistas");
const bannerCard = document.getElementById("institutoCard");
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
  seccionArte,
  seccionTrivia,
  seccionContemporaneo,
  seccionBuscador,
  seccionEntrevistas,
  bannerCard,
];
const escenasInicio = [
  seccionNoticiasPrincipales,
  seccionBotonContacto,
  seccionTopicos,
  seccionArte,
  seccionTrivia,
  seccionContemporaneo,
  bannerCard,
];
const escenasNoticias = [
  seccionActualidad,
  seccionCultura,
  seccionDeporte,
  seccionStreaming,
  seccionEspectaculo,
  seccionBuscador,
  seccionEntrevistas,
];
// Botones
// Escena NAV
const botonInicio = document.getElementById("boton-inicio");
const botonActualidad = document.getElementById("boton-actualidad");
const botonCultura = document.getElementById("boton-cultura");
const botonDeporte = document.getElementById("boton-deporte");
const botonStreaming = document.getElementById("boton-streaming");
const botonEspectaculo = document.getElementById("boton-espectaculo");
const botonEntrevistas = document.getElementById("boton-entrevistas");
const botonArray = [
  botonActualidad,
  botonCultura,
  botonDeporte,
  botonStreaming,
  botonEspectaculo,
  botonEntrevistas,
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

botonActualidad.addEventListener("click", async () => {
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

botonCultura.addEventListener("click", async () => {
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

botonDeporte.addEventListener("click", async () => {
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

botonStreaming.addEventListener("click", async () => {
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

botonEspectaculo.addEventListener("click", async () => {
  cargarNoticiasSeccion("espectaculo", arrayDomEspectaculo);
  cambiarEscena(seccionEspectaculo, botonEspectaculo);
});

// Entrevistas
botonEntrevistas.addEventListener("click", async () => {
  cambiarEscena(seccionEntrevistas, botonEntrevistas);
  getVideosHandler();
});
const contenedorVideos = document.getElementById("contenedor-videos");
async function getVideosHandler() {
  fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&part=snippet&playlistId=PLhVVuQDrmmvhHk4B4RSB6ohdi5k1jr8NC&key=AIzaSyDOyvrBMukXKGNuwEC2bcB3b3EdMt2CYxA`
  )
    .then((data) => data.json())
    .then((data) => {
      contenedorVideos.innerHTML = "";
      for (let item of data.items) {
        // Contenedor
        let divCont = document.createElement("div");
        divCont.setAttribute("class", "video");
        // Titulo
        let h3Titulo = document.createElement("h3");
        h3Titulo.innerText = item.snippet.title;
        divCont.append(h3Titulo);
        // IFrame
        let iframe = document.createElement("iframe");
        iframe.setAttribute(
          "src",
          `https://www.youtube.com/embed/${item.contentDetails.videoId}`
        );
        iframe.setAttribute("title", item.snippet.title);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        );
        iframe.setAttribute("allowfullscreen", "true");
        divCont.append(iframe);
        // Descripcion
        let pDesc = document.createElement("p");
        pDesc.innerText = item.snippet.description;
        divCont.append(pDesc);
        contenedorVideos.append(divCont);
      }
    });
}

// Funcion Cargar noticias seccion
async function cargarNoticiasSeccion(topico, objetosDOM) {
  let noticiasTopico = noticias.filter((obj) => obj.temaPrincipal == topico);
  if (noticiasTopico.length == 0) {
    return;
  }
  noticiasTopico.sort(function (a, b) {
    if (a.id > b.id) {
      return -1;
    }
    if (a.id < b.id) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
  let primero = true;
  let vecesNot = 0;
  objetosDOM[3].innerHTML = "";
  for (let i of noticiasTopico) {
    if (vecesNot < 5) {
      if (primero) {
        objetosDOM[0].innerText = i.titulo;
        objetosDOM[1].innerText = i.contenidoRes;
        let urlIMG = JSON.parse(i.imagenesUrl);
        objetosDOM[2].src = (await urlIMG[0]) || (await urlIMG);
        objetosDOM[2].setAttribute("class", "imagenPortadaRedim");
        objetosDOM[2].onload = function () {
          if (window.screen.width > 570) {
            if (this.naturalHeight > this.naturalWidth) {
              this.style.width = "auto";
              this.style.height = "40vw";
              objetosDOM[1].style.width = `${this.width}px`;
              objetosDOM[0].style.width = `${this.width}px`;
            } else {
              this.style.width = "60vw";
              this.style.height = "auto";
              objetosDOM[1].style.width = "60vw";
              objetosDOM[0].style.width = "60vw";
            }
          } else {
            if (this.naturalHeight > this.naturalWidth) {
              this.style.width = "auto";
              this.style.height = "100vw";
              objetosDOM[1].style.top = "-40vw";
              objetosDOM[0].style.top = "-40vw";
              objetosDOM[1].style.width = `${this.width}px`;
              objetosDOM[0].style.width = `${this.width}px`;
            } else {
              this.style.width = "100vw";
              this.style.height = "auto";
              objetosDOM[0].style.width = "100vw";
              objetosDOM[1].style.width = "100vw";
            }
          }
        };
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
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "imgDiv");

        let imgNot = document.createElement("img");
        imgNot.setAttribute("class", "imgNotRedim");
        let urlIMGnot = await JSON.parse(i.imagenesUrl);
        imgNot.onload = function () {
          if (window.screen.width > 570) {
            if (this.height < this.width) {
              this.style.width = "100%";
              this.style.height = "auto";
            } else {
              this.style.width = "auto";
              this.style.height = "100%";
            }
          } else {
            if (this.height < this.width) {
              this.style.width = "100%";
              this.style.height = "auto";
            } else {
              this.style.width = "auto";
              this.style.height = "100%";
            }
          }
        };
        imgNot.src = (await urlIMGnot[0]) || (await urlIMGnot);

        imgDiv.append(imgNot);
        divCont.append(imgDiv);
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
        divCont.append(notTextCont);
        divCont.addEventListener("click", () => {
          cargarNoticia(i);
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        });
        objetosDOM[3].append(divCont);
      }
      vecesNot++;
    }
  }
  return "finish";
}

const buscadorInput = document.getElementById("buscador-input");
const botonBuscar = document.getElementById("boton-buscar");

const tituloBuscador = document.getElementById("buscador-titulo-port");
const contenidoBuscador = document.getElementById("buscador-cont-port");
const imgBuscador = document.getElementById("buscador-img-port");
const contenedorNoticiasBuscador = document.getElementById(
  "buscador-cont-noticias"
);
const arrayDomBuscador = [
  tituloBuscador,
  contenidoBuscador,
  imgBuscador,
  contenedorNoticiasBuscador,
];

buscadorInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    e.preventDefault();
    if (buscadorInput.value == "") {
      return;
    }
    // Ejecutar la busqueda de noticias
    buscador(buscadorInput.value, arrayDomBuscador);
  }
});

botonBuscar.addEventListener("click", () => {
  if (buscadorInput.value == "") {
    return;
  }
  // Ejecutar la busqueda de noticias
  buscador(buscadorInput.value, arrayDomBuscador);
});

// Funcion Buscador
function buscador(searchWord, objetosDOM) {
  let palabra = searchWord.toLowerCase();
  let noticiasTopico = noticias.filter((obj) => obj.tags.includes(palabra));
  if (noticiasTopico.length == 0) {
    buscadorInput.style.backgroundColor = "red";
    setTimeout(() => {
      buscadorInput.removeAttribute("style");
    }, 1000 * 2);
    return;
  }
  noticiasTopico.sort(function (a, b) {
    if (a.id > b.id) {
      return -1;
    }
    if (a.id < b.id) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
  let primero = true;
  let vecesNot = 0;
  objetosDOM[3].innerHTML = "";
  for (let i of noticiasTopico) {
    if (vecesNot < 6) {
      if (primero) {
        objetosDOM[0].innerText = i.titulo;
        objetosDOM[1].innerText = i.contenidoRes;
        objetosDOM[2].setAttribute("class", "imagenPortadaRedim");
        // imagen
        objetosDOM[2].onload = function () {
          if (window.screen.width > 570) {
            if (this.naturalHeight > this.naturalWidth) {
              this.style.width = "auto";
              this.style.height = "40vw";
              objetosDOM[1].style.width = `${this.width}px`;
              objetosDOM[0].style.width = `${this.width}px`;
            } else {
              this.style.width = "60vw";
              this.style.height = "auto";
              objetosDOM[1].style.width = "60vw";
              objetosDOM[0].style.width = "60vw";
            }
          } else {
            if (this.naturalHeight > this.naturalWidth) {
              this.style.width = "auto";
              this.style.height = "100vw";
              objetosDOM[1].style.top = "-40vw";
              objetosDOM[0].style.top = "-40vw";
              objetosDOM[1].style.width = `${this.width}px`;
              objetosDOM[0].style.width = `${this.width}px`;
            } else {
              this.style.width = "100vw";
              this.style.height = "auto";
              objetosDOM[0].style.width = "100vw";
              objetosDOM[1].style.width = "100vw";
            }
          }
        };
        let urlIMG = JSON.parse(i.imagenesUrl);
        objetosDOM[2].src = urlIMG[0] || urlIMG;

        // check dim

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
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "imgDiv");
        let imgNot = document.createElement("img");
        imgNot.onload = function () {
          if (window.screen.width > 570) {
            if (this.height < this.width) {
              this.style.width = "100%";
              this.style.height = "auto";
            } else {
              this.style.width = "auto";
              this.style.height = "100%";
            }
          } else {
            if (this.height < this.width) {
              this.style.width = "100%";
              this.style.height = "auto";
            } else {
              this.style.width = "auto";
              this.style.height = "100%";
            }
          }
        };
        let urlIMGnot = JSON.parse(i.imagenesUrl);
        imgNot.src = urlIMGnot[0] || urlIMGnot;
        imgDiv.append(imgNot);
        divCont.append(imgDiv);
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
        divCont.append(notTextCont);
        divCont.addEventListener("click", () => {
          cargarNoticia(i);
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        });
        objetosDOM[3].append(divCont);
      }
      vecesNot++;
    }
  }
  cambiarEscena(seccionBuscador);
}

botonInicio.addEventListener("click", irAlInicio);
// Funciones
// Boton de inicio
function irAlInicio() {
  botonInicio.removeAttribute("style");
  for (let i of escenasInicio) {
    i.removeAttribute("style");
    if (i == seccionNoticiasPrincipales) {
      if (window.screen.width > 570) {
        i.style.display = "grid";
      } else {
        i.style.display = "flex";
      }
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
      // botonInicio.style.width = "auto";
      // botonInicio.style.margin = "0 10px 0 10px";
    }
  }
}
// cambio de escena
function cambiarEscena(escena, botonActual = "asd") {
  for (let i of escenasArray) {
    if (i != escena) {
      i.removeAttribute("style");
      i.style.display = "none";
    }
  }
  if (botonActual != "asd") {
    botonActual.style.borderTop = "5rem #333333 solid";
  }
  // Reset botones
  reinciarBotones(botonActual);
  escena.style.display = "flex";
  setTimeout(() => {
    escena.style.opacity = "100%";
  }, 10);
}

// Importante 1
let importanteUno = {
  imgNot: document.getElementById("img-not1"),
  titNot: document.getElementById("tit-not1"),
  contNot: document.getElementById("cont-not1"),
  autNot: document.getElementById("aut-not1"),
  btnNot: document.getElementById("btn-not1"),
};
// Importante 2
let importanteDos = {
  imgNot: document.getElementById("img-not2"),
  titNot: document.getElementById("tit-not2"),
  contNot: document.getElementById("cont-not2"),
  autNot: document.getElementById("aut-not2"),
  btnNot: document.getElementById("btn-not2"),
};
// Importante 3
let importanteTres = {
  imgNot: document.getElementById("img-not3"),
  titNot: document.getElementById("tit-not3"),
  contNot: document.getElementById("cont-not3"),
  autNot: document.getElementById("aut-not3"),
  btnNot: document.getElementById("btn-not3"),
};
// Importante 4
let importanteCuatro = {
  imgNot: document.getElementById("img-not4"),
  titNot: document.getElementById("tit-not4"),
  contNot: document.getElementById("cont-not4"),
  autNot: document.getElementById("aut-not4"),
  btnNot: document.getElementById("btn-not4"),
};

let importanteCinco = {
  imgNot: document.getElementById("img-not5"),
  titNot: document.getElementById("tit-not5"),
  contNot: document.getElementById("cont-not5"),
  autNot: document.getElementById("aut-not5"),
  btnNot: document.getElementById("btn-not5"),
};

let importanteSeis = {
  imgNot: document.getElementById("img-not6"),
  titNot: document.getElementById("tit-not6"),
  contNot: document.getElementById("cont-not6"),
  autNot: document.getElementById("aut-not6"),
  btnNot: document.getElementById("btn-not6"),
};

let ArrayObjetosNoticias = [
  importanteUno,
  importanteDos,
  importanteTres,
  importanteCuatro,
  importanteCinco,
  importanteSeis,
];

// Conseguir noticias
fetch("https://lasilla-api.herokuapp.com/noticias/todas")
  .then((res) => res.json())
  .then((res) => {
    noticias = res;

    // Agregar noticias importantes a seccion 1
    let iterNum = 1;
    for (let i of ArrayObjetosNoticias) {
      let notaImportante = res.filter(
        (obj) => obj.importancia == `importante${iterNum}`
      );

      let imgUno = JSON.parse(notaImportante[0].imagenesUrl);

      i.imgNot.src = imgUno[0];
      // check dim
      if (window.screen.width > 570) {
        if (300 > i.imgNot.height) {
          i.imgNot.style.height = "15vw";
          i.imgNot.style.width = "auto";
          i.imgNot.style.maxWidth = "100%";
        } else {
          i.imgNot.style.height = "auto";
          i.imgNot.style.width = "100%";
          i.imgNot.style.maxWidth = "100%";
        }
      } else {
        if (300 > i.imgNot.height) {
          i.imgNot.style.height = "50vw";
          i.imgNot.style.width = "auto";
          i.imgNot.style.maxWidth = "100%";
        } else {
          i.imgNot.style.height = "auto";
          i.imgNot.style.width = "100%";
          i.imgNot.style.maxWidth = "100%";
        }
      }
      i.titNot.innerText = notaImportante[0].titulo;
      i.contNot.innerText = notaImportante[0].contenidoRes;
      i.autNot.innerText = `Autor: ${notaImportante[0].autor}`;
      i.btnNot.addEventListener("click", () => {
        cargarNoticia(notaImportante[0]);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
      iterNum++;
    }
    seccionNoticiasPrincipales.style.opacity = "100%";
    spinner.style.display = "none";
  })
  .then(() => {
    // Cargar noticias de Contemporanea
    const spinnerVida = document.getElementById("spinnerVida");
    const OpacityVida = document.getElementById("vida-cont");
    const vidaImg = document.getElementsByClassName("vida-img");
    const vidaTituloNot = document.getElementsByClassName("vida-titulo-not");
    const vidaAutor = document.getElementsByClassName("vida-autor");
    const vidaFuente = document.getElementsByClassName("vida-fuente");
    const vidaContenidoTxt = document.getElementsByClassName(
      "vida-contenido-txt"
    );
    const vidaFecha = document.getElementsByClassName("vida-fecha");

    const arrayOrden = ["Vida sana", "Medio ambiente", "Genero"];
    // Handler
    for (let i = 0; i < 3; i++) {
      // Filtrar noticia
      let notaVida = noticias.filter(
        (obj) => obj.temaPrincipal == arrayOrden[i]
      );
      // Completar campos
      // Imagen
      let imgVida = JSON.parse(notaVida[0].imagenesUrl);
      vidaImg[i].src = imgVida;
      vidaTituloNot[i].innerText = notaVida[0].titulo;
      vidaAutor[i].innerText = `Autor: ${notaVida[0].autor}`;
      vidaFuente[i].innerText = `Fuente: ${notaVida[0].fuente}`;
      vidaContenidoTxt[i].innerText = notaVida[0].contenido;
      vidaFecha[i].innerText = `Fecha: ${notaVida[0].fecha.slice(
        8,
        10
      )}/${notaVida[0].fecha.slice(5, 7)}/${notaVida[0].fecha.slice(0, 4)}`;
      spinnerVida.style.display = "none";
      OpacityVida.style.opacity = "100%";
    }
  });

// Interactividad de noticias Contemporaneas
const arrayTitulosVida = document.getElementsByClassName("vida-titulo");
const arrayContenidoVida = document.getElementsByClassName("vida-contenido");
for (let i = 0; i < 3; i++) {
  arrayTitulosVida[i].addEventListener("click", () => {
    for (let element of arrayTitulosVida) {
      element.removeAttribute("style");
    }
    arrayTitulosVida[i].style.backgroundColor = "#ffa733";
    arrayTitulosVida[i].style.color = "white";
    arrayTitulosVida[i].style.borderBottom = "1px solid rgb(230, 230, 230)";
    for (let element of arrayContenidoVida) {
      element.style.display = "none";
    }
    arrayContenidoVida[i].style.display = "flex";
  });
}

// Cargar imagen del dia
const imagenDelDia = document.getElementById("arte-img");
const contArteTxt = document.getElementsByClassName("cont-arte-txt");
imagenDelDia.onload = function () {
  if (window.screen.width > 570) {
    if (this.naturalWidth > this.naturalHeight) {
      this.style.width = "35vw";
      this.style.height = "auto";
      contArteTxt[0].style.width = `${this.width}px`;
    } else {
      this.style.height = "50vh";
      this.style.width = "auto";
      contArteTxt[0].style.width = `${this.width}px`;
    }
  } else {
    this.style.width = "100vw";
    this.style.height = "auto";
    contArteTxt[0].style.width = `${this.width}px`;
  }
};
fetch("https://lasilla-api.herokuapp.com/imagen/todas")
  .then((res) => res.json())
  .then((res) => {
    const descImagenDia = document.getElementById("arte-txt-desc");
    const autorImagenDia = document.getElementById("arte-txt-autor");
    const contenedorArte = document.getElementById("contenedor-arte");
    const spinnerArte = document.getElementById("spinnerArte");
    imagenDelDia.src = res[0].imgUrl;
    descImagenDia.innerText = res[0].descripcion;
    autorImagenDia.innerText = `Autor: ${res[0].autor}`;
    contenedorArte.style.opacity = "100%";
    spinnerArte.style.display = "none";
  })
  .then(() => {});

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
  botonInicio.style.width = "auto";
  botonInicio.style.margin = "0 10px 0 10px";
  const tituloNoticia = document.getElementById("titulo-noticia");
  const contenidoNoticia = document.getElementById("contenido-noticia");
  const autorNoticia = document.getElementById("autor-noticia");
  const fuenteNoticia = document.getElementById("fuente-noticia");
  const fechaNoticia = document.getElementById("fecha-noticia");
  const contImagenes = document.getElementById("grid-img-cont");

  tituloNoticia.innerText = noticia.titulo;
  contenidoNoticia.innerText = noticia.contenido;
  autorNoticia.innerText = `Autor: ${noticia.autor}`;
  fuenteNoticia.innerText = `Fuente: ${noticia.fuente}`;
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

// Trivia

// Cargar trivia
fetch("https://lasilla-api.herokuapp.com/trivia/todas")
  .then((res) => res.json())
  .then(async (res) => {
    const preguntaTrivia = document.getElementById("preguntaTrivia");
    const triviaLabels = document.getElementsByClassName("triviaLabel");
    preguntaTrivia.innerText = res[0].pregunta;
    triviaLabels[0].innerText = res[0].respuestaUno;
    triviaLabels[1].innerText = res[0].respuestaDos;
    triviaLabels[2].innerText = res[0].respuestaTres;
    Trivia.solucion = res[0].solucion
      .replace(regexTriv, "")
      .replace(/(?:\r\n|\r|\n)/g, "");
  })
  .then(() => {
    iniciarTrivia();
    Trivia.spinnerTrivia.style.display = "none";
    Trivia.contenedor.style.opacity = "100%";
  });

let Trivia = {
  contenedor: document.getElementById("TriviaForm"),
  spinnerTrivia: document.getElementById("spinnerTrivia"),
  contenedoresTrivia: document.getElementsByClassName("trivia-op-cont"),
  inputsTrivia: document.getElementsByClassName("trivia"),
  solucion: "Gustavo Cerati",
  checkRespuesta(respuesta) {
    if (respuesta == this.solucion) {
      return true;
    } else {
      return false;
    }
  },
};
const regexTriv = / /gi;
function iniciarTrivia() {
  for (let i = 0; i < 3; i++) {
    Trivia.contenedoresTrivia[i].addEventListener("click", () => {
      Trivia.inputsTrivia[i].click();
      for (let obj of Trivia.contenedoresTrivia) {
        if (
          Trivia.checkRespuesta(
            obj.textContent
              .replace(regexTriv, "")
              .replace(/(?:\r\n|\r|\n)/g, "")
          )
        ) {
          obj.style.background = "rgb(148, 255, 133)";
        } else {
          obj.style.background = "rgb(255, 10, 10)";
        }
        obj.style.pointerEvents = "none";
      }
    });
  }
}

const contClima = document.getElementsByClassName("clima");
if (window.screen.width <= 570) {
  contClima[0].style.display = "none";
}

// Publicidad

bannerCard.addEventListener("click", () => {
  window.open("https://www.instagram.com/institutoemiliocardenas");
});

const PerVoi = document.getElementById("PerVoi");
PerVoi.addEventListener("click", () => {
  window.open("https://www.instagram.com/fppervoi/");
});

const fundeu = document.getElementById("fundeu");
fundeu.addEventListener("click", () => {
  window.open("https://fundeu.fiile.org.ar/");
});

const Olivia = document.getElementById("Olivia");
Olivia.addEventListener("click", () => {
  window.open("https://www.instagram.com/editorialolivia/");
});

// A;adir visita
fetch("https://lasilla-api.herokuapp.com/visitas/add").then(() => {});

// Iframe deal
const iFrameRadio = document.getElementById("iframeRadio");
iFrameRadio.scrolling = "no";
iFrameRadio.frameBorder = "0";

// Memes
const imgMeme = document.getElementById("img-meme");
fetch("https://lasilla-api.herokuapp.com/meme/todas")
  .then((data) => data.json())
  .then((data) => {
    imgMeme.onload = function () {
      if (this.naturalHeight > this.naturalWidth) {
        this.style.width = "auto";
        this.style.height = "100%";
      } else {
        this.style.width = "100%";
        this.style.height = "auto";
      }
    };
    imgMeme.src = data[0].imgUrl;
  })
  .then(() => (imgMeme.style.display = "block"));
