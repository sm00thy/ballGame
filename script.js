let ball = document.querySelector('#ball'),
    board = document.querySelector('#board'),
    position = document.querySelector('#position'),
    hole = document.querySelector('.hole'),
    x, y, time, result;


let posX = board.clientWidth - ball.clientWidth;
let posY = board.clientHeight - ball.clientHeight;

function Orientation(e) {
    time = new Date();
    //get beta and gamma position
    x = e.beta;
    y = e.gamma;
    
    x += 50;
    y += 90;
    //check if is not out of board
    x < 0 ? (x = 2) : x = x;
    y < 0 ? (y = 2) : y = y;
    
    x > 92 ? (x = 92) : x;
    y > 183 ? (y = 183) : y;
    
    //ball position
    ball.style.top  = (posX*x/90 - 10) + "px";
    ball.style.left = (posY*y/180 - 10) + "px";   

    checkIfIsInHole(x,y)
    checkIfTouchRed(x,y)
    matchTime(time);
}

// function checkIfBallIsOnBoard(x,y) {
//     x < 0 ? (x = 2) : x = x;
//     y < 0 ? (y = 2) : y = y;

//     x > 92 ? (x = 92) : x;
//     y > 183 ? (y = 183) : y;
// }

function checkIfIsInHole(x, y){
    if (x <= 48 && x >= 46 && y <= 97 && y >= 95){
        alert("Win! Your result: " + result.getSeconds() + " seconds")  
        x = 30;
        y = 1;
    }
}

function checkIfTouchRed(x,y)
{
    if(x <= 43 && x >= 41 && y <= 91 && y >= 86) 
        lost();
    else if(x <= 43 && x >= 39 && y <= 109 && y >= 103)
        lost();
    else if(x <= 54 && x >= 50 && y <= 94 && y >= 87)    
        lost();
    }

function lost(){
    alert("You lost! Your result: " + result.getSeconds() + " seconds");
    x = 30;
    y = 1;  
}

function matchTime(startTime){
    let temp = new Date();
    result = temp - startTime;
    console.log(result.getSeconds())
}
    
window.addEventListener('deviceorientation', Orientation)