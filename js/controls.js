const DOWN = 40;
const LEFT = 37;
const RIGHT = 39;
const ROTATE_L = 69;
const ROTATE_R = 81;

document.onkeydown = function(e) {
    switch(e.keycode) {

        //down
        case DOWN: {

            moveDown();

        }

        //left
        case LEFT: {

            moveLeft();

        }

        //right
        case RIGHT: {

            moveRight();

        }

        //rotate clockwise
        case ROTATE_L: {

            rotateClockwise();

        }

        //rotate counterclockwise
        case ROTATE_R: {

            rotateCounterClockwise();

        }

    }

}