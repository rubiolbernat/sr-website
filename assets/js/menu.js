document.querySelector(".bars_menu").addEventListener("click", animatebars);

var line1_bars = documen.querySelector(".line1_bars_menu");
var line2_bars = documen.querySelector(".line2_bars_menu");
var line3_bars = documen.querySelector(".line3_bars_menu");

function animatebars(){
    line1_bars.classList.toggle("active_line1_bars_menu");
    line2_bars.classList.toggle("active_line2_bars_menu");
    line3_bars.classList.toggle("active_line3_bars_menu");

    container_menu.classList.toggle("menu_active")
}