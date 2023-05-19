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
var bgsrc=document.getElementById('backdrop');
var subsrc=document.getElementById('subj');

var print=document.getElementById("printbtn");



var dmbtn = document.getElementById("dmbtn");
var lmbtn = document.getElementById("lmbtn");
var prbtn = document.getElementById("prbtn");

dmbtn.addEventListener("click", darkmoder);
lmbtn.addEventListener("click", lightmoder);
prbtn.addEventListener("click", prmoder);

var logoht = document.getElementById('ht');
var logocss = document.getElementById('css');
var logojs = document.getElementById('js');
var logoc = document.getElementById('c')
var logosql = document.getElementById('sql');
var elements = document.getElementsByClassName('textcontent');


logoht.addEventListener("mouseenter", hthoverer);
logoht.addEventListener("mouseleave", htunhoverer);

logocss.addEventListener("mouseenter", csshoverer);
logocss.addEventListener("mouseleave", cssunhoverer);

logojs.addEventListener("mouseenter", jshoverer);
logojs.addEventListener("mouseleave", jsunhoverer);


logoc.addEventListener("mouseenter", choverer);
logoc.addEventListener("mouseleave", cunhoverer);


logosql.addEventListener("mouseenter", sqlhoverer);
logosql.addEventListener("mouseleave", sqlunhoverer);

print.addEventListener("click",printer);

function printer(){
    var fileUrl = 'assets/images/res.docx';
  var printWindow = window.open(fileUrl, '_blank');
  
  printWindow.addEventListener('load', function() {
    printWindow.print();
  });
}


function hthoverer() {
    logoht.style.cursor = "pointer";
      var element = elements[0];
      element.style.color = '#ff5722';
      
    
    logoht.style.opacity='0.1';
    logocss.style.filter = "blur(3px)";
    logojs.style.filter = "blur(3px)";
    logoc.style.filter = "blur(3px)";
    logosql.style.filter = "blur(3px)";
};
function htunhoverer() {
    logoht.style.opacity='1';
    logocss.style.filter = "blur(0px)";
    logojs.style.filter = "blur(0px)";
    logoc.style.filter = "blur(0px)";
    logosql.style.filter = "blur(0px)";
}


function csshoverer() {
    logocss.style.cursor = "pointer";
    var element = elements[1];
    element.style.color = '#2196f3';
    logocss.style.opacity='0.1'
    logoht.style.filter = "blur(3px)";
    logojs.style.filter = "blur(3px)";
    logoc.style.filter = "blur(3px)";
    logosql.style.filter = "blur(3px)";
};
function cssunhoverer() {
    logocss.style.opacity='1'
    logoht.style.filter = "blur(0px)";
    logojs.style.filter = "blur(0px)";
    logoc.style.filter = "blur(0px)";
    logosql.style.filter = "blur(0px)";
}

function jshoverer() {
    logojs.style.opacity='0.1'
    var element = elements[2];
    element.style.color = '#ffdf00';
    logojs.style.cursor = "pointer";
    logoht.style.filter = "blur(3px)";
    logocss.style.filter = "blur(3px)";
    logoc.style.filter = "blur(3px)";
    logosql.style.filter = "blur(3px)";
};
function jsunhoverer() {
    logojs.style.opacity='1'
    logoht.style.filter = "blur(0px)";
    logocss.style.filter = "blur(0px)";
    logoc.style.filter = "blur(0px)";
    logosql.style.filter = "blur(0px)";
}


function choverer() {
    logoc.style.opacity='0.1';
    var element = elements[3];
    element.style.color = '#2196f3';
    logoc.style.cursor = "pointer";
    logoht.style.filter = "blur(3px)";
    logocss.style.filter = "blur(3px)";
    logojs.style.filter = "blur(3px)";
    logosql.style.filter = "blur(3px)";
};
function cunhoverer() {
    logoc.style.opacity='1'
    logoht.style.filter = "blur(0px)";
    logocss.style.filter = "blur(0px)";
    logojs.style.filter = "blur(0px)";
    logosql.style.filter = "blur(0px)";
}

function sqlhoverer() {
    logosql.style.opacity='0.1'
    var element = elements[4];
    element.style.color = '#0ae9fe';
    logosql.style.cursor = "pointer";
    logoht.style.filter = "blur(3px)";
    logocss.style.filter = "blur(3px)";
    logojs.style.filter = "blur(3px)";
    logoc.style.filter = "blur(3px)";
};
function sqlunhoverer() {
    logosql.style.opacity='1'
    logoht.style.filter = "blur(0px)";
    logocss.style.filter = "blur(0px)";
    logojs.style.filter = "blur(0px)";
    logoc.style.filter = "blur(0px)";
}




function darkmoder() {

    bgcolor.style.background = "linear-gradient( 170deg, hsl(0deg 0% 0%) 0%, hsl(344deg 0% 19%) 36%, hsl(344deg 0% 30%) 61%, hsl(344deg 0% 37%) 75%,hsl(344deg 0% 43%) 88%,hsl(0deg 0% 51%) 100%)";
    overlay.style.background = "linear-gradient(170deg, #000000 0%, #414141 74%)";
    overlay.style.opacity = ".50";
    sub.style.color = "white";
    heading.style.color = "white";
    yt.style.filter = "invert(100)";
    lkin.style.filter = "invert(100)";
    scrollTracker.style.backgroundColor = "white";
    bgsrc.src="/assets/images/bg.jpg";
    subsrc.src="/assets/images/subject.png";


}
function lightmoder() {

    bgcolor.style.background = " linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(145,145,145,1) 67%, rgba(0,0,0,1) 98%)";
    overlay.style.background = " linear-gradient(175deg, rgba(2, 0, 36, 1) 0%, rgb(69, 69, 70) 34%, rgba(172, 172, 172, 0.521) 100%)";
    sub.style.color = "black ";
    overlay.style.opacity = ".3";
    scrollTracker.style.backgroundColor = "aqua";
    heading.style.color = "black ";
    yt.style.filter = "invert(0)";
    lkin.style.filter = "invert(0)";
    var element = elements[4];
    element.style.color = '#0ae9fe';
    bgsrc.src="/assets/images/bg.jpg";
    subsrc.src="/assets/images/subject.png";
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
    bgsrc.src="/assets/images/bg pruple.jpg";
    subsrc.src="/assets/images/sub purple.png";
}



