// This function rotates the tiles to the left
function rotateCounterClockwise(matrix, arena, player, nextTile, canvas, context, smallContext, smallCanvas) {
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [
                matrix[x][y],
                matrix[y][x],
            ] = [
                matrix[y][x],
                matrix[x][y],
            ];
        }
    }
    matrix.reverse();
    drawWorld(arena, player, nextTile, canvas, context, smallContext, smallCanvas);
}