// This function moves the tiles to the left
function moveLeft(arena, player, nextPlayer, canvas, context, smallContext, smallCanvas) {

    player.pos.x -= 1;

    if (collide(arena, player)) {
        player.pos.x += 1;
    }
    drawWorld(arena, player, nextPlayer, canvas, context, smallContext, smallCanvas);
}