let ball = document.querySelector('#ball');
let board = document.querySelector('#board')
let position = document.querySelector('#position')

let posX = board.clientWidth - ball.clientWidth;
let posY = board.clientHeight - ball.clientHeight;

function Orientation(e) {
    let x = e.beta;
    let y = e.gamma;

    ball.innerHTML = "beta : " + x + "\n";
    ball.innerHTML = "gamma: " + y + "\n";

    if (x >  90) { x =  90};
    if (x < -90) { x = -90};

    x += 50;
    y += 90;

    ball.style.top  = (posX*x/180 - 10) + "px";
    ball.style.left = (posY*y/180 - 10) + "px";
}

window.addEventListener('deviceorientation', Orientation)