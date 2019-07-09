// DEFINE BLOCK
const block = document.querySelectorAll(".block");


//SET ORDER OF BLOCKS
let lastOrder = 0;
let xIndex = {
    "block--red": 0,
    "block--blue": 0,
    "block--green": 0,
    "block--pink": 0,
    "block--gray": 0
}

//REARRANGE BLOCKS WHEN CLICKED
let interval;

for(let i = 0; i <= block.length; i++){
    block[i].addEventListener('click', function (){
        lastOrder -= 1;
        block[i].style.order = `${lastOrder}`;
    })
    block[i].addEventListener('mousedown', function(){
        interval = window.setInterval(function () {
            xIndex[block[i].classList[1]]++;
            console.log(xIndex)
            TweenMax.to(`.${block[i].classList[1]}`, 0.5, {
                x:xIndex[block[i].classList[1]],
            })

        }, 10)
            interval;
            console.log('How many times are you going to do this???')
        })
        window.addEventListener('mouseup', function () {
            this.window.clearInterval(interval);
            this.console.log("That's it!")
        })
    }

