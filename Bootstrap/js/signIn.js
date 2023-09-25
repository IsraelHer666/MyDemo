//Obtenemos el formulario
var formulario = document.querySelector("form");
var btn = document.querySelector("button");
//validacion de campos

//Vamos a obtener los elementos que ocuparemos.
//Estos elementos cambian el color y el simbolo que se muestra
var control1 = document.querySelectorAll("input.validation")[0];
var control2 = document.querySelectorAll("input.validation")[1];
var control3 = document.querySelectorAll("input.validation")[2];
var control4 = document.querySelectorAll("input.validation")[3];
var control5 = document.querySelectorAll("input.validation")[4];

//Estos elementos cambian el callback
var cb1 = document.querySelectorAll("div.validacion p")[0];
var cb2 = document.querySelectorAll("div.validacion p")[1];
var cb3 = document.querySelectorAll("div.validacion p")[2];
var cb4 = document.querySelectorAll("div.validacion p")[3];
var cb5 = document.querySelectorAll("div.validacion p")[4];

//Seleccionamos los campos
const Nombre = document.querySelector("[name=Nombre]");
const Apellido = document.querySelector("[name='Apellido']");
const Telefono = document.querySelector("[name='Telefono']");
const Ciudad = document.querySelector("[name='Ciudad']");
const CodigoPostal = document.querySelector("[name='CP']");
const Estado = document.querySelector("[name='Estado']");
var camposVacios = 0;
function ValidarCampoVacio(e, campo, control) {
  /* console.log(e.target.value) obtenemos el valor del campo al salir de el
    Validando longitud del campo */
  var name = e.target.value;
  //La funcion trim recorta los espacios al inicio y al final
  if (name.trim().length == 0 || name.trim().length <= 1) {
    //Revisar siempre la sintaxis
    campo.classList.remove("is-valid");
    campo.classList.add("is-invalid");
    campo.innerHTML = "<p class='error'>Campo vacio o demasiado corto</p>";
    control.classList.add("is-invalid");
    btn.disabled = "true";
    btn.style.backgroundColor = "gray";
  } else if (name.trim().length >= 3) {
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    campo.innerHTML = "<p class='ok'>Ok</p>";
    control.classList.remove("is-invalid");
    control.classList.add("is-valid");
    btn.disabled = "false";
    btn.style.backgroundColor = "blue";
  }
}
function ValidarNumeros(cadena, campo, control) {
  var regex = /^[a-zA-Z]+$/;
  if (!regex.test(cadena.trim()) && cadena.trim().length > 3) {
    console.log(regex.test(cadena));
    campo.classList.remove("is-valid");
    campo.classList.add("is-invalid");
    campo.innerHTML =
      "<p class='error'>No ingreses numeros o caracteres invalidos<p>";
    control.classList.add("is-invalid");
    btn.disabled = true;
    btn.style.backgroundColor = "gray";
  } else if (cadena.length > 3) {
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    campo.innerHTML = "<p class='ok'>Ok</p>";
    control.classList.remove("is-invalid");
    control.classList.add("is-valid");
    btn.disabled = false;
    btn.style.backgroundColor = "blue";
  } else {
    campo.classList.remove("is-valid");
    campo.classList.add("is-invalid");
    campo.innerHTML = "<p class='error'>Campo vacio o demasiado corto</p>";
    control.classList.add("is-invalid");
    console.error("campo vacio o demasiado corto");
    btn.disabled = true;
    btn.style.backgroundColor = "gray";
  }
}
function ValidarLetras(cadena, campo, control) {
  cadena = cadena.toUpperCase();
  var regex = /^\d+(\.\d+)?$/;
  console.log(regex.test(cadena));
  if (!regex.test(cadena) && cadena.length > 3) {
    console.info("hay letras");
    campo.classList.remove("is-valid");
    campo.classList.add("is-invalid");
    campo.innerHTML =
      "<p class='error'>No ingreses letras o caracteres invalidos</p>";
    control.classList.add("is-invalid");
    btn.disabled = true;
    btn.style.backgroundColor = "gray";
  } else if (cadena.length < 3) {
    campo.classList.remove("is-valid");
    campo.classList.add("is-invalid");
    campo.innerHTML = "<p class='error'>Campo vacio o demasiado corto</p>";
    control.classList.add("is-invalid");
    console.error("campo vacio o demasiado corto");
    btn.disabled = true;
    btn.style.backgroundColor = "gray";
  } else {
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    campo.innerHTML = "<p class='ok'>Ok</p>";
    control.classList.remove("is-invalid");
    control.classList.add("is-valid");
    btn.disabled = false;
    btn.style.backgroundColor = "blue";
  }
}
function ValidarTelefono(numero, campo, control) {
  if (numero.length < 10) {
    campo.classList.remove("is-valid");
    campo.classList.add("is-invalid");
    campo.innerHTML = "<p class='error'>Debe contener 10 digitos</p>";
    control.classList.add("is-invalid");
    btn.disabled = true;
    btn.style.backgroundColor = "gray";
  } else {
    btn.disabled = false;
  }
}
function ValidarEstado(valor) {
  var validacion = document.querySelector("select");
  if ((valor = !"")) {
    validacion.nextElementSibling.innerHTML = "<class='ok'>Excelente</p>";
    validacion.classList.remove("is-invalid");
    validacion.classList.add("is-valid");
    validacion.nextElementSibling.classList.add("is-invalid");
    btn.disabled = false;
    btn.style.backgroundColor = "blue";
  }
}
//El evento blur se produce cuando salimos de un campo
//El evento input se produce cada que se introduce un caracter
//El objeto e nos da informacion del evento que se a disparado
window.addEventListener("load", function () {
  btn.setAttribute("disabled", "true");
  btn.style.backgroundColor = "gray";
});
Nombre.addEventListener("input", function (e) {
  ValidarCampoVacio(e, cb1, control1);
  ValidarNumeros(e.target.value, cb1, control1);
});
Nombre.addEventListener("blur", function (e) {
  ValidarCampoVacio(e, cb1, control1);
  ValidarNumeros(e.target.value, cb1, control1);
});
Apellido.addEventListener("input", function (e) {
  ValidarCampoVacio(e, cb2, control2);
  ValidarNumeros(e.target.value, cb2, control2);
});
Apellido.addEventListener("blur", function (e) {
  ValidarCampoVacio(e, cb2, control2);
  ValidarNumeros(e.target.value, cb2, control2);
});
Telefono.addEventListener("input", function (e) {
  ValidarCampoVacio(e, cb3, control3);
  ValidarLetras(e.target.value, cb3, control3);
  ValidarTelefono(e.target.value, cb3, control3);
});
Telefono.addEventListener("blur", function (e) {
  ValidarCampoVacio(e, cb3, control3);
  ValidarLetras(e.target.value, cb3, control3);
  ValidarTelefono(e.target.value, cb3, control3);
});
Ciudad.addEventListener("input", function (e) {
  ValidarCampoVacio(e, cb4, control4);
  ValidarNumeros(e.target.value, cb4, control4);
});
Ciudad.addEventListener("blur", function (e) {
  ValidarCampoVacio(e, cb4, control4);
  ValidarNumeros(e.target.value, cb4, control4);
});
CodigoPostal.addEventListener("input", function (e) {
  ValidarCampoVacio(e, cb5, control5);
  ValidarLetras(e.target.value, cb5, control5);
});
CodigoPostal.addEventListener("blur", function (e) {
  ValidarCampoVacio(e, cb5, control5);
  ValidarLetras(e.target.value, cb5, control5);
});
Estado.addEventListener("change", function () {
  ValidarEstado(Estado.value);
});
Estado.addEventListener("blur", function () {
  ValidarEstado(Estado.value);
});
btn.addEventListener("click", function () {
  if (
    Nombre.value == "" ||
    Apellido.value == "" ||
    Estado == "" ||
    CodigoPostal == "" ||
    Ciudad == "" ||
    Telefono == ""
  ) {
    btn.disabled = true;
    btn.nextElementSibling.innerHTML="<p class='error'>Llena todos los campos</p>"
  } else {
    btn.disabled = false;
  }
});

