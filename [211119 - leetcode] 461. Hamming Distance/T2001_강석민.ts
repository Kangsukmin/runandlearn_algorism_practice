function hammingDistance(x: number, y: number): number {
    const [xLog, yLog] = [Math.log2(x), Math.log2(y)];
    const exp = Math.max(Math.floor(xLog), Math.floor(yLog));
    let div = 2 ** exp;
    let count = 0
    while (div >= 1) {
        if (Math.floor(x / div) !== Math.floor(y / div)) count += 1
        x %= div
        y %= div
        div /= 2
    }
    return count;
};
