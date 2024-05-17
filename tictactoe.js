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

let turno = false





let cuadricula =[
    [pos0, pos1, pos2],
    [pos3, pos4, pos5],
    [pos6, pos7, pos8]
]

contenedores[0].addEventListener("click",function() {
      if (turno === false) {
         cuadricula[0][0].innerHTML = "x"
         
         if (turno === false) {
            turno = true
         } else if (turno === true) {
            turno = false
         }
      
      } else{
         cuadricula[0][0].innerHTML = "o"
         console.log(turno)
}
})


contenedores[1].addEventListener("click", function () {
   if (turno ===  false) {
      cuadricula[0][1].innerHTML = "x"
      if (turno === true) {
         turno = false
      } else if (turno === false) {
         turno = true
      }
   } else{
      cuadricula[0][1].innerHTML = "o"
      console.log(turno)
}
   
})


contenedores[2].addEventListener("click", function () {
   if (turno === false) {
      cuadricula[0][2].innerText = "x"
      if (turno === true) {
         turno = false
      } else if (turno === false) {
         turno = true
         console.log(turno)
      }
   } else{
      cuadricula[0][2].innerText = "o"
   }
      
})
contenedores[3].addEventListener("click", function () {
   if (turno === false){
      cuadricula[1][0].innerHTML = "x"
      turno = true
   } else {
      cuadricula[1][0].innerHTML = "o"
   }
      
})
contenedores[4].addEventListener("click", function () {
      if (turno === false) {
         cuadricula[1][1].innerHTML = "x"
         turno = true
      } else{
         cuadricula[1][1].innerHTML = "o"
      }
      
})
contenedores[5].addEventListener("click", function () {
      if (turno === false) {
         cuadricula[1][2].innerHTML = "x"
         turno = true
      } else{
         cuadricula[1][2].innerHTML = "o"
      }
      
})
contenedores[6].addEventListener("click", function () {
      if (turno === false) {
         cuadricula[2][0].innerHTML = "x"
         turno = true
      } else{
         cuadricula[2][0].innerHTML = "o"
      }
      
})
contenedores[7].addEventListener("click", function () {
      if (turno === false) {
         cuadricula[2][1].innerHTML = "x"
         turno = true
      } else {
         cuadricula[2][1].innerHTML = "o"
      }
      
})
contenedores[8].addEventListener("click", function () {
      if (turno === false) {
         cuadricula[2][2].innerHTML = "x"
      } else {
         cuadricula[2][2].innerHTML = "o"
      }
      
})
 




/*function addSimbol1() {
 p.innerHTML = "x"
 if (p.innerHTML = "x") {
    cuadricula[0][0] = "x"
    console.log(cuadricula)
 }
}
function addSimbol2() {
    p2.innerHTML = "x"
    if (p2.innerHTML = "x") {
       cuadricula[1][0] = "x"
       console.log(cuadricula)
    }
   }
*/
// function addSimbol1() {
//    let  p = document.createElement ("p")
//     p.innerHTML = "x"
//     pos1.appendChild(p)

//     if (p.innerHTML = "x") {
//        cuadricula[0][0] = "x"}
//     for (let i = 0; i < cuadricula.length; i++) {
//         console.log(cuadricula[i])
        
//     }
// }
// console.log(cuadricula)


