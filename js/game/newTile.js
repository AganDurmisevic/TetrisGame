/**
 * This function creates a new tile
 * @param matrix is the matrix of the next tile that is being drawn
 * @param nextTile is the tile that will occur next
 * @param smallContext is the place where the next tile is being drawn
 * @param smallCanvas is the small canvas next to the arena-canvas
 */
function newTile (matrix, nextTile, smallContext, smallCanvas) {

    smallContext.fillStyle = '#2B3D51';
    smallContext.fillRect (0, 0, smallCanvas.width, smallCanvas.height);

    nextTile.pos.y = (smallContext.length / 2 | 0) - (nextTile.matrix[0].length / 2 | 0);
    nextTile.pos.x = (smallContext.length / 2 | 0) - (nextTile.matrix[0].length / 2 | 0);

    matrix.forEach ((row, y) => {
        row.forEach ((value, x) => {
            if (value !== 0) {
                smallContext.fillStyle = colors[value];
                smallContext.fillRect (x, y, 1, 1);
                smallContext.clearRect (x + 0.05, y + 0.05, 0.9, 0.9);
                smallContext.fillRect (x + 0.05, y + 0.05, 0.8, 0.8);
            }
        });
    });

}
