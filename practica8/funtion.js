let i = "o"
let mat = [["","",""],["","",""],["","",""]]
function position(x, y){
    i = i=="o"?"x":"o"
    let line ="p" + x+y
    document.getElementById(line).removeAttribute("onclick")
    document.getElementById(line).innerHTML = '<img src ="img/'+i+'".png>'
    mat[x][y]=i
}
function valida(id){
    for(let i=0; i<3 ;i++){
        if(mat[i][2]!= "" &&  mat[i][1]!= "" &&  mat[i][0]!= ""
        &&  mat[i][0] == mat[i][1] &&  mat[i][1]== mat[1][i]){
            return "ganaste" + id
        }
    }
    for(let i=0; i<3 ;i++){
        if(mat[2][1]!= "" &&  mat[1][i]!= "" &&  mat[0][1]!= ""
        &&  mat[0][1] == mat[1][i] &&  mat[1][i]== mat[i][1]){
            return "ganaste" + id
        }
    }
    if(mat[2][2]!= "" &&  mat[1][1]!= "" &&  mat[0][0]!= ""
        &&  mat[0][0] == mat[1][1] &&  mat[2][2]== mat[1][1]){
            return "ganaste" + id
        }
    if(mat[0][2]!= "" &&  mat[1][1]!= "" &&  mat[2][0]!= ""
    &&  mat[0][2] == mat[1][1] &&  mat[2][0]== mat[1][1]){
        return "ganaste" + id
    }
}
function bloqueo(){
    for(let i =0; i<3;i++){
        for(let j=0; j<3;j++)
            {
                document.getElementById("p"+i+j).removeAttribute("onclick")
            }
    }
}