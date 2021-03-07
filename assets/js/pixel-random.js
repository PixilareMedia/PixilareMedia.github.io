document.addEventListener("DOMContentLoaded", prHiddenBlocks);

function prHiddenBlocks() {
    document.getElementById("prdownloadsw").style.display = "none";
    document.getElementById("prmodlistw").style.display = "none";
    prDownloadHiddenBlocks();
}

function prDownloadHiddenBlocks() {
    document.getElementById("prbdlw").style.display = "none";
    document.getElementById("prbsdlw").style.display = "none";
    document.getElementById("pradlw").style.display = "none";
}

function prdownloadsf() {
    var x = document.getElementById("prdownloadsw");
    if(x.style.display === "none") {
        document.getElementById("prmodlistw").style.display = "none";
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function prmodlistf() {
    var x = document.getElementById("prmodlistw");
    if(x.style.display === "none") {
        document.getElementById("prdownloadsw").style.display = "none";
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function prbdlf() {
    var x = document.getElementById("prbdlw");
    if(x.style.display === "none") {
        prDownloadHiddenBlocks();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function prbsdlf() {
    var x = document.getElementById("prbsdlw");
    if(x.style.display === "none") {
        prDownloadHiddenBlocks();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function pradlf() {
    var x = document.getElementById("pradlw");
    if(x.style.display === "none") {
        prDownloadHiddenBlocks();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}