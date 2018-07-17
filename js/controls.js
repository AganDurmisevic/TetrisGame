const DOWN = 40;
const LEFT = 37;
const RIGHT = 39;
const ROTATE_1 = 69;
const ROTATE_2 = 81;

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
        case ROTATE_1: {

            rotateClockwise();

        }

        //rotate counterclockwise
        case ROTATE_2: {

            rotateCounterClockwise();

        }

    }

}