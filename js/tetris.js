const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.scale(20, 20);

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

const tiles = 'OTJSZLI';

function drawWorld() {

    player.matrix = createTiles(tiles[tiles.length * Math.random() | 0]);
    drawMatrix(player.matrix);

}

const player = {
    x: 0,
    y: 0,
    matrix: null,
};

const offset = {
    x: 0,
    y: 0,
}


function drawMatrix(matrix) {

    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0) {
                context.fillStyle = colors[value];
                context.fillRect(x + offset.x,
                                 y + offset.y,
                                    1, 1);
            }
        });
    });
}

drawWorld();
