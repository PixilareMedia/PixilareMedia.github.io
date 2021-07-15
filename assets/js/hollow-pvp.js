document.addEventListener("DOMContentLoaded", vars);

var DL7;
var DL8;
var DL9;
var DL10;
var DL11;
var DL12;
var DL13;
var DL14;
var DL15;
var DL16;
var DL17;

function vars() {
    DL7 = document.getElementById("hp-1.7-downloads");
    DL8 = document.getElementById("hp-1.8-downloads");
    DL9 = document.getElementById("hp-1.9-downloads");
    DL10 = document.getElementById("hp-1.10-downloads");
    DL11 = document.getElementById("hp-1.11-downloads");
    DL12 = document.getElementById("hp-1.12-downloads");
    DL13 = document.getElementById("hp-1.13-downloads");
    DL14 = document.getElementById("hp-1.14-downloads");
    DL15 = document.getElementById("hp-1.15-downloads");
    DL16 = document.getElementById("hp-1.16-downloads");
    DL17 = document.getElementById("hp-1.17-downloads");
    hideDownloads();
}

function hideDownloads() {
  DL7.style.display = "none";
  DL8.style.display = "none";
  DL9.style.display = "none";
  DL10.style.display = "none";
  DL11.style.display = "none";
  DL12.style.display = "none";
  DL13.style.display = "none";
  DL14.style.display = "none";
  DL15.style.display = "none";
  DL16.style.display = "none";
  DL17.style.display = "none";
}

function openClose(name) {
    if(name.style.display === "none") {
        hideDownloads();
        name.style.display = "block";
    } else {
        name.style.display = "none";
    }
}