document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("form");

  //Funcion para mostrar mensaje de error
  const mostrarError = (input, mensaje) => {
    const divPadre = input.parentNode;
    const mensajeError = divPadre.querySelector(".mensaje-error");
    divPadre.classList.add("error");
    mensajeError.innerText = mensaje;
  };

  //Funcion para eliminar mensaje de error
  const eliminarError = (input) => {
    const divPadre = input.parentNode;
    divPadre.classList.remove("error");
    const mensajeError = divPadre.querySelector(".mensaje-error");
    mensajeError.innerText = "";
  };

  formulario.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const valorInput = input.value.trim();
      if (valorInput !== "") {
        eliminarError(input);
      }
    });
  });

  function validarCampo(id, mensaje) {
    const campo = document.getElementById(id);
    const valorCampo = campo.value.trim();

    if (valorCampo === "") {
      mostrarError(campo, mensaje);
      return false;
    } else {
      eliminarError(campo);
      return true;
    }
  }

  function isEmail(email) {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //comparar el mail con la exp. reg., devuelve T o F
    return expresionRegular.test(email);
  }

  function validarEmail(id, mensaje) {
    const campo = document.getElementById(id);
    const email = campo.value.trim();

    if (email === "") {
      mostrarError(campo, mensaje);
      return false;
    } else if (!isEmail(email)) {
      mostrarError(campo, mensaje);
      return false;
    } else {
      eliminarError(campo);
      return true;
    }
  }

  const validarFormulario = () => {
    let validar = true;

    validar =
      validarEmail("email", "El correo electronico no es valido") && validar;

    validar =
      validarCampo("password", "La contraseña es obligatoria") && validar;

    return validar;
  };

  formulario.addEventListener("submit", event => {
    event.preventDefault();
    if (!validarFormulario()) {
      event.preventDefault();
      console.log("Formulario no valido");
    } else {
      event.preventDefault();
      console.log("Formulario valido");
    }
  });
});
