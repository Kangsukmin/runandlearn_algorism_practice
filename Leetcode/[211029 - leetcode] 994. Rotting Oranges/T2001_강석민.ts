function orangesRotting(grid: number[][]): number {
    const [m, n] = [grid.length, grid[0].length];
    const remain_orange = []
    let [main_que, sub_que] = [[], []];
    
    function isCorrectLocation(row: number, col: number): boolean {
        if(row < m && row >= 0 && col < n && col >= 0) return true;
        return false;
    };
    
    function rottingOrange(startRow: number, startCol: number): boolean {
        const one = rottedOrange(startRow+1, startCol)
        const two = rottedOrange(startRow-1, startCol)
        const three = rottedOrange(startRow, startCol+1)
        const four = rottedOrange(startRow, startCol-1)
        return one || two || three || four;
    };

    function rottedOrange(row: number, col: number): boolean {
        if(isCorrectLocation(row, col) && grid[row][col] == 1) {
            grid[row][col] = 2
            sub_que.push([row, col])
            return true;
        }; 
        return false;
    };
    
    function getRemainOrange(): number {
        let count = 0;
        for(let row=0; row < m; row++) {
            for(let col=0; col < n; col++) {
                if (grid[row][col] === 1) {
                    count += 1;
                }
            }
        }
        return count;
    }

    for(let row=0; row < m; row++) {
        for(let col=0; col < n; col++) {
            if (grid[row][col] === 2) {
                main_que.push([row, col]);
            } else if (grid[row][col] === 1) {
                remain_orange.push([row, col]);
            }
        }
    }
    if(main_que.length === 0 && remain_orange.length) return -1;
    else if(main_que.length === 0) return 0;
    let count = 0
    while(true) {
        let isRotting = false;
        while(main_que.length) {
            const [row, col] = main_que.shift();
            isRotting = rottingOrange(row, col) || isRotting;
        }
        if (!isRotting) {
            if (getRemainOrange()) return -1;
            return count;
        }
        const temp = main_que;
        main_que = sub_que;
        sub_que = temp;
        count += 1;
    }
    
};
