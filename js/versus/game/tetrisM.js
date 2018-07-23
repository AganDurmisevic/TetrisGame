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
