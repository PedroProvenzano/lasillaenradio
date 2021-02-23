// Botones
const botonFormCancelar = document.getElementById("boton-form-cancelar");
const botonFormEnviar = document.getElementById("boton-form-enviar");
const botonContacto = document.getElementById("boton-contacto");
// Escenas
const sectionForm = document.getElementById("section-form");

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
  // Fetch POST formulario

  // if ok

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
});
