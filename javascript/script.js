let accMenu = document.querySelectorAll(".accordion__menu-title"),
  contentMenu = document.querySelectorAll(".accordion__menu-content");

accMenu.forEach((item, i) => {
  item.addEventListener("click", () => {
    accMenu[i].classList.toggle("active");

    let content = contentMenu[i];

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
    contentMenu.forEach((c, j) => {
      i != j &&
        ((c.style.maxHeight = null), accMenu[j].classList.remove("active"));
    });
  });
});

const img = document.querySelector(".slider-container");
const imgs = document.querySelectorAll(".slider-item");
const nextBtn = document.querySelector(".slider-btn__next");
const prevBtn = document.querySelector(".slider-btn__prev");

let idx = 0;

function changeImg() {
  if (idx > imgs.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = imgs.length - 1;
  }
  img.style.transform = `translateX(${-idx * 70}px)`;
}
nextBtn.addEventListener("click", () => {
  idx++;
  changeImg();
});
prevBtn.addEventListener("click", () => {
  idx--;
  changeImg();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "d") {
    idx++;
    changeImg();
  } else if (e.key == "a") {
    idx--;
    changeImg();
  }
});
