function uniquePathsIII(grid: number[][]): number {
    const [m, n] = [grid.length, grid[0].length]
    const start = [0, 0]
    let count = 0
    let pathLen = 0
    
    for(let row=0; row < m; row++)
        for(let col=0; col < n; col++) {
            if(grid[row][col] === 1) {
                start[0] = row
                start[1] = col
                pathLen += 1
                grid[row][col] = 0
            }
            else if(grid[row][col] === 0) {
                pathLen += 1
            }
        }
    
    const dfs = (path: number[][], row: number, col: number, pathCount: number) => {
        if(row < 0 || col < 0 || row >= m || col >= n) return;
        if(path[row][col] === 1 || path[row][col] === -1) return;
        if(path[row][col] === 2) {
            if (pathCount === pathLen) {
                count += 1;
            }
            return;
        }
        path[row][col] = 1;
        dfs(path, row, col + 1, pathCount + 1);
        dfs(path, row, col - 1, pathCount + 1);
        dfs(path, row + 1, col, pathCount + 1);
        dfs(path, row - 1, col, pathCount + 1);
        path[row][col] = 0;
    }
    
    dfs(grid, start[0], start[1], 0)
    return count
};

// https://i.imgur.com/dc39yuJ.png
