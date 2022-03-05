let btn_prev = document.querySelector(".prev");
let btn_next = document.querySelector(".next");

let images = document.querySelectorAll(".photos img"); //массив картинок

let i = 0; // номер текущей картинки, на экране

images[i].style.display = "block"; // первая картинка видна

btn_next.onclick = function () {
  images[i].style.display = "none";
  i++; // увеличиваем переменную i на единицу
  if (i >= images.length) {
    i = 0;
  }
  images[i].style.display = "block";
};

btn_prev.onclick = function () {
  images[i].style.display = "none";
  i = i - 1; //отнимаем 1
  if (i < 0) {
    i = images.length - 1;
  }
  images[i].style.display = "block";
};
