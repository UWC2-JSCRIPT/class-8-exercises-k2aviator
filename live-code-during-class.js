setTimeout(() => {console.log("Time!")}, 3000)

/*
let secondsRemaining = 5;

//change time remaining every 1 second

let countdownInterval = setInterval(function(){
    if(secondsRemaining>0){
        secondsRemaining--;
        console.log(secondsRemaining)
    } else {
        console.log("Done!")
        clearInterval(countdownInterval); //referring to a method inside itself is recursion
    }
},1000)*/




let x = 0;
const animate = function() {
x++;
if (x < window.innerWidth) {
const transfrm = `translateX(${x}px)`;
imgEl.style.transform = transfrm;
requestAnimationFrame(animate);
}
}
requestAnimationFrame(animate);