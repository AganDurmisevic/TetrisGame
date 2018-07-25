/**
 * This function merges the player -/tile-matrix and the arena-matrix
 * @param arena is the area in which tetris is being played
 * @param player is the current tile, which is moved by the player
 */
function merge (arena, player) {
    player.matrix.forEach ((row, y) => {
        row.forEach ((value, x) => {
            if (value !== 0) {
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        });
    });
}