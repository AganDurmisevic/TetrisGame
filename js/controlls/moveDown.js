var score = 0;
var score2 = 0;

// Player down
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
        lineSweep();
    }
    drawWorld();
}

// Player2 down
function moveDown2(arena2, player2) {

    player2.pos.y += 1;
    if (collide(arena2, player2)) {

        move.play();
        player2.pos.y -= 1;
        score2 += 10;
        document.getElementById( 'scoreTwo' ).innerHTML = "SCORE: " + score2;
        merge(arena2, player2);
        tileReset2();
        lineSweep2();
    }
    drawWorld2();

}