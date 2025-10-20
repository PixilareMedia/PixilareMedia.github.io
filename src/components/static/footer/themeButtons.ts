//Create all the variables for the needed elements.
let autoThemeButton: HTMLButtonElement;
let darkThemeButton: HTMLButtonElement;
let lightThemeButton: HTMLButtonElement;
let bodyList: DOMTokenList;

//The initialization function.
function themeButtonSetup() {
    //Check to see if the user has a theme preference.
    const theme = localStorage.getItem("theme");
    bodyList = document.body.classList;
    //If user has theme preference set to correct theme.
    if (theme) {
        bodyList.add(theme);
    }

    //Register the auto theme button.
    autoThemeButton = document.getElementById("autoThemeButton") as HTMLButtonElement;
    autoThemeButton.onclick = () => {
        changeTheme('auto');
    }

    //Register the dark theme button.
    darkThemeButton = document.getElementById("darkThemeButton") as HTMLButtonElement;
    darkThemeButton.onclick = () => {
        changeTheme('dark');
    }

    //Register the light theme button.
    lightThemeButton = document.getElementById("lightThemeButton") as HTMLButtonElement;
    lightThemeButton.onclick = () => {
        changeTheme('light');
    }
}

//Change theme function to allow dynamic changing of the site theme.
function changeTheme(newTheme: string) {
    //Check to see if the theme button is Light.
    if (newTheme === "light") {
        //Set the theme cookie to Light.
        localStorage.setItem("theme", "light");
        //Check to see if this is the first time the user has selected a theme.
        checkAdded(newTheme, "dark");
        //Check to see if the theme button is Dark.
    } else if (newTheme === "dark") {
        //Set the theme cookie to Dark.
        localStorage.setItem("theme", "dark");
        //Check to see if this is the first time the user has selected a theme.
        checkAdded(newTheme, "light");
        //Check to see if the theme button is Auto/Null/Undefined.
    } else {
        //Remove the theme cookie & class from the DOM.
        localStorage.removeItem("theme");
        document.body.classList.remove("light");
        document.body.classList.remove("dark");
    }
}

//Check theme added function to see the user has a theme cookie already.
function checkAdded(newTheme: string, oldTheme: string) {
    //Check to see if this is the first time the user has selected a theme.
    if (bodyList.value == oldTheme) {
        //Replace the old theme with the new theme.
        bodyList.replace(oldTheme, newTheme);
    } else {
        //Add the new theme to the DOM.
        bodyList.add(newTheme);
    }
}

//Export the initialization function.
export { themeButtonSetup }