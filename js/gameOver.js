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