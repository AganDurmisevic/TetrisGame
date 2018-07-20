<<<<<<< HEAD
function gameOver (arena, player) {
=======
//The function checks if the player has lost (if true - changes to GameOver mode)
function gameOver (player) {
>>>>>>> 19472b4e4c894f0c8ec0fefdc1753f86488bf7b2

    if(collide(arena, player)) {

        clearInterval(interval);
        document.onkeydown = gameOverMode;
        //iframeCry.style.visibility = 'visible';
        //gameOverAnim.style.visibility = 'visible';
        addScore();

        /*setTimeout(function() {
            iframeCry.style.visibility = 'hidden';
        }, 3000);*/

    }

}