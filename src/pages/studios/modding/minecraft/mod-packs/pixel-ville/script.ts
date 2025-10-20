//Create all the variables for th eneeded elements.
//Panel elements.
let downloadsPanel: HTMLDivElement;
let downloadsBetaPanel: HTMLDivElement;
let modsListPanel: HTMLDivElement;
//Button elements.
let downloadsButton: HTMLButtonElement;
let downloadsBetaButton: HTMLButtonElement;
let modsListButton: HTMLButtonElement;

//The initialization function.
function categoryButtonSetup() {
  //Register the Downloads Panel button.
  downloadsPanel = document.getElementById("downloads") as HTMLDivElement;
  downloadsButton = document.getElementById("downloads-button") as HTMLButtonElement;
  downloadsButton.onclick = () => {
    openClose(downloadsPanel);
  }
  //Register the Mods List Panel button.
  modsListPanel = document.getElementById("mods-list") as HTMLDivElement;
  modsListButton = document.getElementById("mods-list-button") as HTMLButtonElement;
  modsListButton.onclick = () => {
    openClose(modsListPanel);
  }
  //Register the Beta Downloads Panel button.
  downloadsBetaPanel = document.getElementById("downloads-beta") as HTMLDivElement;
  downloadsBetaButton = document.getElementById("downloads-beta-button") as HTMLButtonElement;
  downloadsBetaButton.onclick = () => {
    openCloseDownloads(downloadsBetaPanel);
  }
}

//Hide the panels on load & when changing panel.
function hideCatagoryDivs() {
  downloadsPanel.style.display = "none";
  downloadsBetaPanel.style.display = "none";
  modsListPanel.style.display = "none";
}
function hideDownloadsDivs() {
  downloadsBetaPanel.style.display = "none";
}

//Open the specified panel & close all of the other ones.
function openClose(panel:HTMLDivElement) {
  //Checks to see what the current display style is.
  if (panel.style.display === "none") {
    //Hide all sub panels.
    hideCatagoryDivs();
    //Show the spcified panel.
    panel.style.display = "block";
  } else {
    //Hide the spcified panel.
    panel.style.display = "none"
  }
}
function openCloseDownloads(panel:HTMLDivElement) {
  //Checks to see what the current display style is.
  if (panel.style.display === "none") {
    //Hide all sub panels.
    hideDownloadsDivs();
    //Show the spcified panel.
    panel.style.display = "block";
  } else {
    //Hide the spcified panel.
    panel.style.display = "none"
  }
}

//Export the initialization functions.
export { categoryButtonSetup, hideCatagoryDivs }