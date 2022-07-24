//Creador Douglas Silva Santos
//Video Usado Para o Desenvolvimento {https://www.youtube.com/watch?v=4r0zOW9Zn-Y&t=601s}

const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function is_lamp_broken(){
    return lamp.src.indexOf ('quebrada') > -1
}
function lampOn () {
    if(!is_lamp_broken()){
        lamp.src = 'img/ligada.jpg';
    }
    
    
}
function lampOff() {
    if(!is_lamp_broken()){
        lamp.src = 'img/desligada.jpg';
    }
    
}
function lampB(){
    if(!is_lamp_broken()){
        lamp.src = 'img/quebrada.jpg';
    }
   
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampB)