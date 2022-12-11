//get DOM reference to the BODY
body = document.querySelector('body')


let color = 0;
const animate = function(){
    color++;
    if (color <=255){
        const trsfrm = `rgb(${color},${color},${color})`;
        console.log(trsfrm)
        body.style.backgroundColor = trsfrm
        requestAnimationFrame(animate)
    }; 
};
requestAnimationFrame(animate)
