function mano1(){
    let ia = Math.floor(Math.random() * 3)
    game(ia,0)
    cambiar("p1",ia)
    cambiar("p2",0)
    /* console.log(`${ia}`)
    console.log(0) */
     
}
function mano2(){
    let ia = Math.floor(Math.random() * 3)
    game(ia,1)
    cambiar("p1",ia)
    cambiar("p2",1)
}
function mano3(){
    let ia = Math.floor(Math.random() * 3)
    game(ia,2)
    cambiar("p1",ia)
    cambiar("p2",2)
}
function game (ia,user){
    if(user > ia){
        let text = document.getElementById('text').innerText ="Ganaste"
        setTimeout(() => {window.location.reload()},3000)

    }else if(ia > user){
        let text = document.getElementById('text').innerText ="Perdiste"
        setTimeout(() => {window.location.reload()},3000)
    }else{
        let text = document.getElementById('text').innerText ="Empate"
        setTimeout(() => {window.location.reload()},3000)
    }
}
const cambiar = (name, id) => {
    console.log(name,id )
    if(id == 0){
        document.getElementById(name).src = "img/tijeras.jpeg"
        console.log(document.getElementById(name).src = "img/tijeras.jpeg")
    }else if(id == 1){
        document.getElementById(name).src = "img/papel.jpeg"
        console.log(name,id )
    }
    else if(id == 2){
        document.getElementById(name).src = "img/piedra.jpeg"
    }

}