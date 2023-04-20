document.addEventListener("DOMContentLoaded", startup);

function startup() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    elmnt.removeAttribute("include-html");
                    startup();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
    var year = new Date().getFullYear();
    var version = "v3.13";
    document.getElementById("currentYear").textContent = year;
    document.getElementById("siteVersion").textContent = version;
}

const themeButton = document.getElementById("themeBtn");
const body = document.body;
const theme = localStorage.getItem('theme');
var currentTheme = theme;
if(theme){
    body.classList.add(theme);
}
themeButton.onclick = () => {
    if(currentTheme === 'light')
    {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
        currentTheme = 'dark';
    } else {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
        currentTheme = 'light';
    }
}

const topButton = document.getElementById("topBtn");
window.onscroll = () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}
topButton.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}