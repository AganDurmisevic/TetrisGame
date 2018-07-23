function tileReset2() {

    const tiles = 'OTJSZLI';

    var next2 = (tiles.length * Math.random() | 0);
    var current2 = (tiles.length * Math.random() | 0);

    if (tempPlayer2 !== null) {
        current2 = tempPlayer2;
    }
    nextPlayer2.matrix = createTiles(tiles[next2]);
    player2.matrix = createTiles(tiles[current2]);

    player2.pos.y = 0;
    player2.pos.x = (arena2[0].length / 2 | 0) - (player2.matrix[0].length / 2 | 0);
    tempPlayer2 = next2;


    gameOver(arena2, player2);

}