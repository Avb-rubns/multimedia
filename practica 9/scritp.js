
let x=0 ,p=0,y = 0, xp=5, yp=5
function preload(){
    console.log(x)
    console.log(y)
    p++
    document.getElementById('visor').innerHTML = `<div class="emoji" style="background-position-y:-${y}px; background-position-x:-${x}px";></div>`
    x=35*p
    xp--
    if (xp == 0){
        y=y+35
        xp = 5
        yp--
        x=0
        p=0
    }
    if(yp == 0 ){
        x=0; p=0; y = 0; xp=5; yp=5;
    }

        setTimeout('preload()',3000)           
}
window.onload = () =>{
    preload()
}
console.log(x)

