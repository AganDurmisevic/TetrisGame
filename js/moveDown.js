var score = 0;

function moveDown() {
<<<<<<< HEAD
    player.pos.y += 1;
    if (collide(arena, player)) {
        player.pos.y -= 1;
        score += 10;
        document.getElementById('score').innerHTML = "SCORE: " + score;
        merge(arena, player);
        tileReset();
    }
    drawWorld();
=======

        offset.y += 1;
        context.fillStyle = '#2B3D51';
        context.fillRect ( 0, 0, canvas.width, canvas.height );
        drawMatrix ( player.matrix );
        score += 10;
        document.getElementById ( 'score' ).innerHTML = "SCORE: " + score;

>>>>>>> 8fa3bc141dea9afb027241ab369a190f064169be
}