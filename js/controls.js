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

            interval = setInterval(moveDown, 1000);
            document.onkeydown = standardmode;
            pause.style.visibility = 'hidden';
            break;

        }

    }

}

document.onkeydown = startmode;
document.getElementById('score').innerHTML = "";
start.style.visibility = 'visible';