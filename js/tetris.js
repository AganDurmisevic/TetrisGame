const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const colors = [
    null,
    '#FF0D72',
    '#0DC2FF',
    '#0DFF72',
    '#F538FF',
    '#FF8E0D',
    '#FFE138',
    '#3877FF',
];

function drawWorld() {

    context.fillStyle = '#2B3D51';
    context.fillRect(0, 0, canvas.width, canvas.height);

    createTiles();

}

drawWorld();

