let parrafo = document.getElementById("resultado");
let boton = document.getElementById("boton");
let input = document.getElementById(entrada); 
let descuento : string = "MI CODIGO"

function mostrarResultado() {
  let result : string input.value;  //acá tomo el resultado del input
  //entonces pregunto: 
  if (result === descuento){
    
  }
  parrafo?.innerHTML = "Este es mi resutado";
  
}
//agregar evento al botón click:
boton?.addEventListener("click", mostrarResultado);
