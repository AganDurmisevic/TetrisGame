// The function checks if the tiles collide with the arena or any other tile
function collide (arena, player) {
    const m = player.matrix;
    const o = player.pos;
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 && (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
                //If player and arena collide
                return true;
            }
        }
    }
    return false;
}