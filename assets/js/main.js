/*Setting the current year at the bottom of the page*/
document.addEventListener("DOMContentLoaded", currentYear);

function currnetYearFunction() {
    var y = new Date().getFullYear();
    document.getElementById("currentYear").textContent = y;
}

/*Back to top java script functions*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}