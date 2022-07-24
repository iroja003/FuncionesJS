//* declaracion de variables
var contador = 1;
var a = 0;
var b = 0;
var c = 0;
var idTotal = document.getElementById("idTotal");

/* Funciont Normal*/

function Example(a,b,c){
    return a+b+c;
}
//
// Funcion Expression
var  Resultado = function (){
    return(Number(a+b+c));
}

   
function Llamar1(p){
    a = parseFloat(prompt("Ingrese A : ",0));
    b = parseFloat(prompt("Ingrese B : ",0));
    c = parseFloat(prompt("Ingrese C : ",0));
    //

    if (p == '1') {
        idTotal.innerHTML = "Resultado Funcion Normal : " + Example(a,b,c); 
    } 
    else {
        idTotal.innerHTML = "Resultado Funcion Expression : " + Resultado(); 
    }
}

// declaracion de variables

// declaracion de funciones

// 3.1
ele=document.getElementById("ele1");
function pintar(){
  ele.style.backgroundColor = 'yellow';
}
ele.addEventListener("click", function(){pintar()});


// 3.2

ele=document.getElementById("ele1");
function pintar(color='green'){
  ele.style.backgroundColor = color;
}
ele.addEventListener("click", function(){pintar('yellow')});




