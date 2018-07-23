//Canvas
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const smallCanvas = document.getElementById('nextTile');
const smallContext = smallCanvas.getContext('2d');
var tempPlayer = null;


context.scale(20, 20);
smallContext.scale(77, 35);

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