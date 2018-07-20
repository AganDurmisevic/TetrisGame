var score = 0;
function moveDown(arena1, player1) {

    player1.pos.y += 1;
    //Check if arena and player collide
    if (collide(arena1, player1)) {
        move.play();
        player1.pos.y -= 1;
        score += 10;
        document.getElementById( 'score' ).innerHTML = "SCORE: " + score;
        merge(arena1, player1);
        tileReset();
        lineSweep(arena1);
    }
    drawWorld();
}

function moveDown2(arena2, player2) {

    player2.pos.y += 1;

    if (collide(arena2, player2)) {

        move.play();
        player2.pos.y -= 1;
        score += 10;
        document.getElementById( 'score' ).innerHTML = "SCORE: " + score;
        merge(arena2, player2);
        tileReset2();
        lineSweep(arena2);
    }
    drawWorld2();

}