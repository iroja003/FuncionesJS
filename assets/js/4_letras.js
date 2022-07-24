// Requerimiento 4

let color='';

document.addEventListener('keydown',function(e){
    let letra=document.getElementById("letra-select");
    let msj= document.getElementById("idMsj");
    switch(e.key.toLowerCase()){
        case 'a':
            letra.innerHTML='A';
            letra.style.backgroundColor='lime';
            color ='lime';
            break;
        case 's':
            letra.innerHTML='S';
            letra.style.backgroundColor='aqua';
            color ='aqua';
            break;
        case 'd':
            letra.innerHTML='D';
            letra.style.backgroundColor='teal';
            color ='teal';
            break;
         case 'g':
            letra.innerHTML='G';
            letra.style.backgroundColor='chocolate';
            color ='chocolate';
             break;
        default : 
        letra.innerHTML='';
        letra.style.backgroundColor='white';
        color ='';
        msj.innerHTML ='Letra no Configurada'  ;
}
})

const caja1 = document.getElementById("caja1");
const caja2 = document.getElementById("caja2");
const caja3 = document.getElementById("caja3");
const caja4 = document.getElementById("caja4");

caja1.addEventListener("click", ()=>caja1.style.backgroundColor = color);
caja2.addEventListener("click", ()=>caja2.style.backgroundColor = color);
caja3.addEventListener("click", ()=>caja3.style.backgroundColor = color);
caja4.addEventListener("click", ()=>caja4.style.backgroundColor = color);


