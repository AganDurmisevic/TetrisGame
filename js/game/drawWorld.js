/**
 * This function draws the world
 * @param arena is the area in which the action takes place :)
 * @param player is the tile that is being controlled by the player
 * @param nextTile is the next tile that is being drawn in the small canvas
 * @param canvas is the place where the arena is being drawn
 * @param context is the tile that is being drawn
 * @param smallContext is the tile that occurs next
 * @param smallCanvas is the small box next to the big canvas in which the next tile is being drawn
 */
function drawWorld (arena, player, nextTile, canvas, context, smallContext, smallCanvas) {
    if (!(collide (arena, player ))) {
        context.fillStyle = '#2B3D51';
        context.fillRect ( 0, 0, canvas.width, canvas.height);
        drawMatrix (arena, { x: 0, y: 0 }, context);
        drawMatrix (player.matrix, player.pos, context);
        newTile (nextTile.matrix, nextTile, smallContext, smallCanvas);
    }
    else {
        clearInterval (interval);
    }
}