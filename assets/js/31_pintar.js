// declaracion de variables

// declaracion de funciones

// 3.1
ele=document.getElementById("ele1");
function pintar(){
  ele.style.backgroundColor = 'yellow';
}
ele.addEventListener("click", pintar());


// 3.2

ele=document.getElementById("ele1");
function pintar(color='green'){
  ele.style.backgroundColor = color;
}
ele.addEventListener("click", function(){pintar('yellow')});


