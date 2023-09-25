/*
Funcion para activar y desactivar el modo oscuro
*/

//Primero obtenemos nuestro boton "aceptar"
let boton = document.querySelector(".btn-primary");

//Le agregamos el evento "click"
boton.addEventListener("click", function () {
  var btn2 = document.querySelector(".btn-secondary");
  btn2.click();
  //Creamos variables globales con los elementos que vamos a modificar
  var explora = document.querySelectorAll("header ul li a")[0];
  var division = document.querySelectorAll("header ul li a")[1];
  var aprendere = document.querySelectorAll("header ul li a")[2];
  var inscribirme = document.querySelectorAll("header ul li a")[3];
  var btn_modo = document.querySelectorAll(".darkbutton")[0];
  var logo = document.querySelector("header .logo img");
  var img_logo = document.querySelectorAll("span")[0];
  var titulomodo = document.querySelector(".titulomodo");
  var contenidomodo = document.querySelector(".contenidomodo");
  var btnFunction = document.querySelector("div.btnFunction");
  //Obtenemos el elemento html
  let state = document.querySelector("html");
  //Obtenemos el modo en el que se encuentra
  let modo = state.getAttribute("data-bs-theme");

  //Si se encuentra en modo luz, modificamos propiedades
  if (modo === "light") {
    btn_modo.style.backgroundColor = "yellow";
    img_logo.innerHTML =
      "<i class='fa-solid fa-lightbulb fa-beat' style='color: #000000;'></i>";
    logo.setAttribute("src", "/Bootstrap/Imgs/LogoBlack.png");
    state.setAttribute("data-bs-theme", "dark");
    titulomodo.textContent = "Modo Claro";
    contenidomodo.textContent = "¿Activar el modo claro?";
    explora.style.color = "white";
    division.style.color = "white";
    aprendere.style.color = "white";
    inscribirme.style.color = "white";
    btnFunction.style.backgroundColor="black";
    console.info("modo oscuro");
  }
  //Si se encuentra en modo oscuro, modificamos propiedades.
  else if (modo === "dark") {
    btn_modo.style.backgroundColor = "black";
    img_logo.innerHTML = "<i class='fa-solid fa-moon fa-beat'></i>";
    logo.setAttribute("src", "/Bootstrap/Imgs/Logo.png");
    state.setAttribute("data-bs-theme", "light");
    titulomodo.textContent = "Modo Oscuro";
    contenidomodo.textContent = "¿Activar el modo oscuro?";
    explora.style.color = "black";
    division.style.color = "black";
    aprendere.style.color = "black";
    inscribirme.style.color = "black";
    btnFunction.style.backgroundColor="gray";

    console.info("modo luz");
  } else {
    console.log("error");
  }
});
