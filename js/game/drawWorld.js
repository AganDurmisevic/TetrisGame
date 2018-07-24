// This function draws the world
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