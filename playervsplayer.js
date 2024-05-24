
let contenedores2 = document.getElementsByClassName("contendorHijo2")

//variable player2 que contiene un booleano para determinar el valor en innerhtml correspondiente al jugador
let player2 = false
//variable que registra el numero de clicks2, si llega a 9 significa que no se llego a cumplir la condicion para encontrar un ganador
let clicks2 = 0


//grupo de arrays que simulan ser una matriz
let cuadricula2 =[
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funcion que verifica los turnos de los jugadores, revisa el valor de player2, y devuele el valor opuesto
//se declara una variable que va ser igual a una funcion de esta manera es posible llamar la funcion despues
const verificarplayer2 = function(player2) {//se puede declarar el parametro de la funcion o ser especificado al llamarla
   if (player2 === false) {
      return true
      
   } else if(player2 === true) //se checa que se cambie el valor boolean de player2 si se cumple la condicion
      return false
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function verificarWiner2(cuadricula2) {
   for (let j = 0; j < cuadricula2.length; j++) {
         winnerRow = cuadricula2[j].reduce((acumulador, valorActual) => {

         return acumulador + valorActual
      },0);
        if (winnerRow == 6) {
         clicks2--
            alert("ganador jugador x")
            
            break
         }else if(winnerRow == 15){
         clicks2--
         alert("ganador jugador o")
            break
         }
     
   }
  
   for (let i = 0; i < cuadricula2.length; i++) {
      let contadorX = 0
      let contadorO = 0
     // console.log(contadorO);
      for (let j = 0; j < cuadricula2.length; j++) {
        if (cuadricula2[j][i] == 2) {
         contadorX++
         } else if(cuadricula2[j][i] == 5){
            contadorO++
            
         } 
         if (contadorX == 3) {
            clicks2--
            alert("ganador x")
         } else if (contadorO == 3){
            clicks2--
            alert("ganador o")
         } 
      }
   } 
   contadorDx = 0 // contador que hace las validaciones en diagonal
   contadorDo = 0
   for (let i = 0; i < cuadricula2.length; i++) {
         if (cuadricula2[i][i] == 2) {
         contadorDx++
         } else if (cuadricula2[i][i] == 5) {
         contadorDo++
         }
         if (contadorDx == 3) {
            clicks2--
            alert("ganador x")
         }else if (contadorDo == 3) {
            clicks2--
             alert("gano o")
         }
    }
    
    contadorRdX = 0
    contadorRdO = 0
    let n = 3; //n es equivalente al numero de columnas
    for (let i = 0; i < cuadricula2.length; i++) {
      for (let j = 0; j < cuadricula2.length; j++) {
         if (i + j == n - 1) {
            if (cuadricula2[i][j] == 2) {
               contadorRdX++
               //console.log("estoy valiando el pimero numero de la diagonal inversa")
             //  console.log(clicks2)
            } else if(cuadricula2[i][j] == 5) {
               contadorRdO++
            }
            if (contadorRdX == 3) {
               clicks2--
               alert("ganador x")
            }else if (contadorRdO == 3) {
               clicks2--
                alert("gano o")
            }
         }
      }
   }
   
   if (clicks2 === 9) {
   alert("empate")
   }
}

for (let i = 0; i < contenedores2.length; i++) {
    contenedores2[i].addEventListener("click", function addSimbol2() {
       clicks++
       if (player2 === false) {
          contenedores2[i].innerHTML = "x";
       } else if (player2 === true) {
          contenedores2[i].innerHTML = "o";
       }
       let row1 = parseInt(event.target.dataset.row1);
       let col1 = parseInt(event.target.dataset.col1);
       if (event.target.innerHTML == "x") {
      cuadricula2[row1][col1] = 2
      
      } else if (event.target.innerHTML == "o") {
       cuadricula2[row1][col1] = 5
      }
       contenedores2[i].removeEventListener("click", addSimbol2)
       player2 = verificarplayer2(player2)
       verificarWiner2(cuadricula2)
   })
   
}


// function gamepvsp() {
//    let row1 = parseInt(event.target.dataset.row1);
//    let col1 = parseInt(event.target.dataset.col1);
//    if (event.target.innerHTML == "x") {
//   cuadricula2[row1][col1] = 2
  
//   } else if (event.target.innerHTML == "o") {
//    cuadricula2[row1][col1] = 5
//   }

//   for (let index = 0; index < 9; index++) {
//    if (contenedores2[index].textContent === "o") {
//      }
// }
// verificarWiner(cuadricula2)
// }

      
         







