// Botones
const botonFormCancelar = document.getElementById("boton-form-cancelar");
const botonFormEnviar = document.getElementById("boton-form-enviar");
const botonContacto = document.getElementById("boton-contacto");
// Escenas
const sectionForm = document.getElementById("cont-anim-form");

// Input values
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputEmail = document.getElementById("email");
const inputTextArea = document.getElementById("mensaje");

botonContacto.addEventListener("click", () => {
  botonContacto.style.color = "white";
  sectionForm.style.display = "flex";
  setTimeout(() => {
    sectionForm.style.opacity = "100%";
  }, 10);
});

botonFormCancelar.addEventListener("click", () => {
  botonContacto.style.color = "black";
  sectionForm.style.opacity = "0%";
  setTimeout(() => {
    sectionForm.style.display = "none";
    botonContacto.style.color = "black";
  }, 500);
});

botonFormEnviar.addEventListener("click", () => {
  if (
    inputNombre.value == "" ||
    inputApellido.value == "" ||
    inputEmail.value == "" ||
    inputTextArea.value == ""
  ) {
    botonFormEnviar.innerText = "ERROR!";
    botonFormEnviar.style.color = "#ff0f0f";
    setTimeout(() => {
      botonFormEnviar.innerText = "ENVIAR";
      botonFormEnviar.style.color = "white";
    }, 1000 * 2);
    return;
  }

  let bodyCont = {
    nombre: `${inputNombre.value}`,
    barrio: `${inputApellido.value}`,
    email: `${inputEmail.value}`,
    contenido: `${inputTextArea.value}`,
  };

  // Fetch POST formulario
  fetch("https://lasilla-api.herokuapp.com/mensajes/enviar", {
    method: "POST",
    body: JSON.stringify(bodyCont),
    headers: {
      connection: "keep-alive",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36",
      accept: "*/*",
      "sec-fetch-site": "same-origin",
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      referer: "https://lasilla-api.herokuapp.com/mensajes/enviar",
      "accept-language": "es-US,es-419;q=0.9,es;q=0.8,en;q=0.7",
      "content-type": "application/json",
      host: "https://lasilla-api.herokuapp.com",
      "accept-encoding": "gzip, deflate, br",
      "content-length": "84",
    },
  })
    .then((res) => res.text())
    .then((res) => {
      if (res == "Mensaje enviado correctamente") {
        botonFormEnviar.innerText = "ENVIADO!";
        botonFormEnviar.style.color = "#0fff2f";
        setTimeout(() => {
          sectionForm.style.opacity = "0%";
          setTimeout(() => {
            sectionForm.style.display = "none";
            botonContacto.style.color = "black";
            botonFormEnviar.innerText = "ENVIAR";
            botonFormEnviar.style.color = "white";
            inputNombre.value = "";
            inputApellido.value = "";
            inputEmail.value = "";
            inputTextArea.value = "";
          }, 500);
        }, 1000 * 2);
      } else {
        botonFormEnviar.innerText = "ERROR!";
        botonFormEnviar.style.color = "#ff0f0f";
        setTimeout(() => {
          botonFormEnviar.innerText = "ENVIAR";
          botonFormEnviar.style.color = "white";
        }, 1000 * 2);
      }
    });
});
