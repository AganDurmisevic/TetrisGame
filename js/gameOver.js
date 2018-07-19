function gameOver () {

    if(collide(arena, player)) {


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