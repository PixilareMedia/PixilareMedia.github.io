document.addEventListener("DOMContentLoaded", vars);

var DL7;
var DL8;
var DL9;
var DL10;
var DL11;

function vars() {
    DL7 = document.getElementById("hp-1.7-downloads");
    DL8 = document.getElementById("hp-1.8-downloads");
    DL9 = document.getElementById("hp-1.9-downloads");
    DL10 = document.getElementById("hp-1.10-downloads");
    DL11 = document.getElementById("hp-1.11-downloads");
    hideDownloads();
}

function hideDownloads() {
  DL7.style.display = "none";
  DL8.style.display = "none";
  DL9.style.display = "none";
  DL10.style.display = "none";
  DL11.style.display = "none";
}

function openClose(name) {
    if(name.style.display === "none") {
        hideDownloads();
        name.style.display = "block";
    } else {
        name.style.display = "none";
    }
}