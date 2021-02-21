document.addEventListener("DOMContentLoaded", prHiddenBlocks);

function prHiddenBlocks() {
  document.getElementById("prbdlw").style.display = "none";
  document.getElementById("prbsdlw").style.display = "none";
  document.getElementById("pradlw").style.display = "none";
}

function prbdlf() {
    var x = document.getElementById("prbdlw");
    if(x.style.display === "none") {
        prHiddenBlocks();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function prbsdlf() {
    var x = document.getElementById("prbsdlw");
    if(x.style.display === "none") {
        prHiddenBlocks();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function pradlf() {
    var x = document.getElementById("pradlw");
    if(x.style.display === "none") {
        prHiddenBlocks();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}