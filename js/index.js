// Your code goes here
// const nav = document.querySelector('header nav')
// nav.addEventListener('click', event => {
//     console.log('Clicked', event.target.textContent, event.screenX, event.screenY)

//     const title = document.querySelector('h1.main-navigation')
//     title.textContent = event.target.textContent
// })

window.addEventListener("load", function(event){
    alert("Welcome to your new home, stay a while...");
})

const stop = document.querySelector('h1');
stop.addEventListener('dblclick', (event) => {
  alert("Welcome to the Fun Bus!")
});


let btn1 = document.querySelector("#btn1");
btn1.addEventListener("mouseover", function (event){
    event.target.style.background = "black";
})

btn1.addEventListener("mouseleave", function (event){
    event.target.style.background = "#17A2B8";
})

// let btn = document.getElementById("button");
// button.addEventListener("select", function(event) {
// }

// let text = document.getElementById("content-section");
// text.addEventListener("select", function(event) {
//     log.textContent = `You Selected ${selection}`;
// })
  
var dragged;
document.addEventListener("drag", function(event){

}, false);

document.addEventListener("dragover", function(event){
    event.preventDefault();
}, false);

document.addEventListener('keydown', logkey);

function logkey(event) {
    log.textContent += `${e.code}`;
}
// stop.addEventListener('drag', (event) => {
//     event.preventDefault();
//   })
  


// function logSelection(event) {
//     const log = document.getElementById('log');
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     log.textContent = `You selected: ${selection}`;
// }

// const text = document.querySelector('content-section');
// text.addEventListener('select', logSelection);

// let title = document getElementById("title");
// title.addEventListener("mouseover", event => {
//     title.style.color = "orange";
//     title.style.color = "aqua";
// })

// let title = document querySelector("title");
// title.addEventListener("mouseleave", event => {
//     title.style.backgroundcolor = "white";
// })