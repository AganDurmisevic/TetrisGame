/**
 *
 * @param arena
 * @param player
 * @param nextPlayer
 * @param scoreCounter
 * @param canvas
 * @param context
 * @param smallContext
 * @param smallCanvas
 */
function lineSweep (arena, player, nextPlayer, scoreCounter, canvas, context, smallContext, smallCanvas) {

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
            switch(player.identifier) {
                case 1: {
                    arena2.shift();
                    arena2.push ([0,0,0,0,0,0,0,0,0,0,0,0]);
                    for (let i = 0; i < width; i ++) {
                        arena2[arena2.length - 1][i] = 1;
                    }
                    break;
                }
                case 2: {
                    arena1.shift ();
                    arena1.push ([0,0,0,0,0,0,0,0,0,0,0,0]);
                    for (let i = 0; i < width - 1; i ++) {
                        arena1[arena1.length - 1][i] = 1;
                    }
                    break;
                }
            }
            drawWorld (arena, player, nextPlayer, canvas, context, smallContext, smallCanvas);
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