const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.caSmoothingEnabled = false;
context.scale(23, 6);

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

var matrix = [];
const tiles = 'OTJSZLI';

function drawWorld() {

    context.fillStyle = '#2B3D51';
    context.fillRect(0, 0, canvas.width, canvas.height);

    player.matrix = createTiles(tiles[tiles.length * Math.random() | 0]);
    drawMatrix(player.matrix);

}

const player = {
    x: 0,
    y: 0,
    matrix: null,
};


function drawMatrix(matrix) {

    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0) {
                context.fillStyle = colors[value];
                context.fillRect(x,
                                 y,
                                    1, 1);
            }
        });
    });
}

drawWorld();
