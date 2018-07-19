function gameOver () {

    if(collide(arena, player)) {

        clearInterval(interval);
        document.onkeydown = gameOverMode;
        gameOverAnim.style.visibility = 'visible';
        addScore();

    }

}