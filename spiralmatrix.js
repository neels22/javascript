function spiralTraverse(n) {
    const matrix = [];
    for (let row = 0; row < n; row++) {
        matrix[row] = [];
    }
    console.log(matrix);
    let { row, col } = { row: 0, col: 0 };
    const directions = ["r", "d", "l", "u"];
    let currentDirection = directions[0];
    for (let count = 1; count <= n ** 2; count++) {
        matrix[row][col] = count;
        if (currentDirection === "r" && (col === n - 1 || matrix[row][col + 1] !== undefined)) {
            currentDirection = directions[1];
        } else if (currentDirection === "d" && (row === n - 1 || matrix[row + 1][col] !== undefined)) {
            currentDirection = directions[2];
        } else if (currentDirection === "l" && (col === 0 || matrix[row][col - 1] !== undefined)) {
            currentDirection = directions[3];
        } else if (currentDirection === "u" && (row === 0 || matrix[row - 1][col] !== undefined)) {
            currentDirection = directions[0];
        }
        if (currentDirection === "r") {
            col++;
        } else if (currentDirection === "d") {
            row++;
        } else if (currentDirection === "l") {
            col--;
        } else if (currentDirection === "u") {
            row--;
        }
    }
    return matrix;
}

spiralTraverse(5);