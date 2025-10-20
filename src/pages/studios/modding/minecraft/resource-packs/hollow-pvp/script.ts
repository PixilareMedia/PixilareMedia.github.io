//Create all the variables for th eneeded elements.
//Panel elements.
let downloads111xPanel: HTMLDivElement;
let downloads110xPanel: HTMLDivElement;
let downloads19xPanel: HTMLDivElement;
let downloads18xPanel: HTMLDivElement;
let downloads17xPanel: HTMLDivElement;
//Button elements.
let downloads111xButton: HTMLButtonElement;
let downloads110xButton: HTMLButtonElement;
let downloads19xButton: HTMLButtonElement;
let downloads18xButton: HTMLButtonElement;
let downloads17xButton: HTMLButtonElement;

//The initialization function.
function categoryButtonSetup() {
  //Register the 1.11.x Downloads Panel button.
  downloads111xPanel = document.getElementById("downloads-1-11") as HTMLDivElement;
  downloads111xButton = document.getElementById("downloads-1-11-button") as HTMLButtonElement;
  downloads111xButton.onclick = () => {
    openCloseDownloads(downloads111xPanel);
  }
  //Register the 1.10.x Downloads Panel button.
  downloads110xPanel = document.getElementById("downloads-1-10") as HTMLDivElement;
  downloads110xButton = document.getElementById("downloads-1-10-button") as HTMLButtonElement;
  downloads110xButton.onclick = () => {
    openCloseDownloads(downloads110xPanel);
  }
  //Register the 1.9.x Downloads Panel button.
  downloads19xPanel = document.getElementById("downloads-1-9") as HTMLDivElement;
  downloads19xButton = document.getElementById("downloads-1-9-button") as HTMLButtonElement;
  downloads19xButton.onclick = () => {
    openCloseDownloads(downloads19xPanel);
  }
  //Register the 1.8.x Downloads Panel button.
  downloads18xPanel = document.getElementById("downloads-1-8") as HTMLDivElement;
  downloads18xButton = document.getElementById("downloads-1-8-button") as HTMLButtonElement;
  downloads18xButton.onclick = () => {
    openCloseDownloads(downloads18xPanel);
  }
  //Register the 1.7.x Downloads Panel button.
  downloads17xPanel = document.getElementById("downloads-1-7") as HTMLDivElement;
  downloads17xButton = document.getElementById("downloads-1-7-button") as HTMLButtonElement;
  downloads17xButton.onclick = () => {
    openCloseDownloads(downloads17xPanel);
  }
}

//Hide the panels on load & when changing panel.
function hideDownloadsDivs() {
  downloads111xPanel.style.display = "none";
  downloads110xPanel.style.display = "none";
  downloads19xPanel.style.display = "none";
  downloads18xPanel.style.display = "none";
  downloads17xPanel.style.display = "none";
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
export { categoryButtonSetup, hideDownloadsDivs }