// This multiplayer-function checks a row and if it is full, the function removes it and adds it to the other player's arena
function lineSweep() {

    const width = 12;
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
            arena1.unshift(row);
            arena2.shift();
            arena2.push([0,0,0,0,0,0,0,0,0,0,0,0]);
            for(let i = 0; i < width - 1; i ++) {
                if(i / 2 === 0) {
                    arena2[arena2.length - 1][i] = 0;
                } else {
                    arena2[arena2.length - 1][i] = 1;
                }
            }
            drawWorld();
            drawWorld2();
            console.log(counter);
            y ++;
            score += 100;
            document.getElementById('score').innerHTML = "SCORE: " + score;

        }

    }


}

function lineSweep2() {

    const width = 12;

    for (let y = arena2.length - 1; y > 0; y --) {

        var counter = 0;
        for (let x = 0; x < arena2[y].length; x++) {

            if(arena2[y][x] === 0) {
                counter += 1;

            }

        }

        if (counter === 0) {

            full.play();
            const row = arena2.splice(y, 1)[0].fill(0);
            arena2.unshift(row);
            arena1.shift();
            arena1.push([0,0,0,0,0,0,0,0,0,0,0,0]);
            for(let i = 0; i < width - 1; i ++) {
                if(i / 2 === 0) {
                    arena1[arena1.length - 1][i] = 0;
                } else {
                    arena1[arena1.length - 1][i] = 1;
                }
            }
            drawWorld();
            drawWorld2();
            console.log(counter);
            y ++;
            score += 100;
            document.getElementById('scoreTwo').innerHTML = "SCORE: " + score2;

        }

    }


}


