var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}


document.querySelector(".compare #compare-ip").addEventListener(
    "input", function (e) {
        document.querySelector(".compare .before .after").style.width = (+e.target.value) + "px";
    });

document.querySelector(".compare #compare-ip").addEventListener(
    "change", function (e) {
        document.querySelector(".compare .before .after").style.width = (+e.target.value) + "px";
    });