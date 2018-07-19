var score = 0;

function moveDown() {

    player.pos.y += 1;

    if (collide(arena, player)) {

        move.play();
        player.pos.y -= 1;
        score += 10;
        document.getElementById( 'score' ).innerHTML = "SCORE: " + score;
        merge(arena, player);
        tileReset();
        lineSweep();

    }

    drawWorld();

}