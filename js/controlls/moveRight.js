/**
 * This function moves the tiles to the right
 * @param arena
 * @param player
 * @param nextTile
 * @param canvas
 * @param context
 * @param smallContext
 * @param smallCanvas
 */
function moveRight (arena, player, nextTile, canvas, context, smallContext, smallCanvas) {
    player.pos.x += 1;

    if (collide(arena, player)) {
        player.pos.x -= 1;
    }
    drawWorld (arena, player, nextTile, canvas, context, smallContext, smallCanvas);
}

