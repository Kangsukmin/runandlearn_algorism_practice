function climbStairs(n: number): number {
  const count = [1, 1]
  if (n === 1) return count[n];
  for (let i = 2; i <= n; i++) {
      count[i%2] = count[0] + count[1];
  }
  return count[n%2]
};