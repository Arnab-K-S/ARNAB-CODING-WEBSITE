const checkpoint = 300;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
    document.querySelector("").style.opacity = opacity;
});

document.getElementById("html").addEventListener("click",function(){
    window.open("html.html");
})