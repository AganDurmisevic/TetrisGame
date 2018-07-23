function newTile2(matrix) {

    console.log("next2xd");
    smallContext2.fillStyle = '#2B3D51';
    smallContext2.fillRect ( 0, 0, smallCanvas2.width, smallCanvas2.height );

    nextPlayer2.pos.y = (smallContext2.length / 2 | 0) - (nextPlayer2.matrix[0].length / 2 | 0);
    nextPlayer2.pos.x = (smallContext2.length / 2 | 0) - (nextPlayer2.matrix[0].length / 2 | 0);

    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0) {
                smallContext2.fillStyle = colors[value];
                smallContext2.fillRect(x, y, 1, 1);
                smallContext2.clearRect(x + 0.05, y + 0.05, 0.9, 0.9);
                smallContext2.fillRect(x + 0.05, y + 0.05, 0.8, 0.8);
            }
        });
    });

}