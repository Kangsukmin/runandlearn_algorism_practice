function hammingDistance(x: number, y: number): number {
    const [xLog, yLog] = [Math.log2(x), Math.log2(y)];
    let exp = Math.max(Math.floor(xLog), Math.floor(yLog));
    let count = 0
    while (exp >= 0) {
        const div = 2 ** exp;
        const [x_val, y_val] = [Math.floor(x / div), Math.floor(y / div)];
        x %= div
        y %= div
        if (x_val !== y_val) count += 1
        exp -= 1
    }
    return count;
};
