//The function checks if the player has lost (if true - changes to GameOver mode)
function gameOver (player) {

    if(collide(arena, player1)) {

        clearInterval(interval);
        document.onkeydown = gameOverMode;
        iframeCry.style.visibility = 'visible';
        gameOverAnim.style.visibility = 'visible';
        addScore();

        setTimeout(function() {
            iframeCry.style.visibility = 'hidden';
        }, 3000);

    }

}