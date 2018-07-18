function moveLeft() {
    offset.x -= 1;
    context.fillStyle = '#2B3D51';
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawMatrix(player.matrix);
}