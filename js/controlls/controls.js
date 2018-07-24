const ENTER = 13;
const START = 32;
const LEFT = 37;
const RIGHT = 39;
const DOWN = 40;
const PAUSE = 80;
const ROTATE_LM = 75;
const ROTATE_RS = 76;
var interval = 0;

// Startmode for the beginning, only ENTER is expected
var startmode = function(e) {
    sound.play();
    switch (e.keyCode) {
        case START : {
            interval = setInterval(function() {
                                moveDown(arena1, player1, nextPlayer1, canvas1, context1, 'score', smallContext1, smallCanvas1);
            }, 1000);
            start.style.visibility = 'hidden';
            tileReset(nextPlayer1, player1, arena1);
            drawWorld(arena1, player1, nextPlayer1, canvas1, context1, smallContext1, smallCanvas1);
            document.onkeydown = standardMode;
            break;
        }
    }
}

// Standadardmode - the tiles are being generated and start moving, main listener
var standardMode = function(e) {
    switch(e.keyCode) {
        // down
        case DOWN: {
            moveDown(arena1, player1, nextPlayer1, canvas1, context1, 'score', smallContext1, smallCanvas1);
            break;
        }
        // left
        case LEFT: {
            moveLeft ( arena1, player1, nextPlayer1, canvas1, context1, smallContext1, smallCanvas1 );
            break;
        }
        // right
        case RIGHT: {
            moveRight(arena1, player1, nextPlayer1, canvas1, context1, smallContext1, smallCanvas1);
            break;
        }
        // rotate clockwise
        case ROTATE_LM: {
            rotateClockwise(player1.matrix, arena1, player1, nextPlayer1, canvas1, context1, smallContext1, smallCanvas1);
            break;
        }
        // rotate counterclockwise
        case ROTATE_RS: {
            rotateCounterClockwise(player1.matrix, arena1, player1, nextPlayer1, canvas1, context1, smallContext1, smallCanvas1);
            break;
        }
        // change to breakMode
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

// breakMode, if the game is being paused
// only ENTER works
var breakMode = function(e) {
    switch (e.keyCode) {
        case START: {
            paused.stop();
            sound.play();
            document.onkeydown = standardMode;
            pause.style.visibility = 'hidden';
            iframe.style.visibility = 'hidden';
            interval = setInterval(function() {
                moveDown(arena1, player1, nextPlayer1, canvas1, context1, 'score', smallContext1, smallCanvas1);
            }, 1000);
            break;
        }
    }
}

// GameOver mode if the player has lost
// only ENTER works
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

// standardMode
document.onkeydown = startmode;
document.getElementById('score').innerHTML = "SCORE" + " " + " : " + player1.score;
start.style.visibility = 'visible';