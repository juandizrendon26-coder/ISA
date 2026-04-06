function cambiarColorContent(){

let colores = [

"linear-gradient(180deg, #1d2964, #03032a)",
"linear-gradient(180deg, #4759b4, #000045)",
"linear-gradient(180deg, #001ca8, #10102e)",
"linear-gradient(135deg, #800020, #130404)",
"linear-gradient(180deg, #051d95, #000000)"
];

let numero = Math.floor(Math.random() * colores.length);

document.getElementById("content").style.background = colores[numero];

}


function agrandarImagen(img){

if(img.style.transform === "scale(1.2)"){
img.style.transform = "scale(1)";
}else{
img.style.transform = "scale(1.2)";
}

}


function sumarDatos(){

let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);
let n3 = Number(document.getElementById("num3").value);

let suma = n1 + n2 + n3;

document.getElementById("resultado").innerHTML =
"Resultado de la suma: " + suma;

}


function multiplicarDatos(){

let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);
let n3 = Number(document.getElementById("num3").value);

let multiplicacion = n1 * n2 * n3;

document.getElementById("resultado").innerHTML =
"Resultado de la multiplicación: " + multiplicacion;

}


function promedioDatos(){

let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);
let n3 = Number(document.getElementById("num3").value);

let promedio = (n1 + n2 + n3) / 3;

document.getElementById("resultado").innerHTML =
"Resultado del promedio: " + promedio;

}



document.getElementById("formulario").addEventListener("submit", function(event){

event.preventDefault();

let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let tipo = document.getElementById("tipo").value;
let mensaje = document.getElementById("mensaje").value;

let datos = {
nombre: nombre,
email: email,
tipo: tipo,
mensaje: mensaje
};

localStorage.setItem("contacto", JSON.stringify(datos));

alert("Datos guardados correctamente");

});

