var score = 0;

function moveDown(player) {

    player1.pos.y += 1;

    if (collide(arena, player1)) {

        move.play();
        player1.pos.y -= 1;
        score += 10;
        document.getElementById( 'score' ).innerHTML = "SCORE: " + score;
        merge(arena, player);
        tileReset();
        lineSweep();
    }
    drawWorld(player1);

}