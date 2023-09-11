const productContainers = [
  ...document.querySelectorAll(".carrusel__container"),
];
const nxtBtn = [...document.querySelectorAll(".carrusel__next")];
const preBtn = [...document.querySelectorAll(".carrusel__prev")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
