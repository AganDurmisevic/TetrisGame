/**
 * This function merges the player -/tile-matrix and the arena-matrix
 * @param arena
 * @param player
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