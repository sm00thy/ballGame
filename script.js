let ball = document.querySelector('#ball'),
    board = document.querySelector('#board'),
    position = document.querySelector('#position'),
    hole = document.querySelector('.hole'),
    x, y;


let posX = board.clientWidth - ball.clientWidth;
let posY = board.clientHeight - ball.clientHeight;

let a = board.clientWidth - hole.clientWidth;
let b = board.clientWidth - hole.clientHeight;

let posHole = hole.getBoundingClientRect();
let posBall = ball.getBoundingClientRect();


let bx = hole.getBoundingClientRect();

function Orientation(e) {
    x = e.beta;
    y = e.gamma;
    
    
    x += 50;
    y += 90;
    
    x < 0 ? (x = 2) : x = x;
    y < 0 ? (y = 2) : y = y;
    
    x > 92 ? (x = 92) : x;
    y > 183 ? (y = 183) : y;
    
    ball.style.top  = (posX*x/90 - 10) + "px";
    ball.style.left = (posY*y/180 - 10) + "px";   

    checkIfIsInHole(x,y)

    console.log(x + "y:" + y + " Bx: " + bx.width*2 + " height" + bx.height*4)
}

// function checkIfBallIsOnBoard(x,y) {
//     x < 0 ? (x = 2) : x = x;
//     y < 0 ? (y = 2) : y = y;

//     x > 92 ? (x = 92) : x;
//     y > 183 ? (y = 183) : y;
// }

function checkIfIsInHole(x, y){
    if (x <= 49 && x >= 47 && (y <= 96 && y >= 95))
        alert("Win!")  
}

window.addEventListener('deviceorientation', Orientation)