// This function is being used to create a matrix filled with zero's
function createMatrix(h, w) {

    const matrix = [];
    while(h--) {

        matrix.push(new Array(w).fill(0));

    }

    return matrix;

}

const arena1 = createMatrix(20, 12);
const arena2 = createMatrix(20, 12);
