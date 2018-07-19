const DOWN = 40;
const LEFT = 37;
const RIGHT = 39;
const ROTATE_L = 69;
const ROTATE_R = 81;
const PAUSE = 80;
const START = 32;
const ENTER = 13;

var startmode = function(e) {

    sound.play();
    switch (e.keyCode) {

        case START : {
            interval = setInterval(moveDown, 1000);
            start.style.visibility = 'hidden';
            tileReset();
            drawWorld();
            document.onkeydown = standardmode;
            break;

        }

    }

}

var standardmode = function(e) {
    switch(e.keyCode) {

        //down
        case DOWN: {

            moveDown();
            break;

        }

        //left
        case LEFT: {

            moveLeft();
            break;

        }

        //right
        case RIGHT: {

            moveRight();
            break;

        }

        //rotate clockwise
        case ROTATE_L: {

            rotateClockwise(player.matrix);
            break;

        }

        //rotate counterclockwise
        case ROTATE_R: {

            rotateCounterClockwise(player.matrix);
            break;

        }

        case PAUSE: {
            paused.play();
            sound.stop();
            clearInterval(interval);
            document.onkeydown = breakmode;
            pause.style.visibility = 'visible';
            break;
        }

    }

}

var breakmode = function(e) {

    switch (e.keyCode) {

        case START: {
            paused.stop();
            sound.play();
            interval = setInterval(moveDown, 1000);
            document.onkeydown = standardmode;
            pause.style.visibility = 'hidden';
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
document.getElementById('score').innerHTML = "SCORE" + " " + " : ";
start.style.visibility = 'visible';