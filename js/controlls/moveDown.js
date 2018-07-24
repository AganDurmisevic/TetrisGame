// Player down
function moveDown(arena, player, nextPlayer, canvas, context, scoreCounter, smallContext, smallCanvas) {

    player.pos.y += 1;
    //Check if arena and player collide
    if (collide(arena, player)) {
        move.play();
        player.pos.y -= 1;
        player.score += 10;
        document.getElementById( scoreCounter ).innerHTML = "SCORE: " + player.score;
        merge(arena, player);
        tileReset(nextPlayer, player, arena);
        lineSweep(arena, player, nextPlayer, scoreCounter, canvas, context, smallContext, smallCanvas);
    }
    drawWorld(arena, player, nextPlayer, canvas, context, smallContext, smallCanvas);
}