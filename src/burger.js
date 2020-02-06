var menuOn = document.querySelector(".content .content__Burger");
var open = document.querySelector(".content__menu");
menuOn.addEventListener("click", function() {
  open.classList.toggle("content__menu--menuOn");
});
var hiden = document.querySelector(".content__menu ul");
menuOn.addEventListener("click", function() {
  hiden.classList.toggle("content__menu__ul--hiden");
});

var anime1 = document.querySelector(".Burger__line1");
var anime2 = document.querySelector(".Burger__line2");
var anime3 = document.querySelector(".Burger__line3");

menuOn.addEventListener("click", function() {
  anime1.classList.toggle("Burger__line1--anime");
  anime2.classList.toggle("Burger__line2--anime");
  anime3.classList.toggle("Burger__line3--anime");
});
