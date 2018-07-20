const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const canvas2 = document.getElementById('canvasTwo');
const context2 = canvas2.getContext('2d');
const smallCanvas = document.getElementById('nextTile');
const smallContext = smallCanvas.getContext('2d');
var tempPlayer = null;
const smallCanvas2 = document.getElementById('nextTile2');
const smallContext2 = smallCanvas2.getContext('2d');
var tempPlayer2 = null;

context.scale(20, 20);
context2.scale(20, 20);
smallContext.scale(77, 35);
smallContext2.scale(77, 35);

context.fillStyle = '#2B3D51';
context.fillRect(0, 0, canvas.width, canvas.height);

const colors = [
    null,
    '#FF0D72',
    '#0DC2FF',
    '#FFF',
    '#F538FF',
    '#FF8E0D',
    '#FFE138',
    '#3877FF',
];

function collide(arena, player) {
    const m = player.matrix;
    const o = player.pos;
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 && (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
                modifySpeed();
                return true;
            }
        }
    }
    return false;
}

function newTile(matrix) {

    smallContext.fillStyle = '#2B3D51';
    smallContext.fillRect ( 0, 0, smallCanvas.width, smallCanvas.height );

    nextPlayer.pos.y = (smallContext.length / 2 | 0) - (nextPlayer.matrix[0].length / 2 | 0);
    nextPlayer.pos.x = (smallContext.length / 2 | 0) - (nextPlayer.matrix[0].length / 2 | 0);

    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0) {
                smallContext.fillStyle = colors[value];
                smallContext.fillRect(x, y, 1, 1);
                smallContext.clearRect(x + 0.05, y + 0.05, 0.9, 0.9);
                smallContext.fillRect(x + 0.05, y + 0.05, 0.8, 0.8);
            }
        });
    });

}

function newTile2(matrix) {

    console.log("next2xd");
    smallContext2.fillStyle = '#2B3D51';
    smallContext2.fillRect ( 0, 0, smallCanvas2.width, smallCanvas2.height );

    nextPlayer2.pos.y = (smallContext2.length / 2 | 0) - (nextPlayer2.matrix[0].length / 2 | 0);
    nextPlayer2.pos.x = (smallContext2.length / 2 | 0) - (nextPlayer2.matrix[0].length / 2 | 0);

    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0) {
                smallContext2.fillStyle = colors[value];
                smallContext2.fillRect(x, y, 1, 1);
                smallContext2.clearRect(x + 0.05, y + 0.05, 0.9, 0.9);
                smallContext2.fillRect(x + 0.05, y + 0.05, 0.8, 0.8);
            }
        });
    });

}

function drawWorld() {

    if(!(collide(arena1, player1))) {

        context.fillStyle = '#2B3D51';
        context.fillRect ( 0, 0, canvas.width, canvas.height );

        drawMatrix ( arena1, { x: 0, y: 0 } );
        drawMatrix ( player1.matrix, player1.pos );

        newTile ( nextPlayer.matrix );

    }

    else {

        clearInterval(interval);

    }


}

function drawWorld2() {

    if(!(collide(arena2, player2))) {

        context2.fillStyle = '#2B3D51';
        context2.fillRect ( 0, 0, canvas.width, canvas.height );

        drawMatrix2 ( arena2, { x: 0, y: 0 } );
        drawMatrix2 ( player2.matrix, player2.pos );

        newTile2 (nextPlayer2.matrix);

    }

    else {

        clearInterval(interval);

    }


}

const player1 = {
    pos: {
        x: 0,
        y: 0,
    },
    matrix: null,
};

const player2 = {
    pos: {
        x: 0,
        y: 0,
    },
    matrix: null,
};

const nextPlayer = {

    pos: {

        x: 0,
        y: 0,

    },

    matrix: null,

};

const nextPlayer2 = {

    pos: {

        x: 0,
        y: 0,

    },

    matrix: null,

};



function drawMatrix(matrix, offset) {

    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0) {
                context.fillStyle = colors[value];
                context.fillRect(x + offset.x,
                    y + offset.y,
                    1, 1);
                context.clearRect(x + offset.x + 0.05,
                    y + offset.y + 0.05,
                    0.9, 0.9);
                context.fillRect(x + offset.x + 0.05,
                    y + offset.y + 0.05,
                    0.8, 0.8);
            }
        });
    });
}

function drawMatrix2(matrix, offset) {

    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0) {
                context2.fillStyle = colors[value];
                context2.fillRect(x + offset.x,
                    y + offset.y,
                    1, 1);
                context2.clearRect(x + offset.x + 0.05,
                    y + offset.y + 0.05,
                    0.9, 0.9);
                context2.fillRect(x + offset.x + 0.05,
                    y + offset.y + 0.05,
                    0.8, 0.8);
            }
        });
    });
}


function createMatrix(h, w) {

    const matrix = [];
    while(h--) {

        matrix.push(new Array(w).fill(0));

    }

    return matrix;

}

const arena1 = createMatrix(20, 12);
const arena2 = createMatrix(20, 12);

function tileReset() {

    const tiles = 'OTJSZLI';

    var next = (tiles.length * Math.random() | 0);
    var current = (tiles.length * Math.random() | 0);
    console.log(next);

    if (tempPlayer !== null) {
        current = tempPlayer;
    }
    nextPlayer.matrix = createTiles(tiles[next]);
    player1.matrix = createTiles(tiles[current]);

    player1.pos.y = 0;
    player1.pos.x = (arena1[0].length / 2 | 0) - (player1.matrix[0].length / 2 | 0);
    tempPlayer = next;


    gameOver(arena1, player1);

}

function tileReset2() {

    const tiles = 'OTJSZLI';

    var next2 = (tiles.length * Math.random() | 0);
    var current2 = (tiles.length * Math.random() | 0);

    if (tempPlayer2 !== null) {
        current2 = tempPlayer2;
    }
    nextPlayer2.matrix = createTiles(tiles[next2]);
    player2.matrix = createTiles(tiles[current2]);

    player2.pos.y = 0;
    player2.pos.x = (arena2[0].length / 2 | 0) - (player2.matrix[0].length / 2 | 0);
    tempPlayer2 = next2;


    gameOver(arena2, player2);

}

function merge(arena, player) {

    player.matrix.forEach((row, y) => {

        row.forEach((value, x) => {

            if (value !== 0) {

                arena[y + player.pos.y][x + player.pos.x] = value;

            }

        });

    });

}

function lineSweep(arena) {

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
            drawWorld();
            drawWorld2();
            console.log(counter);
            y ++;
            score += 100;
            document.getElementById('score').innerHTML = "SCORE: " + score;

        }

    }


}


