
var botonEncriptar = document.getElementById("btn-encriptar");
var output = document.getElementById("msg");
var botonDesencriptar = document.getElementById("btn-desencriptar");
var botonCopiar = document.getElementById("btn-copy")

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
   var texto = document.getElementById("input-texto").value.toLowerCase();
   output.value = encriptar(texto)})  

botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
   var texto = document.getElementById("input-texto").value.toLowerCase();
   output.value = Desencriptar(texto)})
   
botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    navigator.clipboard.writeText(output.value)



})   
   function encriptar(texto){
    if(texto.length>0){
    texto = texto.replaceAll(/e/g,"enter");
    texto = texto.replaceAll(/o/g,"ober");
    texto = texto.replaceAll(/i/g,"imes");
    texto = texto.replaceAll(/a/g,"ai");
    texto = texto.replaceAll(/u/g,"ufat");
         return texto}}

function Desencriptar(texto){
    if(texto.length>0){   
    texto = texto.replaceAll(/enter/g,"e");
    texto = texto.replaceAll(/ober/g,"o");
    texto = texto.replaceAll(/imes/g,"i");
    texto = texto.replaceAll(/ai/g,"a");
    texto = texto.replaceAll(/ufat/g,"u");
            return texto}}

    