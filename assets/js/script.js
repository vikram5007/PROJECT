const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
hiddenElements.forEach((el) => observer.observe(el));


import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
const scrollTracker = document.querySelector('.scroll-tracker');
const timeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});
scrollTracker.animate(
    {
        transform: ['scaleX(0)', 'scaleX(1)']
    },
    {
        duration: 1,
        timeline: timeline,
    }
);


var bgcolor = document.getElementById("b1");
var overlay = document.getElementById("childoverlay");
var sub = document.getElementById("sub");
var heading = document.getElementById("childheading");
var yt = document.getElementById("childyt");
var lkin = document.getElementById("ig");


var dmbtn = document.getElementById("dmbtn");
var lmbtn = document.getElementById("lmbtn");
var prbtn = document.getElementById("prbtn");

dmbtn.addEventListener("click", darkmoder);
lmbtn.addEventListener("click", lightmoder);
prbtn.addEventListener("click", prmoder);

var logoht=document.getElementById('ht');
logoht.addEventListener("click",hoverer);

function hoverer(){
              
 alert("hello there");
};



function darkmoder() {

    bgcolor.style.background = "linear-gradient( 170deg, hsl(0deg 0% 0%) 0%, hsl(344deg 0% 19%) 36%, hsl(344deg 0% 30%) 61%, hsl(344deg 0% 37%) 75%,hsl(344deg 0% 43%) 88%,hsl(0deg 0% 51%) 100%)";
    overlay.style.background = "linear-gradient(170deg, #000000 0%, #414141 74%)";
    overlay.style.opacity = ".50";
    sub.style.color = "white";
    heading.style.color = "white";
    yt.style.filter = "invert(100)";
    lkin.style.filter = "invert(100)";
    scrollTracker.style.backgroundColor = "white";


}
function lightmoder() {

    bgcolor.style.background = " linear-gradient(165deg,hsl(0deg 0% 100%) 0%,hsl(344deg 0% 67%) 23%,hsl(344deg 0% 47%) 55%,hsl(344deg 0% 33%) 75%,hsl(344deg 0% 19%) 88%,hsl(0deg 0% 0%) 100%)";
    overlay.style.background = " linear-gradient(175deg, rgba(2, 0, 36, 1) 0%, rgb(69, 69, 70) 34%, rgba(172, 172, 172, 0.521) 100%)";
    sub.style.color = "black ";
    overlay.style.opacity = ".3";
    scrollTracker.style.backgroundColor = "aqua";
    heading.style.color = "black ";
    yt.style.filter = "invert(0)";
    lkin.style.filter = "invert(0)";
}

function prmoder() {
    bgcolor.style.background = "linear-gradient(175deg, rgba(2, 0, 36, 1) 0%, rgba(42, 27, 61, 1) 34%, #44348d 100%)";
    overlay.style.background = "linear-gradient(175deg, rgba(2, 0, 36, 1) 0%, rgba(42, 27, 61, 1) 34%, rgba(68, 52, 141, 1) 100%)";
    sub.style.color = "rgba(245, 245, 245, 0.596)";
    overlay.style.opacity = ".3";
    heading.style.color = "white";
    yt.style.filter = "invert(100)";
    lkin.style.filter = "invert(100)";
    scrollTracker.style.backgroundColor = "#a200ff";
}



