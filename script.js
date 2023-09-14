/* --------- FUNCION CARRUSEL 1 --------- */

const carrusel = document.querySelector(".carrusel__container");
const nxtBtn = document.querySelector(".carrusel__next");
const preBtn = document.querySelector(".carrusel__prev");

nxtBtn.addEventListener("click", () => {
  carrusel.scrollLeft += carrusel.offsetWidth;
});

preBtn.addEventListener("click", () => {
  carrusel.scrollLeft -= carrusel.offsetWidth;
});

/* --------- FUNCION CARRUSEL 2 --------- */

const carruselS = document.querySelector(".carrusel__container-small");
const nxtBtnS = document.querySelector(".carrusel__next-small");

nxtBtnS.addEventListener("click", () => {
  carruselS.scrollLeft += carruselS.offsetWidth;
});

/* --------- FUNCION CARRUSEL 3 --------- */

const carruselTres = document.getElementById("carrusel-3");
const nxtBtnTres = document.getElementById("nxt3");
const preBtnTres = document.getElementById("prev3");

nxtBtnTres.addEventListener("click", () => {
  carruselTres.scrollLeft += carruselTres.offsetWidth;
});

preBtnTres.addEventListener("click", () => {
  carruselTres.scrollLeft -= carruselTres.offsetWidth;
});

/* --------- FUNCION El deporte es para todos --------- */

const carruselL = document.querySelector(".carrusel__container-gap-16");
const nxtBtnL = document.getElementById("nxtL");
const preBtnL = document.getElementById("prevL");

nxtBtnL.addEventListener("click", () => {
  carruselL.scrollLeft += carruselL.offsetWidth;
});

preBtnL.addEventListener("click", () => {
  carruselL.scrollLeft -= carruselL.offsetWidth;
});
