function arrangeCoins(n: number): number {
    let count = 1
    let sum = 1
    if(n === 1) return 1
    for(;sum <= n; count++)
        sum += count + 1
    return count - 1
};
