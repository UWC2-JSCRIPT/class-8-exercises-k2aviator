//get DOM reference to the BODY

var r= 255
var g= 255
var b= 255

//set a variable to modify the RGB value

let countdownInterval = setInterval(function(){
    if(r>0){
        r--;
        g--;
        b--;
        bodyColor = document.body.style.backgroundColor = 'rgb(' + [r,g,b].join(',') + ')';
        console.log(r)
    } else {
        console.log("Done!")
        clearInterval(countdownInterval); //referring to a method inside itself is recursion
    }
},15);
