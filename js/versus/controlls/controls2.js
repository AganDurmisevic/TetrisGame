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
                moveDown(arena1, player1, nextPlayer1, canvas2, context2, 'scoreTwo', smallContext2, smallCanvas2);
                moveDown(arena2, player2, nextPlayer2, canvas1, context1, 'score', smallContext1, smallCanvas1);
            }, 1000);
            start.style.visibility = 'hidden';
            tileReset(nextPlayer1, player1, arena1);
            tileReset(nextPlayer2, player2, arena2);
<<<<<<< HEAD
            drawWorld(arena1, player1, nextPlayer1, canvas1, context1, smallContext1, smallCanvas1);
            drawWorld(arena2, player2, nextPlayer2, canvas2, context2, smallContext2, smallCanvas2);
            document.onkeydown = standardMode;
=======
            drawWorld(arena1, player1, nextPlayer1, canvas2, context2, smallContext2, smallCanvas2);
            drawWorld(arena2, player2, nextPlayer2, canvas1, context1, smallContext1, smallCanvas1);
            document.onkeydown = standardmode;
>>>>>>> a90bdee1a4143a6c74fd3a101f6391115f757ab6
            break;
        }
    }
}

var standardMode = function(e) {
    switch(e.keyCode) {
        case DOWN: {

            moveDown(arena1, player1, nextPlayer1, canvas2, context2, 'scoreTwo', smallContext2, smallCanvas2);
            break;
        }
        case LEFT: {
<<<<<<< HEAD
            moveLeft(arena1, player1, nextPlayer1, canvas1, context1, smallContext1, smallCanvas1);
=======

            moveLeft(arena1, player1, nextPlayer1, canvas2, context2, smallContext2, smallCanvas2);
>>>>>>> a90bdee1a4143a6c74fd3a101f6391115f757ab6
            break;
        }
        case RIGHT: {
<<<<<<< HEAD
            moveRight(arena1, player1, nextPlayer1, canvas1, context1, smallContext1, smallCanvas1);
=======

            moveRight(arena1, player1, nextPlayer1, canvas2, context2, smallContext2, smallCanvas2);
>>>>>>> a90bdee1a4143a6c74fd3a101f6391115f757ab6
            break;
        }
        case ROTATE_LM: {
<<<<<<< HEAD
            rotateClockwise(player1.matrix, arena1, player1, nextPlayer1, canvas1, context1, smallContext1, smallCanvas1);
=======

            rotateClockwise(player1.matrix, arena1, player1, nextPlayer1, canvas2, context2, smallContext2, smallCanvas2);
>>>>>>> a90bdee1a4143a6c74fd3a101f6391115f757ab6
            break;
        }
        case ROTATE_RS: {
<<<<<<< HEAD
            rotateCounterClockwise(player1.matrix, arena1, player1, nextPlayer1, canvas1, context1, smallContext1, smallCanvas1);
=======

            rotateCounterClockwise(player1.matrix, arena1, player1, nextPlayer1, canvas2, context2, smallContext2, smallCanvas2);
>>>>>>> a90bdee1a4143a6c74fd3a101f6391115f757ab6
            break;
        }
        case RIGHT_D: {
<<<<<<< HEAD
            moveRight(arena2, player2, nextPlayer2, canvas2, context2, smallContext2, smallCanvas2);
=======

            moveRight(arena2, player2, nextPlayer2, canvas1, context1, smallContext1, smallCanvas1);
>>>>>>> a90bdee1a4143a6c74fd3a101f6391115f757ab6
            break;
        }

        case LEFT_A: {
<<<<<<< HEAD
            moveLeft(arena2, player2, nextPlayer2, canvas2, context2, smallContext2, smallCanvas2);
=======

            moveLeft(arena2, player2, nextPlayer2, canvas1, context1, smallContext1, smallCanvas1);
>>>>>>> a90bdee1a4143a6c74fd3a101f6391115f757ab6
            break;
        }
        case DOWN_S: {
<<<<<<< HEAD
            moveDown(arena2, player2, nextPlayer2, canvas2, context2, 'scoreTwo', smallContext2, smallCanvas2);
=======

            moveDown(arena2, player2, nextPlayer2, canvas1, context1, 'score', smallContext1, smallCanvas1);
>>>>>>> a90bdee1a4143a6c74fd3a101f6391115f757ab6
            break;
        }
        case ROTATE_L: {
<<<<<<< HEAD
            rotateClockwise(player2.matrix, arena2, player2, nextPlayer2, canvas2, context2, smallContext2, smallCanvas2);
=======

            rotateClockwise(player2.matrix, arena2, player2, nextPlayer2, canvas1, context1, smallContext1, smallCanvas1);
>>>>>>> a90bdee1a4143a6c74fd3a101f6391115f757ab6
            break;
        }
        case ROTATE_R: {
<<<<<<< HEAD
            rotateCounterClockwise(player2.matrix, arena2, player2, nextPlayer2, canvas2, context2, smallContext2, smallCanvas2);
=======

            rotateCounterClockwise(player2.matrix, arena2, player2, nextPlayer2, canvas1, context1, smallContext1, smallCanvas1);
>>>>>>> a90bdee1a4143a6c74fd3a101f6391115f757ab6
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
                moveDown(arena1, player1, nextPlayer1, canvas2, context2, 'scoreTwo', smallContext2, smallCanvas2);
                moveDown(arena2, player2, nextPlayer2, canvas1, context1, 'score', smallContext1, smallCanvas1);
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