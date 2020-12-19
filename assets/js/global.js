document.addEventListener("DOMContentLoaded", currentYear);

function currentYear() {
    var y = new Date().getFullYear();
    document.getElementById("currentYear").textContent = y;
}