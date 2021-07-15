document.addEventListener("DOMContentLoaded", vars);

var DL;
var ML;
var BDL;

function vars() {
    DL = document.getElementById("pv-downloads");
    ML = document.getElementById("pv-mod-list");
    BDL = document.getElementById("pv-beta-downloads");
    hideLists();
    hideDownloads();
}

function hideLists() {
    DL.style.display = "none";
    ML.style.display = "none";
}

function hideDownloads() {
    BDL.style.display = "none";
}

function openClose(name) {
    if(name === DL || name === ML) {
        if(name.style.display === "none") {
            hideLists();
            name.style.display = "block";
        } else {
            name.style.display = "none";
        }
    } else {
        if(name.style.display === "none") {
            name.style.display = "block";
        } else {
            name.style.display = "none";
        }
    }
}