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

function collide(arena, player) {
    const m = player.matrix;
    const o = player.pos;
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 &&
                (arena[y + o.y] &&
                    arena[y + o.y][x + o.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

function drawWorld() {
    context.fillStyle = '#2B3D51';
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawMatrix(arena, {x: 0, y: 0});
    drawMatrix(player.matrix, player.pos);


}

const player = {
<<<<<<< HEAD
    pos: {
        x: 0,
        y: 0,
    },
    matrix: null,
};

=======
    x: 4,
    y: 0,
    matrix: null,
};

const offset = {
    x: 4,
    y: 0,
}
>>>>>>> 8fa3bc141dea9afb027241ab369a190f064169be


function drawMatrix(matrix, offset) {

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

function createMatrix(h, w) {
    const matrix = [];
    while(h--) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

const arena = createMatrix(20, 12);

function tileReset() {
    const tiles = 'OTJSZLI';
    player.matrix = createTiles(tiles[tiles.length * Math.random() | 0]);
    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) -
                   (player.matrix[0].length / 2 | 0);

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

tileReset();
drawWorld();
