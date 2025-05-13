


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import "bootstrap";
import "./style.css";


window.onload= function(){
const sujetos = ["Mi perro","Mi gato","Mi loro","Mi tortuga"];
let randomIndexSujetos = Math.floor(Math.random()*sujetos.length)
  let sujetosRandom = sujetos[randomIndexSujetos]

const acciones = ["comió","robó","perdió","destrozó"];
let randomIndexAcciones = Math.floor(Math.random()*acciones.length)
let accionesRandom = acciones[randomIndexAcciones]

const objetos  = ["mi tarea","mis llaves","mi informe","mi teléfono"];
let randomIndexObjetos = Math.floor(Math.random()*objetos.length)
let objetosRandom = objetos[randomIndexObjetos]

const tiempos  = ["ayer","anoche","esta mañana","hace un rato"];
let randomIndexTiempos = Math.floor(Math.random()*tiempos.length)
let tiemposRandom = tiempos[randomIndexTiempos]

document.getElementById("excusa").innerText= sujetosRandom + " " + accionesRandom + " " + objetosRandom + " " +  tiemposRandom
  
  console.log(sujetosRandom, accionesRandom, objetosRandom, tiemposRandom)

};