/**
 * This function checks a row and removes it if it is full, this time it also places a row with an empty field in it to the arena of the opposing player
 * @param arena is the area in which the action takes place :)
 * @param player is the tile that is being controlled by the player
 * @param nextTile is the next tile that is being drawn in the small canvas
 * @param scoreCounter is the place where the score of the player is being drawn
 * @param canvas is the place where the arena is being drawn
 * @param context is the tile that is being drawn
 * @param smallContext is the tile that occurs next
 * @param smallCanvas is the small box next to the big canvas in which the next tile is being drawn
 */
function lineSweep (arena, player, nextTile, scoreCounter, canvas, context, smallContext, smallCanvas) {

    var rowCount = 0;
    const width = 12;
    for (let y = arena.length - 1; y > 0; y --) {
        var counter = 0;
        for (let x = 0; x < arena[y].length; x++) {
            if(arena[y][x] === 0) {
                counter += 1;
            }
        }
        if (counter === 0) {
            full.play();
            const row = arena.splice(y, 1)[0].fill(0);
            arena.unshift (row);
            var random = Math.floor(width * Math.random());
            switch(player.identifier) {
                case 1: {
                    arena2.shift();
                    arena2.push ([0,0,0,0,0,0,0,0,0,0,0,0]);
                    for (let i = 0; i < width; i ++) {
                        arena2[arena2.length - 1][i] = 1;
                    }
                    arena2[arena2.length - 1][random] = 0;
                    break;
                }
                case 2: {
                    arena1.shift ();
                    arena1.push ([0,0,0,0,0,0,0,0,0,0,0,0]);
                    for (let i = 0; i < width; i ++) {
                        arena1[arena1.length - 1][i] = 1;
                    }
                    arena1[arena1.length - 1][random] = 0;
                    break;
                }
            }
            console.log(random);
            drawWorld (arena, player, nextTile, canvas, context, smallContext, smallCanvas);
            console.log (counter);
            y ++;
            rowCount ++;
        }
    }
    if (rowCount !== 0) {
        player.score += 100 * (rowCount * 2);
        document.getElementById(scoreCounter).innerHTML = "SCORE: " + player.score;
    }
}