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

//variable player que contiene un booleano para determinar el valor en innerhtml correspondiente al jugador
let player = false
//variable que registra el numero de clicks, si llega a 9 significa que no se llego a cumplir la condicion para encontrar un ganador
let clicks = 0


//grupo de arrays que simulan ser una matriz
let cuadricula =[
    ["", "", ""],
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
function verificarWiner(winnerRow0,winnerRow1,winnerRow2) {
   winnerRow0 = cuadricula[0].reduce((acumulador, valorActual) => {
      return acumulador + valorActual
   },0);
   winnerRow1 = cuadricula[1].reduce((acumulador, valorActual) => {
      return acumulador + valorActual
   },0);
   winnerRow2 = cuadricula[2].reduce((acumulador, valorActual) => {
      return acumulador + valorActual
   },0);
   if (winnerRow0 === 3 || winnerRow1 === 3 || winnerRow2 === 3) {
      return alert("ganador player x")
   } else if(winnerRow0 === 15 || winnerRow1 === 15 || winnerRow2 === 15){
      return alert("ganador player o")
   }
   
  
   if (clicks == 9) {
      return alert("empate")
   }
}



contenedores[0].addEventListener("click",function addSimbol() {
      clicks = clicks + 1
      if (player === false){
         cuadricula[0][0] = 1 , pos0.innerHTML = "x" //el valor de 1 en la matriz sera usado para evaluar las condicione de victoria de manera matematica
      } else if(player === true){
         cuadricula[0][0] = 5, pos0.innerHTML = "o"  // elegi valore totalmente distintos para evitar confusiones por valores muy cercanos
      }
       player = verificarPlayer(player) //se llama la funcion player asignandole este nuevo valor a player
       contenedores[0].removeEventListener("click", addSimbol)
       verificarWiner()
       console.log(cuadricula)
       
      
      
})


contenedores[1].addEventListener("click", function addSimbol() {
   clicks = clicks + 1
   if (player === false){
      cuadricula[0][1] = 1 , pos1.innerHTML = "x"
   } else if(player === true){
      cuadricula[0][1] = 5, pos1.innerHTML = "o"
   }
   player = verificarPlayer(player)
   contenedores[1].removeEventListener("click", addSimbol)
   verificarWiner()
   console.log(cuadricula)
   
})



contenedores[2].addEventListener("click", function addSimbol() {
   clicks = clicks + 1
   if (player === false){
      cuadricula[0][2] = 1, pos2.innerHTML = "x"
   } else if(player === true){
      cuadricula[0][2] = 5, pos2.innerHTML = "o"
   }
   player = verificarPlayer(player)
   contenedores[2].removeEventListener("click", addSimbol)
   verificarWiner()
   console.log(cuadricula)
   
})

contenedores[3].addEventListener("click", function addSimbol() {
   clicks = clicks + 1
   if (player === false){
      cuadricula[1][0] = 1, pos3.innerHTML = "x"
   } else if(player === true){
      cuadricula[1][0] = 5, pos3.innerHTML = "o"
   }
   player = verificarPlayer(player)
   contenedores[3].removeEventListener("click", addSimbol)
   verificarWiner()
   
})

contenedores[4].addEventListener("click", function addSimbol() {
   clicks = clicks + 1
   if (player === false){
      cuadricula[1][1] = 1, pos4.innerHTML = "x"
   } else if(player === true){
      cuadricula[1][1] = 5, pos4.innerHTML = "o"
   }
   player = verificarPlayer(player)
   contenedores[4].removeEventListener("click", addSimbol)
   verificarWiner()
})

contenedores[5].addEventListener("click", function addSimbol() {
   clicks = clicks + 1
   if (player === false){
      cuadricula[1][2] = 1, pos5.innerHTML = "x"
   } else if(player === true){
      cuadricula[1][2] = 5, pos5.innerHTML = "o"
   }
   player = verificarPlayer(player)
   contenedores[5].removeEventListener("click", addSimbol)
   verificarWiner()
      
})
contenedores[6].addEventListener("click", function addSimbol() {
   clicks = clicks + 1
   if (player === false){
      cuadricula[2][0] = 1, pos6.innerHTML = "x"
   } else if(player === true){
      cuadricula[2][0] = 5, pos6.innerHTML = "o"
   }
   player = verificarPlayer(player)
   contenedores[6].removeEventListener("click", addSimbol)
   verificarWiner()
      
})
contenedores[7].addEventListener("click", function addSimbol() {
   clicks = clicks + 1
   if (player === false){
      cuadricula[2][1] = 1, pos7.innerHTML = "x"
   } else if(player === true){
      cuadricula[2][1] = 5, pos7.innerHTML = "o"
   }
   player = verificarPlayer(player)
   contenedores[7].removeEventListener("click", addSimbol)
   verificarWiner()
})
contenedores[8].addEventListener("click", function addSimbol() {
   clicks = clicks + 1
   if (player === false){
      cuadricula[2][2] = 1, pos8.innerHTML = "x"
   } else if(player === true){
      cuadricula[2][2] = 5, pos8.innerHTML = "o"
   }
   player = verificarPlayer(player)
   contenedores[8].removeEventListener("click", addSimbol)
   verificarWiner()
})
 




