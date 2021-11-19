function hammingDistance(x: number, y: number): number {
    let div = 2 ** Math.max(Math.floor(Math.log2(x)), Math.floor(Math.log2(y)));
    let count = 0
    while (div >= 1) {
        if (Math.floor(x / div) !== Math.floor(y / div)) count += 1
        x %= div
        y %= div
        div /= 2
    }
    return count;
};
