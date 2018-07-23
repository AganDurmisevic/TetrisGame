// this function resets the tile if it collides anywhere
function tileReset() {

    const tiles = 'OTJSZLI';

    var next = (tiles.length * Math.random() | 0);
    var current = (tiles.length * Math.random() | 0);
    console.log(next);

    if (tempPlayer !== null) {
        current = tempPlayer;
    }
    nextPlayer.matrix = createTiles(tiles[next]);
    player1.matrix = createTiles(tiles[current]);

    player1.pos.y = 0;
    player1.pos.x = (arena1[0].length / 2 | 0) - (player1.matrix[0].length / 2 | 0);
    tempPlayer = next;


    gameOver(arena1, player1);

}