// The function creates the tiles in form of a matrix
function createTiles(tiles) {

    if (tiles === 'I') {
        return [
            [0, 7, 0, 0],
            [0, 7, 0, 0],
            [0, 7, 0, 0],
            [0, 7, 0, 0],
        ];
    } else if (tiles === 'L') {
        return [
            [0, 6, 0],
            [0, 6, 0],
            [0, 6, 6],
        ];
    } else if (tiles === 'J') {

        return [
            [0, 5, 0],
            [0, 5, 0],
            [5, 5, 0],
        ];
    } else if (tiles === 'O') {
        return [
            [ 4, 4 ],
            [ 4, 4 ],
        ];
    } else if (tiles === 'Z') {
        return [
            [0, 0, 0],
            [3, 3, 0],
            [0, 3, 3],
        ];
    } else if (tiles === 'S') {
        return [
            [0, 0, 0],
            [0, 2, 2],
            [2, 2, 0],
        ];
    } else if (tiles === 'T') {
        return [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0],
        ];
    }
}
