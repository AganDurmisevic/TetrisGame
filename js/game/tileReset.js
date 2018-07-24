/**
 * This function resets the tile if it collides anywhere
 * @param nextTile
 * @param player
 * @param arena
 */
function tileReset (nextTile, player, arena) {

    const tiles = 'OTJSZLIU';

    var next = (tiles.length * Math.random () | 0);
    var current = (tiles.length * Math.random () | 0);
    console.log (next);

    if (player.tempPlayer !== null) {
        current = player.tempPlayer;
    }
    nextTile.matrix = createTiles (tiles[next]);
    player.matrix = createTiles (tiles[current]);

    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0);
    player.tempPlayer = next;


    gameOver (arena, player);

}