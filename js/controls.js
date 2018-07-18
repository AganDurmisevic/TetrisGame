const DOWN = 40;
const LEFT = 37;
const RIGHT = 39;
const ROTATE_L = 69;
const ROTATE_R = 81;

document.addEventListener('keydown', e => {
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

    }

});