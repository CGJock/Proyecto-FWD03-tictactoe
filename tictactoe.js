let pos0 = document.getElementById("vectorPoscicion0");
let pos1 = document.getElementById("vectorPoscicion1");
let pos2 = document.getElementById("vectorPoscicion2");
let pos3 = document.getElementById("vectorPoscicion3");
let pos4 = document.getElementById("vectorPoscicion4");
let pos5 = document.getElementById("vectorPoscicion5");
let pos6 = document.getElementById("vectorPoscicion6");
let pos7 = document.getElementById("vectorPoscicion7");
let pos8 = document.getElementById("vectorPoscicion8");
let contenedores = document.getElementsByClassName("contendorHijo")
console.log(contenedores)
//variable player que contiene un booleano para determinar el valor en innerhtml correspondiente al jugador
let player = false


//grupo de arrays que simulan ser una matriz
let cuadricula =[
    [pos0, pos1, pos2],
    [pos3, pos4, pos5],
    [pos6, pos7, pos8]
]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funcion que verifica los turnos de los jugadores, revisa el valor de player, y devuele el valor opuesto
//se declara una variable que va ser igual a una funcion de esta manera es posible llamar la funcion despues
const verificarPlayer = function(player) {//se puede declarar el parametro de la funcion o ser especificado al llamarla
   if (player === false) {
      return true
      
   } else if(player === true) //se checa que se cambie el valor boolean de player si se cumple la condicion
      return false
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function verificarWiner(cuadricula) {
   if (cuadricula[0][0],cuadricula[0][1],cuadricula[0][2].innerHTML == "x") {
      return alert("el ganador es el jugador x")
   } else if (cuadricula[0][0],cuadricula[0][1],cuadricula[0][2].innerHTML == "o") {
      return alert("el ganador es el player 0")
   }
}



contenedores[0].addEventListener("click",function addSimbol() {
   
      if (player === false){
         cuadricula[0][0].innerHTML = "x"
      } else if(player === true){
         cuadricula[0][0].innerHTML = "o"
      }
       player = verificarPlayer(player) //se llama la funcion player asignandole este nuevo valor a player
       contenedores[0].removeEventListener("click", addSimbol)
       verificarWiner(cuadricula)
      
      
})


contenedores[1].addEventListener("click", function addSimbol() {
   console.log(cuadricula[0][1].innerHTML)
   if (player === false){
      cuadricula[0][1].innerHTML = "x"
   } else if(player === true){
      cuadricula[0][1].innerHTML = "o"
   }
   player = verificarPlayer(player)
   contenedores[1].removeEventListener("click", addSimbol)
   verificarWiner(cuadricula)
})



contenedores[2].addEventListener("click", function addSimbol() {
   if (player === false){
      cuadricula[0][2].innerHTML = "x"
   } else if(player === true){
      cuadricula[0][2].innerHTML = "o"
   }
   player = verificarPlayer(player)
   contenedores[2].removeEventListener("click", addSimbol)
   verificarWiner(cuadricula)
})

contenedores[3].addEventListener("click", function addSimbol() {
   if (player === false){
      cuadricula[1][0].innerHTML = "x"
   } else if(player === true){
      cuadricula[1][0].innerHTML = "o"
   }
   player = verificarPlayer(player)
   contenedores[3].removeEventListener("click", addSimbol)
})

contenedores[4].addEventListener("click", function addSimbol() {
   if (player === false){
      cuadricula[1][1].innerHTML = "x"
   } else if(player === true){
      cuadricula[1][1].innerHTML = "o"
   }
   player = verificarPlayer(player)
   contenedores[4].removeEventListener("click", addSimbol)
})

contenedores[5].addEventListener("click", function addSimbol() {
   if (player === false){
      cuadricula[1][2].innerHTML = "x"
   } else if(player === true){
      cuadricula[1][2].innerHTML = "o"
   }
   player = verificarPlayer(player)
   contenedores[5].removeEventListener("click", addSimbol)
      
})
contenedores[6].addEventListener("click", function addSimbol() {
   if (player === false){
      cuadricula[2][0].innerHTML = "x"
   } else if(player === true){
      cuadricula[2][0].innerHTML = "o"
   }
   player = verificarPlayer(player)
   contenedores[6].removeEventListener("click", addSimbol)
      
})
contenedores[7].addEventListener("click", function addSimbol() {
   if (player === false){
      cuadricula[2][1].innerHTML = "x"
   } else if(player === true){
      cuadricula[2][1].innerHTML = "o"
   }
   player = verificarPlayer(player)
   contenedores[7].removeEventListener("click", addSimbol)
})
contenedores[8].addEventListener("click", function addSimbol() {
   if (player === false){
      cuadricula[2][2].innerHTML = "x"
   } else if(player === true){
      cuadricula[2][2].innerHTML = "o"
   }
   player = verificarPlayer(player)
   contenedores[8].removeEventListener("click", addSimbol)
})
 






