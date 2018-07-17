document.onkeydown = function(e) {
    switch(e.keycode) {
        //down
        case 40: {
            moveDown();
        }
        //left
        case 37: {
            moveLeft();
        }
        //right
        case 39: {
            moveRight();
        }
        //rotate clockwise
        case 69: {
            rotateClockwise();
        }
        //rotate counterclockwise
        case 81: {
            rotateCounterClockwise();
        }

    }
}