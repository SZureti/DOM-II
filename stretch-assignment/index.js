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
            this.console.log("That's it! Bye")
        })
    }


///Move to right while clicked

//grab things that are needed for game
const blocks = document.querySelectorAll('.block');
const blockGroup = document.querySelector('.blocks');
// console.log(blocks);
console.log(blockGroup);
blocks.forEach(function(block,i){
  //moving rockets to the top
  block.addEventListener('click',function(e){
    // e.target.style.order = 0;
    //doesn't work after initial click
    blocks.forEach(function(item){
      item.style.order = 0;
    });
    e.target.style.order -= 1;
  });

  //moving travelers to the right
  block.addEventListener('mousedown',function(e){
    e.target.style.marginLeft += 5;
  })
})


//Animation


// function onMouseDown(){
// 	...
// 	const directionSpring = spring({
// 		from: this.progress === 0 ? 0 : this.direction,
// 		to: 0,
// 		mass: 1,
// 		stiffness: 800,
// 		damping: 2000
// 	});
// 	const progressSpring = spring({
// 		from: this.progress,
// 		to: 1,
// 		mass: 5,
// 		stiffness: 350,
// 		damping: 500
// 	});
// 	parallel(directionSpring, progressSpring).start((values)=>{
// 		// update uniforms
// 	})
// 	...
// }

function onMouseUp(){
	
	const directionSpring = spring({
		from: this.progress === 1 ? 1 : this.direction,
		to: 1,
		mass: 1,
		stiffness: 800,
		damping: 2000
	});
	const progressSpring = spring({
		from: this.progress,
		to: 0,
		mass: 4,
		stiffness: 400,
		damping: 70,
		restDelta: 0.0001
	});
	parallel(directionSpring, progressSpring).start((values)=>{
		
	})
	
}

// void main(){
// 	...
// 	float waveIn = u_progress*(1. / stick);
// 	float waveOut = -( u_progress - 1.) * (1./(1.-stick) );
// 	float stickProgress = min(waveIn, waveOut);
// 	pos.z += stickEffect * u_offset * stickProgress;
// 	gl_Position =
// 	projectionMatrix *
// 	modelViewMatrix *
// 	vec4(pos, 1.0);
// }

// void main(){
// 	...
// 	float offsetIn = clamp(waveIn,0.,1.);
// 	// Invert waveOut to get the slope moving upwards to the right and move 1 the left
// 	float offsetOut = clamp(1.-waveOut,0.,1.);
// 	float offsetProgress = mix(offsetIn,offsetOut,u_direction);
// 	pos.z += stickEffect * u_offset * stickProgress - u_offset * offsetProgress;
// 	gl_Position =
// 	projectionMatrix *
// 	modelViewMatrix *
// 	vec4(pos, 1.0);
// }