
let contenedores = document.getElementsByClassName("contendorHijo")
let mostrarpvsbot = document.getElementById("mostrar pvsbot")
let pTurno = document.getElementById("pTurno")


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
      return  true
      
   } else if(player === true) //se checa que se cambie el valor boolean de player si se cumple la condicion
      return false
      
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function verificarWiner(cuadricula) {
   for (let j = 0; j < cuadricula.length; j++) {
         winnerRow = cuadricula[j].reduce((acumulador, valorActual) => {

         return acumulador + valorActual
      },0);
        if (winnerRow == 6) {
         clicks--
            alert("ganador jugador x")
            
            break
         }else if(winnerRow == 15){
         clicks--
         alert("ganador jugador o")
            break
         }
     
   }
  
   for (let i = 0; i < cuadricula.length; i++) {
      let contadorX = 0
      let contadorO = 0
     // console.log(contadorO);
      for (let j = 0; j < cuadricula.length; j++) {
        if (cuadricula[j][i] == 2) {
         contadorX++
         } else if(cuadricula[j][i] == 5){
            contadorO++
            
         } 
         if (contadorX == 3) {
            clicks--
            alert("ganador x")
         } else if (contadorO == 3){
            clicks--
            alert("ganador o")
         } 
      }
   } 
   contadorDx = 0 // contador que hace las validaciones en diagonal
   contadorDo = 0
   for (let i = 0; i < cuadricula.length; i++) {
         if (cuadricula[i][i] == 2) {
         contadorDx++
         } else if (cuadricula[i][i] == 5) {
         contadorDo++
         }
         if (contadorDx == 3) {
            clicks--
            alert("ganador x")
         }else if (contadorDo == 3) {
            clicks--
             alert("gano o")
         }
    }
    
    contadorRdX = 0
    contadorRdO = 0
    let n = 3; //n es equivalente al numero de columnas
    for (let i = 0; i < cuadricula.length; i++) {
      for (let j = 0; j < cuadricula.length; j++) {
         if (i + j == n - 1) {
            if (cuadricula[i][j] == 2) {
               contadorRdX++
               //console.log("estoy valiando el pimero numero de la diagonal inversa")
             //  console.log(clicks)
            } else if(cuadricula[i][j] == 5) {
               contadorRdO++
            }
            if (contadorRdX == 3) {
               clicks--
               alert("ganador x")
            }else if (contadorRdO == 3) {
               clicks--
                alert("gano o")
            }
         }
      }
   }
   
   if (clicks === 9) {
   alert("empate")
   }
}

for (let i = 0; i < contenedores.length; i++) {
   contenedores[i].addEventListener("click", function addSimbol() {
      clicks++
      if (player === false) {
         contenedores[i].innerHTML = "x";
      } else if (player === true) {
         contenedores[i].innerHTML = "o";
      }
      contenedores[i].removeEventListener("click", addSimbol)
      player = verificarPlayer(player)
      pTurno.innerHTML = "turno o"
      game()
   })
   
}

function bot() {
      
      for (let i = 0; i < 9; i++) {
      let posicionAleatoria = Math.floor(Math.random() * 9);
      if (contenedores[posicionAleatoria].innerHTML === "") {
         
         let row = contenedores[posicionAleatoria].getAttribute('row');
         let col = contenedores[posicionAleatoria].getAttribute('col');
         clicks++

         cuadricula[row][col] = 5;
         contenedores[posicionAleatoria].innerHTML = "o";
         pTurno.innerHTML = "turno x"
         verificarWiner(cuadricula)
         return player = false
         
      }
   }
}
   
function game() {
   let row = parseInt(event.target.dataset.row);
   let col = parseInt(event.target.dataset.col);
   if (event.target.innerHTML == "x") {
  cuadricula[row][col] = 2
  
  
  } else if (event.target.innerHTML == "o") {
   cuadricula[row][col] = 5
   
  
  }
  
  setTimeout(() => {
   bot()
  }, 1000);


verificarWiner(cuadricula)
}






