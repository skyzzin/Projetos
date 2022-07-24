const img = document.getElementById('img');
const buttons = document.querySelector('.buttons');
let corIndex = 0;
const  trafficL = ( event ) => {
    turnOn[event.target.id]();
}
const  nextIndex = () =>{
    if(corIndex < 2){
        corIndex++
    }
    else{
        corIndex = 0;
    }
}
const c_color = () =>{
    const cores = ['red','yellow','green']
    const color = cores[corIndex];
    turnOn[color]();
    nextIndex()
}
const turnOn = {
    'red': () => img.src = 'img/vermelho.png',
    'yellow': () => img.src = 'img/amarelo.png',
    'green': () => img.src = 'img/verde.png',
    'automatic': () => setInterval(c_color,1000)
}

buttons.addEventListener('click', trafficL)


/* const img = document.getElementById('img');
const btnR = document.getElementById('red');
const btnY = document.getElementById('yellow');
const btnG = document.getElementById('green');
const btnA = document.getElementById('automatic');

function Vermelho(){
    img.src = 'img/vermelho.png';
}
function Amarelo(){
    img.src = 'img/amarelo.png';
}
function Verde(){
    img.src = 'img/verde.png';
}
function Auto(){

}
btnR.addEventListener('click',Vermelho);
btnY.addEventListener('click', Amarelo);
btnG.addEventListener('click', Verde);
btnA.addEventListener('click', Auto); */


