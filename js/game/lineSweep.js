// This function checks a row and removes it if it is full
function lineSweep(arena, player, nextTile, scoreCounter, canvas, context, smallContext, smallCanvas) {

    for (let y = arena.length - 1; y > 0; y--) {
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
            drawWorld(arena, player, nextTile, canvas, context, smallContext, smallCanvas);
            console.log(counter);
            y++;
            player.score += 100;
            document.getElementById(scoreCounter).innerHTML = "SCORE: " + player.score;
        }
    }
}


