const subMenu = document.querySelector(".main-navbar .sub-menu");
const menuBtn = document.querySelector(".main-navbar .main-menu>li:last-of-type");
menuBtn.addEventListener("click", () => {
    subMenu.classList.toggle("active");
})