//Seleccionamos los elementos que vamos a ocupar
var btn = document.querySelector("div.ham i.fa-bars");
var ham = document.querySelector("div.btnFunction");
var chk = document.querySelector("input");
var html = document.querySelector("html");
var opt1 = document.querySelectorAll(".options")[0];
var opt2 = document.querySelectorAll(".options")[1];
var opt3 = document.querySelectorAll(".options")[2];
var opt4 = document.querySelectorAll(".options")[3];
var opt5 = document.querySelectorAll(".options")[4];

//Agregamos el evento click
btn.addEventListener("click", function () {
  /*Al dar click se alterna la clase que permite visualizar 
    el menu del hamburger button*/

  ham.classList.toggle("btnoff");

  //Esto sirve para cambiar el icono de abrir y cerrar
  chk.click();

  if (chk.checked) {
    html.style.overflowY = "hidden";
    btn.setAttribute("class", "fa-solid fa-xmark");
  } else {
    html.style.overflowY = "scroll";
    btn.setAttribute("class", "fa-solid fa-bars");
  }
});
opt1.addEventListener("click", function () {
  ham.classList.toggle("btnoff");
  chk.click();

  if (chk.checked) {
    html.style.overflowY = "hidden";
    btn.setAttribute("class", "fa-solid fa-xmark");
  } else {
    html.style.overflowY = "scroll";
    btn.setAttribute("class", "fa-solid fa-bars");
  }
});

opt2.addEventListener("click", function () {
  ham.classList.toggle("btnoff");
  chk.click();

  if (chk.checked) {
    html.style.overflowY = "hidden";
    btn.setAttribute("class", "fa-solid fa-xmark");
  } else {
    html.style.overflowY = "scroll";
    btn.setAttribute("class", "fa-solid fa-bars");
  }
});

opt3.addEventListener("click", function () {
  ham.classList.toggle("btnoff");
  chk.click();

  if (chk.checked) {
    html.style.overflowY = "hidden";
    btn.setAttribute("class", "fa-solid fa-xmark");
  } else {
    html.style.overflowY = "scroll";
    btn.setAttribute("class", "fa-solid fa-bars");
  }
});

opt4.addEventListener("click", function () {
  ham.classList.toggle("btnoff");
  chk.click();

  if (chk.checked) {
    html.style.overflowY = "hidden";
    btn.setAttribute("class", "fa-solid fa-xmark");
  } else {
    html.style.overflowY = "scroll";
    btn.setAttribute("class", "fa-solid fa-bars");
  }
});

opt5.addEventListener("click", function () {
  ham.classList.toggle("btnoff");
  chk.click();

  if (chk.checked) {
    html.style.overflowY = "hidden";
    btn.setAttribute("class", "fa-solid fa-xmark");
  } else {
    html.style.overflowY = "scroll";
    btn.setAttribute("class", "fa-solid fa-bars");
  }
});
