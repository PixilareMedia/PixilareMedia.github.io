//Create all the variables for th eneeded elements.
let currentYear: HTMLSpanElement;

//The initialization function.
function currentYearSetup() {
    //Get the current year so we can have the correct copyright.
    const year: string = new Date().getFullYear().toString();

    //Set the current year into the copyright field.
    currentYear = document.getElementById("currentYear") as HTMLSpanElement;
    currentYear.textContent = year;
}

export { currentYearSetup };