const ENTER = 13;
const START = 32;

const LEFT = 37;
const RIGHT = 39;
const DOWN = 40;
const ROTATE_L = 69;
const ROTATE_R = 81;
const PAUSE = 80;
const LEFT_A = 65;
const RIGHT_D = 68;
const DOWN_S = 83;
const ROTATE_LM = 75;
const ROTATE_RS = 76;
var interval = 0;

var startmode = function(e) {
    sound.play();
    switch (e.keyCode) {
        case START : {
            interval = setInterval(function() {
                moveDown(arena1, player1, nextPlayer1, canvas1, context1, 'score', smallContext1, smallCanvas1);
                moveDown(arena2, player2, nextPlayer2, canvas2, context2, 'scoreTwo', smallContext2, smallCanvas2);
            }, 1000);
            start.style.visibility = 'hidden';
            tileReset(nextPlayer1, player1, arena1);
            tileReset(nextPlayer2, player2, arena2);
            drawWorld(arena1, player1, nextPlayer1, canvas1, context1, smallContext1, smallCanvas1);
            drawWorld(arena2, player2, nextPlayer2, canvas2, context2, smallContext2, smallCanvas2);
            document.onkeydown = standardMode;
            break;
        }
    }
}

var standardMode = function(e) {
    switch(e.keyCode) {
        case DOWN: {

            moveDown(arena1, player1, nextPlayer1, canvas1, context1, 'score', smallContext1, smallCanvas1);
            break;
        }
        case LEFT: {
            moveLeft(arena1, player1, nextPlayer1, canvas1, context1, smallContext1, smallCanvas1);
            break;
        }
        case RIGHT: {
            moveRight(arena1, player1, nextPlayer1, canvas1, context1, smallContext1, smallCanvas1);
            break;
        }
        case ROTATE_LM: {
            rotateClockwise(player1.matrix, arena1, player1, nextPlayer1, canvas1, context1, smallContext1, smallCanvas1);
            break;
        }
        case ROTATE_RS: {
            rotateCounterClockwise(player1.matrix, arena1, player1, nextPlayer1, canvas1, context1, smallContext1, smallCanvas1);
            break;
        }
        case RIGHT_D: {
            moveRight(arena2, player2, nextPlayer2, canvas2, context2, smallContext2, smallCanvas2);
            break;
        }

        case LEFT_A: {
            moveLeft(arena2, player2, nextPlayer2, canvas2, context2, smallContext2, smallCanvas2);
            break;
        }
        case DOWN_S: {
            moveDown(arena2, player2, nextPlayer2, canvas2, context2, 'scoreTwo', smallContext2, smallCanvas2);
            break;
        }
        case ROTATE_L: {
            rotateClockwise(player2.matrix, arena2, player2, nextPlayer2, canvas2, context2, smallContext2, smallCanvas2);
            break;
        }
        case ROTATE_R: {
            rotateCounterClockwise(player2.matrix, arena2, player2, nextPlayer2, canvas2, context2, smallContext2, smallCanvas2);
            break;
        }
        case PAUSE: {
            paused.play();
            sound.stop();
            clearInterval(interval);
            document.onkeydown = breakMode;
            pause.style.visibility = 'visible';
            iframe.style.visibility = 'visible';
            break;
        }
    }
}

var breakMode = function(e) {
    switch (e.keyCode) {
        case START: {
            paused.stop();
            sound.play();
            interval = setInterval(function() {
                moveDown(arena1, player1, nextPlayer1, canvas1, context1, 'score', smallContext1, smallCanvas1);
                moveDown(arena2, player2, nextPlayer2, canvas2, context2, 'scoreTwo', smallContext2, smallCanvas2);
            }, 1000);
            document.onkeydown = standardMode;
            pause.style.visibility = 'hidden';
            iframe.style.visibility = 'hidden';
            break;
        }
    }
}

var gameOverMode = function(e) {
    switch (e.keyCode) {
        case ENTER: {
            document.onkeydown = startmode;
            gameOverAnim.style.visibility = 'hidden';
            javascript:location.reload ();
            break;
        }
    }
}

document.onkeydown = startmode;
document.getElementById('score').innerHTML = "SCORE: " + player1.score;
document.getElementById('scoreTwo').innerHTML = "SCORE: " + player2.score;
start.style.visibility = 'visible';