const dropBtn = document.getElementById("btn");
const dropMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");



const toggleDropdown = () => {
    dropMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};

dropBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
});

document.documentElement.addEventListener("click", () => {
    if (dropMenu.classList.contains("show")) {
        toggleDropdown();
    }
});