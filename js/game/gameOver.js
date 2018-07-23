// This function checks if the player has lost (if true - changes to GameOver mode)
function gameOver (arena, player) {

    if(collide(arena, player)) {

        clearInterval(interval);
        document.onkeydown = gameOverMode;
        iframeCry.style.visibility = 'visible';
        gameOverAnim.style.visibility = 'visible';
        addScore();

        setTimeout(function() {
            iframeCry.style.display = 'none';
            canvas.style.display = 'none';
            nextTile.style.display = 'none';
            mainMenu.style.visibility = 'hidden';
            mainHighscore.style.visibility = 'hidden';
            mainControlls.style.visibility = 'hidden';
        }, 3000);

    }

}