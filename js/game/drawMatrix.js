/**
 * This function draws the matrix
 * @param matrix
 * @param offset
 * @param context is the canvas
 */
function drawMatrix (matrix, offset, context) {
    matrix.forEach ((row, y) => {
        row.forEach ((value, x) => {
            if (value !== 0) {
                context.fillStyle = colors[value];
                context.fillRect(x + offset.x,
                    y + offset.y,
                    1, 1);
                context.clearRect(x + offset.x + 0.05,
                    y + offset.y + 0.05,
                    0.9, 0.9);
                context.fillRect(x + offset.x + 0.05,
                    y + offset.y + 0.05,
                    0.8, 0.8);
            }
        });
    });
}