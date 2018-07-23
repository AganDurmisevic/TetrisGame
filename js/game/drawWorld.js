// This function draws the world
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