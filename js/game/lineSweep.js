// This function checks a row and removes it if it is full
function lineSweep(arena, player, nextPlayer, scoreCounter, canvas, context, smallContext, smallCanvas) {
    var rowCount = 0;
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
            arena.unshift(row);
            drawWorld(arena, player, nextPlayer, canvas, context, smallContext, smallCanvas);
            console.log(counter);
            y ++;
            rowCount ++;
        }
    }
    if(rowCount !== 0) {
        player.score += 100 * (rowCount * 2);
        document.getElementById(scoreCounter).innerHTML = "SCORE: " + player.score;
    }
}