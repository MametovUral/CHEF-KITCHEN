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
