//Funcion para mostrar mensaje de error
const mostrarError = (input, mensaje) => {
  const divPadre = input.parentNode;
  const mensajeError = divPadre.querySelector(".mensaje-error");
  divPadre.classList.add("error");
  mensajeError.innerText = mensaje;
};
input = document.getElementById("password");
mensaje = "Campo Obligatorio";
mostrarError(input, mensaje);

//Funcion para eliminar mensaje de error
const eliminarError = (input) => {
  const divPadre = input.parentNode;
  divPadre.classList.remove("error");
  const mensajeError = divPadre.querySelector(".mensaje-error");
  mensajeError.innerText = "";
};

const formulario = document.querySelector("form");
formulario.querySelectorAll("input").forEach((input) => {
  input.addEventListener("change", () => {
    const valorInput = input.value.trim();
    if (valorInput !== "") {
      eliminarError(input);
    }
  });
});

function validarCampo(id, mensaje) {
  const campo = document.getElementById("id");
  const valorCampo = campo.value.trim();

  if(valorCampo === ""){
    mostrarError(campo, mensaje);
    return false;
  }else{
    eliminarError(campo);
    return true;
  }
};

function isEmail(email) {
  const expresionRegular =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
  //comparar el mail con la exp. reg., devuelve T o F
  return expresionRegular.test(email);
}

