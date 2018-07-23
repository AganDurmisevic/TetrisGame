function drawMatrix2(matrix, offset) {

    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0) {
                context2.fillStyle = colors[value];
                context2.fillRect(x + offset.x,
                    y + offset.y,
                    1, 1);
                context2.clearRect(x + offset.x + 0.05,
                    y + offset.y + 0.05,
                    0.9, 0.9);
                context2.fillRect(x + offset.x + 0.05,
                    y + offset.y + 0.05,
                    0.8, 0.8);
            }
        });
    });
}


