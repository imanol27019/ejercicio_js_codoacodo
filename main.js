const cantidad = document.getElementById("input-cantidad");
const categoria = document.getElementById("select-categoria");
const total = document.getElementById("total");
var botonResumen = document.querySelector("#resumen");
var botonBorrar = document.querySelector("#borrar");
var inputs = document.getElementsByTagName("input");

botonBorrar.addEventListener("click", reiniciarValues);
botonResumen.addEventListener("click", calcularTotal);

function calcularTotal(){
    let descuento = categoria.value==1?0.20:categoria.value==2?0.50:categoria.value==3?0.85:1;
    total.textContent = "Total a pagar: $"+(cantidad.value*200)*descuento;
}
function reiniciarValues(){
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = ""; 
      }
    total.textContent = "Total a pagar: ";
    categoria.value="0";
}
