let numero = prompt("ingrese su numero")

if(numero>0){
    alert(`el numero es posivo`)
}else if(numero<0){
    alert(`numero es negativo`)
}else{
    alert(`el numero es cero (0)`)
}

let numero_1 = prompt("ingrese su primer numero")
let numero_2 = prompt("ingrese su segundo numero")

if (numero_1 > numero_2){
   alert(`el numero mayor es ${numero_1}`)
}else{
   alert(`el numero mayor es ${numero_2}`)
}

let numero_3 = prompt("ingrese su numero")

if(numero_3%2==0){
  alert(`es un numero par y positivo`)
else{
 alert(`el numero no es par `)
}

let edad = prompt("ingrese su edad")
let altura= prompt("ongrese su altura")

if(edad>=16&&altura>=155){
  alert(` si puede ingresar`)
}else{
  alert(`no puede ingresar`)
}