// This function creates a new tile
function newTile(matrix) {

    smallContext.fillStyle = '#2B3D51';
    smallContext.fillRect ( 0, 0, smallCanvas.width, smallCanvas.height );

    nextPlayer.pos.y = (smallContext.length / 2 | 0) - (nextPlayer.matrix[0].length / 2 | 0);
    nextPlayer.pos.x = (smallContext.length / 2 | 0) - (nextPlayer.matrix[0].length / 2 | 0);

    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0) {
                smallContext.fillStyle = colors[value];
                smallContext.fillRect(x, y, 1, 1);
                smallContext.clearRect(x + 0.05, y + 0.05, 0.9, 0.9);
                smallContext.fillRect(x + 0.05, y + 0.05, 0.8, 0.8);
            }
        });
    });

}
