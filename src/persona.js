const ButtonCol = document.querySelector(".button__personalisation");
const ButtonTorse = document.querySelector(".button__Torse");
const ButtonManches = document.querySelector(".button__Manches");
const Col = document.querySelector(".Col");
const Torse = document.querySelector(".Torse");
const Manches = document.querySelector(".Manches");
const Taille = document.querySelector(".button__Letters");
const XS = document.querySelector(".XS");
const S = document.querySelector(".S");
const M = document.querySelector(".M");
const L = document.querySelector(".L");
const XL = document.querySelector(".XL");

//Choix des Parametre
let root = document.documentElement;
//Boutton couleurs de col
const Colwhite = document.querySelector(".color__Col--white");
const Colgreen = document.querySelector(".color__Col--green");
const Colyellow = document.querySelector(".color__Col--yellow");
const Colred = document.querySelector(".color__Col--red");
const Colblue = document.querySelector(".color__Col--blue");
const Colpurple = document.querySelector(".color__Col--purple");
//Boutton couleurs de Torse
const Torsewhite = document.querySelector(".color__Torse--white");
const Torsegreen = document.querySelector(".color__Torse--green");
const Torseyellow = document.querySelector(".color__Torse--yellow");
const Torsered = document.querySelector(".color__Torse--red");
const Torseblue = document.querySelector(".color__Torse--blue");
const Torsepurple = document.querySelector(".color__Torse--purple");
//Boutton couleurs de Manches
const Mancheswhite = document.querySelector(".color__Manches--white");
const Manchesgreen = document.querySelector(".color__Manches--green");
const Manchesyellow = document.querySelector(".color__Manches--yellow");
const Manchesred = document.querySelector(".color__Manches--red");
const Manchesblue = document.querySelector(".color__Manches--blue");
const Manchespurple = document.querySelector(".color__Manches--purple");
//TAILLES
XS.addEventListener("click", function() {
  XS.classList.toggle("border");
  if (
    S.classList != "border" ||
    M.classList != "border" ||
    L.classList != "border" ||
    XL.classList != "border"
  ) {
    S.classList.remove("border");
    M.classList.remove("border");
    L.classList.remove("border");
    XL.classList.remove("border");
  }
});

S.addEventListener("click", function() {
  S.classList.toggle("border");
  if (
    XS.classList != "border" ||
    M.classList != "border" ||
    L.classList != "border" ||
    XL.classList != "border"
  ) {
    XS.classList.remove("border");
    M.classList.remove("border");
    L.classList.remove("border");
    XL.classList.remove("border");
  }
});
M.addEventListener("click", function() {
  M.classList.toggle("border");
  if (
    S.classList != "border" ||
    XS.classList != "border" ||
    L.classList != "border" ||
    XL.classList != "border"
  ) {
    S.classList.remove("border");
    XS.classList.remove("border");
    L.classList.remove("border");
    XL.classList.remove("border");
  }
});
L.addEventListener("click", function() {
  L.classList.toggle("border");
  if (
    S.classList != "border" ||
    M.classList != "border" ||
    XS.classList != "border" ||
    XL.classList != "border"
  ) {
    S.classList.remove("border");
    M.classList.remove("border");
    XS.classList.remove("border");
    XL.classList.remove("border");
  }
});
XL.addEventListener("click", function() {
  XL.classList.toggle("border");
  if (
    S.classList != "border" ||
    M.classList != "border" ||
    L.classList != "border" ||
    XS.classList != "border"
  ) {
    S.classList.remove("border");
    M.classList.remove("border");
    L.classList.remove("border");
    XS.classList.remove("border");
  }
});

//BUTTON SELECTION
ButtonCol.addEventListener("click", function() {
  Col.classList.toggle("hidden");
  if (Torse.classList != "hidden" || Manches.classList != "hidden") {
    Torse.classList.add("hidden");
    Manches.classList.add("hidden");
  }
});

ButtonTorse.addEventListener("click", function() {
  Torse.classList.toggle("hidden");
  if (Col.classList != "hidden" || Manches.classList != "hidden") {
    Col.classList.add("hidden");
    Manches.classList.add("hidden");
  }
});

ButtonManches.addEventListener("click", function() {
  Manches.classList.toggle("hidden");
  if (Torse.classList != "hidden" || Manches.classList != "hidden") {
    Torse.classList.add("hidden");
    Col.classList.add("hidden");
  }
});

//root.style.setProperty('--mouse-x', e.clientX + "px");

//Boutton couleurs de col
Colwhite.addEventListener("click", function() {
  root.style.setProperty("--third-bg-color", "white");
});

Colgreen.addEventListener("click", function() {
  root.style.setProperty("--third-bg-color", "lightgreen");
});
Colyellow.addEventListener("click", function() {
  root.style.setProperty("--third-bg-color", "lightyellow");
});
Colred.addEventListener("click", function() {
  root.style.setProperty("--third-bg-color", "red");
});
Colblue.addEventListener("click", function() {
  root.style.setProperty("--third-bg-color", "lightcyan");
});

Colpurple.addEventListener("click", function() {
  root.style.setProperty("--third-bg-color", "purple");
});

//Boutton couleurs de Torse
Torsewhite.addEventListener("click", function() {
  root.style.setProperty("--main-bg-color", "white");
});

Torsegreen.addEventListener("click", function() {
  root.style.setProperty("--main-bg-color", "lightgreen");
});
Torseyellow.addEventListener("click", function() {
  root.style.setProperty("--main-bg-color", "lightyellow");
});
Torsered.addEventListener("click", function() {
  root.style.setProperty("--main-bg-color", "red");
});
Torseblue.addEventListener("click", function() {
  root.style.setProperty("--main-bg-color", "lightcyan");
});
Torsepurple.addEventListener("click", function() {
  root.style.setProperty("--main-bg-color", "purple");
});

//Boutton couleurs de Manches
Mancheswhite.addEventListener("click", function() {
  root.style.setProperty("--second-bg-color", "white");
});

Manchesgreen.addEventListener("click", function() {
  root.style.setProperty("--second-bg-color", "lightgreen");
});
Manchesyellow.addEventListener("click", function() {
  root.style.setProperty("--second-bg-color", "lightyellow");
});
Manchesred.addEventListener("click", function() {
  root.style.setProperty("--second-bg-color", "red");
});
Manchesblue.addEventListener("click", function() {
  root.style.setProperty("--second-bg-color", "lightcyan");
});
Manchespurple.addEventListener("click", function() {
  root.style.setProperty("--second-bg-color", "purple");
});
