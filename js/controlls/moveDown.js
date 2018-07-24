// Player down
function moveDown (arena, player, nextTile, canvas, context, scoreCounter, smallContext, smallCanvas) {

    player.pos.y += 1;
    //Check if arena and player collide
    if (collide (arena, player)) {
        move.play ();
        player.pos.y -= 1;
        player.score += 10;
        document.getElementById (scoreCounter).innerHTML = "SCORE: " + player.score;
        merge (arena, player);
        tileReset (nextTile, player, arena);
        lineSweep (arena, player, nextTile, scoreCounter, canvas, context, smallContext, smallCanvas);
    }
    drawWorld (arena, player, nextTile, canvas, context, smallContext, smallCanvas);
}