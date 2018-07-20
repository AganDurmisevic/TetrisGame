const canvas2 = document.getElementById('canvasTwo');
const context2 = canvas2.getContext('2d');

const smallCanvas2 = document.getElementById('nextTile2');
const smallContext2 = smallCanvas2.getContext('2d');

context2.scale(20, 20);
smallContext2.scale(77, 35);
var tempPlayer2 = null;

const nextPlayer2 = {

    pos: {

        x: 0,
        y: 0,

    },

    matrix: null,

};

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