// Your code goes here

//load
window.addEventListener("load", function(event){
    alert("Welcome to your new home, stay a while...");
})

//close
window.addEventListener("close", function(event){
    event.preventDefault();
    alert(`Why are you leaving?`);
}, false);

//resize
window.addEventListener("resize", function(){
    TweenMax.to(".img1", 1, {scale: .9} );
})

//scroll
window.addEventListener("scroll", function(event){
    const random = e.timeStamp % 256 * Math.random();
    document.body.style.background = `rgba(${random}, ${random}, ${random}, 0.3`;
    console.log(e.timeStamp % 256 * Math.random())
}) 

//keyup
const body = document.querySelector("body");
body.addEventListener("keyup", function (){
    body.style.backgroundColor = "yellow";
})

//dblclick
const stop = document.querySelector('h1');
stop.addEventListener('dblclick', (event) => {
  alert("Welcome to the Fun Bus!")
});

//mouseover
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("mouseover", function (event){
    event.target.style.background = "black";
})

//mouseleave
btn1.addEventListener("mouseleave", function (event){
    event.target.style.background = "#17A2B8";
})

//click
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function (event){
    event.target.style.background = "red";
})

//mouseover
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("mouseover", function (event){
    event.target.style.background = "black";
})

//mouseleave
btn3.addEventListener("mouseleave", function (event){
    event.target.style.background = "#17A2B8";
})

//copy
let text = document.querySelector("#text");
text.addEventListener("copy", function (event){
    alert("What are you trying to do there????");
})

//fullscreen
document.addEventListener("fullscreenchange", (event) => {
    if (document.fullscreenElement) {
        console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
    } else {
        console.log("Leaving full-screen mode.");
    }
});

//mouseup
const img1 = document.querySelector("#img1");
img1.addEventListener("mouseup", function(event){
    event.target.style.opacity = '2';
});
//dblclick
img1.addEventListener('dblclick', (event) => {
    alert("Keep Scrolling...")
  });
//mouseout
const img2 = document.querySelector("#img2");
img2.addEventListener("mouseout", function(event){
    event.target.style.border = '2rem solid #17A2B8';
});
const img3 = document.querySelector("#img3");
img3.addEventListener("mouseout", function(event){
    event.target.style.border = '2rem solid #17A2B8';
});
const img4 = document.querySelector("#img4");
img4.addEventListener("mouseout", function(event){
    event.target.style.border = '2rem solid #17A2B8';
});

//dblclick
img4.addEventListener('dblclick', (event) => {
    alert("Would like like to come here?")
  });

//mouseup
img4.addEventListener("mouseup", function(event){
    event.target.style.opacity = '2';
});

//drag
let footer = document.querySelector(".footer");
footer.addEventListener('drag', (event) => {
    event.preventDefault();
  })

//keydown
footer.addEventListener('keydown', (event) => {
    event.preventDefault();
  })

//mouseover
footer.addEventListener("mouseover", function(event){
    event.target.style.background = "#17A2B8";
})
  
//Nav links
const nolinks = document.querySelector("nav");
nolinks.addEventListener("click", function(event){
    event.preventDefault();
    alert(`Nothing for you there either...`);
})

//Animations

window.addEventListener("click", function(){
    TweenMax.to(".logo-heading", 3, {rotation:360, scale:1.5});
})  

window.addEventListener("click", function(){
    TweenMax.to(".title", 3, {rotation:360, scale:0.9});
})  

window.addEventListener("click", function(){
    TweenMax.to("h2", 3, {rotation:360, scale:0.9});
})  

window.addEventListener("click", function(){
    TweenMax.to("h3", 3, {rotation:360, scale:0.9});
})  

window.addEventListener("mouseover", function(){
    TweenMax.to("a", 3, {rotation:360, scale:0.9});
})  