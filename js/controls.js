const DOWN = 40;
const LEFT = 37;
const RIGHT = 39;
const ROTATE_L = 69;
const ROTATE_R = 81;
const PAUSE = 80;
const START = 32;

var startmode = function(e) {

    switch (e.keyCode) {

        case START : {
            interval = setInterval(moveDown, 1000);
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

            rotateClockwise();
            break;

        }

        //rotate counterclockwise
        case ROTATE_R: {

            rotateCounterClockwise();
            break;

        }

        case PAUSE: {
            clearInterval(interval);
            document.onkeydown = breakmode;
            document.getElementById('score').innerHTML = "PRESS SPACE TO CONTINUE";
            break;
        }


    }

}

var breakmode = function(e) {

    switch (e.keyCode) {

        case START: {

            interval = setInterval(moveDown, 1000);
            document.onkeydown = standardmode;
            break;

        }

    }

}

document.onkeydown = startmode;
document.getElementById('score').innerHTML = "PRESS SPACE TO PLAY";