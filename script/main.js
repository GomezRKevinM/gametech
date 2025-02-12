// IMPORTACIONES DEL DOM
const PLAY_BTN = document.querySelector('.play');
const instrucions_container = document.querySelector("#instrucciones");
const controls_container = document.querySelector("#controls-container");
const usernameShow = document.querySelectorAll('.username');
const showTime = document.querySelector("#contador");
const showContainerTime = document.querySelector(".contador_container");
const btn_select = document.querySelectorAll(".controls-btn"); // botones de seleccion

// VARIABLES LOCALES
let username;
let time;
let min=0.2;
let user_select;
let PC_select;
const options = ['piedra','papel','tijeras'];

PLAY_BTN.addEventListener('click',()=>{
    instrucions_container.style.display="none";
    controls_container.style.display="flex";
    PLAY_BTN.style.display="none";
    if(username==""||username==NaN||username==undefined){
        username=prompt("¿Cual es tu nombre de jugador?");
        alert("Bienvenid@ "+username);
        usernameShow[0].innerText=username;    
    }

    for(i=0;i<usernameShow.length;i++){
        usernameShow[i].style.display="inline";
    }

    showCount()
    
})

function showCount(){
    showContainerTime.style.display="flex";
    let seg = min *60;
   let intervalo = setInterval(()=>{
        seg--;

        if(seg>=10){
            showTime.innerHTML="0:"+seg;
        }else{
            showTime.innerHTML="0:0"+seg;
        }

        if(seg==0){
            let enemy = pc_select_option();
            let usuario = 
            showTime.innerHTML="GO!"
            clearInterval(intervalo)
            return seg;
        }

    },1000)
    console.log(seg)
}

function pc_select_option(){
    let select_item = parseInt(Math.random()*3);
    PC_select = options[select_item]
    return PC_select;
}

function comparador(pc,user){
    let mensaje;
    if(pc==user){
        mensaje = "Empate";
    }
    switch(user){
        case "piedra":
            mensaje = pc=="papel"?"La maquina ha ganado con "+pc:username+" ha ganado con "+user;
            break;
        case "papel":
            mensaje = pc=="tijeras"?"La maquina ha ganado con "+pc:username+" ha ganado con "+user;
            break;
        case "tijeras":
            mensaje = pc=="piedra"?"La maquina ha ganado con "+pc:username+" ha ganado con "+user;
    }
    return mensaje;
}


function select(value){
    user_select=options[value]
}
