document.addEventListener("DOMContentLoaded", vars);

var DL;
var ML;
var ADL;
var BDL;
var BSDL;

function vars() {
    DL = document.getElementById("pr-downloads");
    ML = document.getElementById("pr-mod-list");
    ADL = document.getElementById("pr-alpha-downloads");
    BDL = document.getElementById("pr-beta-downloads");
    BSDL = document.getElementById("pr-beta-server-downloads");
    hideLists();
    hideDownloads();
}

function hideLists() {
    DL.style.display = "none";
    ML.style.display = "none";
}

function hideDownloads() {
    ADL.style.display = "none";
    BDL.style.display = "none";
    BSDL.style.display = "none";
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
            hideDownloads();
            name.style.display = "block";
        } else {
            name.style.display = "none";
        }
    }
}