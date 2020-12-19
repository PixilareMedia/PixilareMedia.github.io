document.addEventListener("DOMContentLoaded", pvHiddenBlocks);

function pvHiddenBlocks() {
  document.getElementById("pvbdlw").style.display = "none";
}

function pvbdlf() {
    var x = document.getElementById("pvbdlw");
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}