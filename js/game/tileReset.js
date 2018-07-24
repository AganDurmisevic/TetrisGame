// this function resets the tile if it collides anywhere
function tileReset(nextPlayer, player, arena) {

    const tiles = 'OTJSZLI';

    var next = (tiles.length * Math.random() | 0);
    var current = (tiles.length * Math.random() | 0);
    console.log(next);

    if (player.tempPlayer !== null) {
        current = player.tempPlayer;
    }
    nextPlayer.matrix = createTiles(tiles[next]);
    player.matrix = createTiles(tiles[current]);

    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0);
    player.tempPlayer = next;


    gameOver(arena, player);

}