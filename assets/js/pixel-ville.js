document.addEventListener("DOMContentLoaded", pvHiddenBlocks);

function pvHiddenBlocks() {
    document.getElementById("pvdownloadsw").style.display = "none";
    document.getElementById("pvmodlistw").style.display = "none";
    document.getElementById("pvbdlw").style.display = "none";
}

function pvdownloadsf() {
    document.getElementById("pvmodlistw").style.display = "none";
    var x = document.getElementById("pvdownloadsw");
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function pvmodlistf() {
    document.getElementById("pvdownloadsw").style.display = "none";
    var x = document.getElementById("pvmodlistw");
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function pvbdlf() {
    var x = document.getElementById("pvbdlw");
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}