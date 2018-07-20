var score = 0;

<<<<<<< HEAD
function moveDown(arena1, player1) {

    player1.pos.y += 1;

    if (collide(arena1, player1)) {
=======
//The function moves the tiles down
function moveDown(player) {

    player1.pos.y += 1;

    //Check if arena and player collide
    if (collide(arena, player)) {
>>>>>>> 19472b4e4c894f0c8ec0fefdc1753f86488bf7b2

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