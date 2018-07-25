/**
 * This function checks if the player has lost (if true - changes to GameOver mode)
 * @param arena is the tetris arena
 * @param player is the current tile
 */
function gameOver (arena, player) {

    if (collide(arena, player)) {

        clearInterval (interval);
        document.onkeydown = gameOverMode;
        iframeCry.style.visibility = 'visible';
        gameOverAnim.style.visibility = 'visible';
        yourName = prompt("YOUR NAME (IF IN MULTIPLAYER TYPE IN THE WINNERS NAME): ", "");
        addScore ();

        setTimeout (function() {
            iframeCry.style.display = 'none';
            canvas.style.display = 'none';
            nextTile.style.display = 'none';
            mainMenu.style.visibility = 'hidden';
            mainControlls.style.visibility = 'hidden';
            canvasTwo.style.display = 'none';
            nextTile2.style.display = 'none';
            mainHighscore.style.visibility = 'hidden';
        }, 3000);

    }

}