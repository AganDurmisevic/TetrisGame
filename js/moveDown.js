var score = 0;

function moveDown() {
    offset.y += 1;
    context.fillStyle = '#2B3D51';
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawMatrix(player.matrix);
    score += 10;
    document.getElementById('score').innerHTML = "SCORE: " + score;
}