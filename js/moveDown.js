var score = 0;

function moveDown(player) {

    player1.pos.y += 1;

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