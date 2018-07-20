var score = 0;

//The function moves the tiles down
function moveDown(player) {

    player1.pos.y += 1;

    //Check if arena and player collide
    if (collide(arena, player)) {

        move.play();
        player1.pos.y -= 1;
        score += 1000;
        document.getElementById( 'score' ).innerHTML = "SCORE: " + score;
        merge(arena, player);
        tileReset(player);
        lineSweep();
    }
    drawWorld(player);

}