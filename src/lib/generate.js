const gridSize = 9;
const mineCount = 10;

export default () => {
    const grid = [];

    for (let i = 0; i < gridSize; i++) {
        grid[i] = [];
    }

    let placedMines = 0;
    while (placedMines < 10) {
        const x = Math.floor(Math.random() * gridSize);
        const y = Math.floor(Math.random() * gridSize);
        if (grid[x][y] !== 'X') {
            placedMines += 1;
        }
        grid[x][y] = 'X';
    }

    return grid;
}