context2.fillStyle = '#2B3D51';
context2.fillRect ( 0, 0, canvas.width, canvas.height );

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