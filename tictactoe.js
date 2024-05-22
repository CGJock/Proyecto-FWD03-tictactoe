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
    ["", "", ""],
    ["", "", ""]
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
   for (let j = 0; j < cuadricula.length; j++) {
         winnerRow = cuadricula[j].reduce((acumulador, valorActual) => {

         return acumulador + valorActual
      },0);
        if (winnerRow == 3) {
            alert("ganador jugador x")
            
            break
         }else if(winnerRow == 15){
         alert("ganador jugador o")
            break
         }
     
   }
  
   for (let i = 0; i < cuadricula.length; i++) {
      let contadorX = 0
      let contadorO = 0
      for (let j = 0; j < cuadricula.length; j++) {
        if (cuadricula[j][i] == 1) {
         contadorX++
         } else if(cuadricula[j][i] == 5){
            contadorO++
         } 
         if (contadorX == 3) {
            alert("ganador x")
         } else if (contadorO == 3){
            alert("ganador o")
         } 
      }
      
   } 
   contadorDx = 0 // contador que hace las validaciones en diagonal
   contadorDo = 0
   for (let i = 0; i < cuadricula.length; i++) {
         if (cuadricula[i][i] == 1) {
         contadorDx++
         } else if (cuadricula[i][i] == 5) {
         contadorDo++
         }
         if (contadorDx == 3) {
            alert("ganador x")
         }else if (contadorDo == 3) {
             alert("gano o")
         }
    }
    
    contadorRdX = 0
    contadorRdO = 0
    let n = 3; //n es equivalente al numero de columnas
    for (let i = 0; i < cuadricula.length; i++) {
      for (let j = 0; j < cuadricula.length; j++) {
         if (i + j == n - 1) {
            if (cuadricula[i][j] == 1) {
               contadorRdX++
               console.log("estoy valiando el pimero numero de la diagonal inversa")
            } else if(cuadricula[i][j] == 5) {
               contadorRdO++
            }
            if (contadorRdX == 3) {
               alert("ganador x")
            }else if (contadorRdO == 3) {
                alert("gano o")
            }

         }
         
      }
      
    }
   
             
  if (clicks == 9) {
   return alert("empate")
}

   
 
}

function prueba() {

   let matriz = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "9"]
   ]


   


}

prueba();


 
// for (let i = 0; i < contenedores.length; i++) {
//    contenedores[i].addEventListener("click", function addSimbol(cuadricula) {
//       contenedores[i].innerHTML = "x";
//       if (contenedores[i].innerHTML = "x") {
//          cuadricula[0][0] = 1
//       }
//       console.log(cuadricula);
//    })
   
// }

      
         



contenedores[0].addEventListener("click",function addSimbol() {
      clicks = clicks + 1
      if (player === false){
         cuadricula[0][0] = 1 , pos0.innerHTML = "x" //el valor de 1 en la matriz sera usado para evaluar las condicione de victoria de manera matematica
      } else if(player === true){
         cuadricula[0][0] = 5, pos0.innerHTML = "o"  // elegi valore totalmente distintos para evitar confusiones por valores muy cercanos
      }
       player = verificarPlayer(player) //se llama la funcion player asignandole este nuevo valor a player
       contenedores[0].removeEventListener("click", addSimbol)
       verificarWiner(cuadricula)
       
       
       
      
      
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
   verificarWiner(cuadricula)
   
   
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
   verificarWiner(cuadricula)
   
   
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
   verificarWiner(cuadricula)
   
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
   verificarWiner(cuadricula)
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
   verificarWiner(cuadricula)
      
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
   verificarWiner(cuadricula)
      
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
   verificarWiner(cuadricula)
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
   verificarWiner(cuadricula)
})
 




