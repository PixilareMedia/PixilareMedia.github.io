//Create all the variables for th eneeded elements.
let topButton: HTMLButtonElement;

//The initialization function.
function topButtonSetup() {
    //Register the top button.
    topButton = document.getElementById("topButton") as HTMLButtonElement;
    topButton.onclick = () => {
        topFunction();
    };
}

//Top function moved the page back up to the top of the page.
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export { topButtonSetup };