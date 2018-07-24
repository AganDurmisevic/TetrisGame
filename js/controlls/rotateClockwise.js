// This function rotates the tiles clockwise
function rotateClockwise(matrix, arena, player, nextTile, canvas, context, smallContext, smallCanvas) {
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
    matrix.forEach(row => row.reverse());
    drawWorld(arena, player, nextTile, canvas, context, smallContext, smallCanvas);
}