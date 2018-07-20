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

//Startmode for the beginning and only ENTER is expected
var startmode = function(e) {

    sound.play();
    switch (e.keyCode) {

        case START : {

            start.style.visibility = 'hidden';
            tileReset(player1);
            drawWorld(player1);
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

            modifySpeed();
            moveDown(player1);
            break;

        }

        //left
        case LEFT: {

            moveLeft(player1);
            break;

        }

        //right
        case RIGHT: {

            moveRight(player1);
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

            moveRight(player2);
            break;

        }

        //player2 left
        case LEFT_A: {

            moveLeft(player2);
            break;

        }

        //player2 down
        case DOWN_S: {

            moveDown(player2);
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
            modifySpeed();
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
start.style.visibility = 'visible';