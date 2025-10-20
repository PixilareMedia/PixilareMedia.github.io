//Create all the variables for th eneeded elements.
//Panel elements.
let navigationCompanyPanel: HTMLDivElement;
let navigationStudiosInteractivePanel: HTMLDivElement;
let navigationStudiosModdingPanel: HTMLDivElement;
let navigationStudiosSoftworksPanel: HTMLDivElement;
let navigationEntertainmentAnimationPanel: HTMLDivElement;
let navigationEntertainmentComicsPanel: HTMLDivElement;
let navigationEntertainmentPicturesPanel: HTMLDivElement;
//Button elements.
let navigationCompanyButton: HTMLButtonElement;
let navigationStudiosInteractiveButton: HTMLButtonElement;
let navigationStudiosModdingButton: HTMLButtonElement;
let navigationStudiosSoftworksButton: HTMLButtonElement;
let navigationEntertainmentAnimationButton: HTMLButtonElement;
let navigationEntertainmentComicsButton: HTMLButtonElement;
let navigationEntertainmentPicturesButton: HTMLButtonElement;

//The initialization function.
function categoryButtonSetup() {
  //Register the Pixilare Panel button.
  navigationCompanyPanel = document.getElementById("navigation-company") as HTMLDivElement;
  navigationCompanyButton = document.getElementById("navigation-company-button") as HTMLButtonElement;
  navigationCompanyButton.onclick = () => {
    openClose(navigationCompanyPanel);
  }

  //Register the Interactive Panel button.
  navigationStudiosInteractivePanel = document.getElementById("navigation-studios-interactive") as HTMLDivElement;
  navigationStudiosInteractiveButton = document.getElementById("navigation-studios-interactive-button") as HTMLButtonElement;
  navigationStudiosInteractiveButton.onclick = () => {
    openClose(navigationStudiosInteractivePanel);
  }

  //Register the Modding Panel button.
  navigationStudiosModdingPanel = document.getElementById("navigation-studios-modding") as HTMLDivElement;
  navigationStudiosModdingButton = document.getElementById("navigation-studios-modding-button") as HTMLButtonElement;
  navigationStudiosModdingButton.onclick = () => {
    openClose(navigationStudiosModdingPanel);
  }

  //Register the Softworks Panel button.
  navigationStudiosSoftworksPanel = document.getElementById("navigation-studios-softworks") as HTMLDivElement;
  navigationStudiosSoftworksButton = document.getElementById("navigation-studios-softworks-button") as HTMLButtonElement;
  navigationStudiosSoftworksButton.onclick = () => {
    openClose(navigationStudiosSoftworksPanel);
  }

  //Register the Animation Panel button.
  navigationEntertainmentAnimationPanel = document.getElementById("navigation-entertainment-animation") as HTMLDivElement;
  navigationEntertainmentAnimationButton = document.getElementById("navigation-entertainment-animation-button") as HTMLButtonElement;
  navigationEntertainmentAnimationButton.onclick = () => {
    openClose(navigationEntertainmentAnimationPanel);
  }

  //Register the Comics Panel button.
  navigationEntertainmentComicsPanel = document.getElementById("navigation-entertainment-comics") as HTMLDivElement;
  navigationEntertainmentComicsButton = document.getElementById("navigation-entertainment-comics-button") as HTMLButtonElement;
  navigationEntertainmentComicsButton.onclick = () => {
    openClose(navigationEntertainmentComicsPanel);
  }

  //Register the Pictures Panel button.
  navigationEntertainmentPicturesPanel = document.getElementById("navigation-entertainment-pictures") as HTMLDivElement;
  navigationEntertainmentPicturesButton = document.getElementById("navigation-entertainment-pictures-button") as HTMLButtonElement;
  navigationEntertainmentPicturesButton.onclick = () => {
    openClose(navigationEntertainmentPicturesPanel);
  }
}

//Hide the panels on load 7 when changing panel.
function hideNavigationDivs() {
  navigationCompanyPanel.style.display = "none";
  navigationStudiosInteractivePanel.style.display = "none";
  navigationStudiosModdingPanel.style.display = "none";
  navigationStudiosSoftworksPanel.style.display = "none";
  navigationEntertainmentAnimationPanel.style.display = "none";
  navigationEntertainmentComicsPanel.style.display = "none";
  navigationEntertainmentPicturesPanel.style.display = "none";
}

//Open the specified panel & close all of the other ones.
function openClose(panel:HTMLDivElement) {
  //Checks to see what the current display style is.
  if (panel.style.display === "none") {
    //Hide all sub panels.
    hideNavigationDivs();
    //Show the spcified panel.
    panel.style.display = "block";
  } else {
    //Hide the spcified panel.
    panel.style.display = "none"
  }
}

//Export the initialization functions.
export { categoryButtonSetup, hideNavigationDivs }