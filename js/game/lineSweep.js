// This function checks a row and removes it if it is full
function lineSweep() {

    for (let y = arena1.length - 1; y > 0; y --) {

        var counter = 0;
        for (let x = 0; x < arena1[y].length; x++) {

            if(arena1[y][x] === 0) {
                counter += 1;

            }

        }

        if (counter === 0) {

            full.play();
            const row = arena1.splice(y, 1)[0].fill(0);
            arena.unshift(row);
            drawWorld();
            drawWorld2();
            console.log(counter);
            y ++;
            score += 100;
            document.getElementById('score').innerHTML = "SCORE: " + score;

        }

    }


}


