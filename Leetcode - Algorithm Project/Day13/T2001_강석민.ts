function reverseBits(n: number): number {
  const bit = '0'.repeat(32 - n.toString(2).length) + n.toString(2)
  return parseInt(bit.split("").reverse().join(""), 2);
};