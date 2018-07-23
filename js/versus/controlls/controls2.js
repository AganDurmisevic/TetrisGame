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

//Startmode for the beginning and only ENTER is expected
var startmode = function(e) {

    sound.play();
    switch (e.keyCode) {

        case START : {
            interval = setInterval(function() {
                moveDown(arena1, player1);
                moveDown2(arena2, player2);
            }, 1000);
            start.style.visibility = 'hidden';
            tileReset();
            tileReset2();
            drawWorld();
            drawWorld2();
            document.onkeydown = standardmode;
            break;

        }

    }

}

//Stanadardmode - Movementmode and main listener
var standardmode = function(e) {
    switch(e.keyCode) {

        //down
        case DOWN: {

            moveDown(arena1, player1);
            break;

        }

        //left
        case LEFT: {

            moveLeft(arena1, player1);
            break;

        }

        //right
        case RIGHT: {

            moveRight(arena1, player1);
            break;

        }

        //rotate clockwise
        case ROTATE_LM: {

            rotateClockwise(player1.matrix);
            break;

        }

        //rotate counterclockwise
        case ROTATE_RS: {

            rotateCounterClockwise(player1.matrix);
            break;

        }

        //player2 right
        case RIGHT_D: {

            moveRight(arena2, player2);
            break;

        }

        //player2 left
        case LEFT_A: {

            moveLeft(arena2, player2);
            break;

        }

        //player2 down
        case DOWN_S: {

            moveDown2(arena2, player2);
            break;

        }

        //player2 rotate clockwise
        case ROTATE_L: {

            rotateClockwise(player2.matrix);
            break;

        }

        //player2 rotate counterclockwise
        case ROTATE_R: {

            rotateCounterClockwise(player2.matrix);
            break;

        }

        //change to breakmode
        case PAUSE: {
            paused.play();
            sound.stop();
            clearInterval(interval);
            document.onkeydown = breakmode;
            pause.style.visibility = 'visible';
            iframe.style.visibility = 'visible';
            break;
        }

    }

}

//breakmode for paused game
//only ENTER is expected
var breakmode = function(e) {

    switch (e.keyCode) {

        case START: {
            paused.stop();
            sound.play();
            interval = setInterval(function() {
                moveDown(arena1, player1);
                moveDown2(arena2, player2);
            }, 1000);
            document.onkeydown = standardmode;
            pause.style.visibility = 'hidden';
            iframe.style.visibility = 'hidden';
            break;

        }

    }

}

//GameOver mode if player has lost
//only ENTER is expected
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

//standardmode
document.onkeydown = startmode;
document.getElementById('score').innerHTML = "SCORE" + " " + " : ";
document.getElementById('scoreTwo').innerHTML = "SCORE" + " " + " : ";
start.style.visibility = 'visible';