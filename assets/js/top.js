window.onscroll = function() {scrollTrigger()};

function scrollTrigger() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

function topScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}