function findKthNumber(m: number, n: number, k: number): number {
  const nums = []
  const binarySearch = (num: number): boolean => {
      let count = 0;
      for (let row = 1; row < m + 1; row++) {
          count += n >= Math.floor(num/row) ? Math.floor(num/row) : n;
      }
      return count >= k;
  }
  let [left, right] = [1, m * n]
  let mid = 0;
  while(left < right) {
      mid = (left + right) / 2
      if (!binarySearch(mid)) {
          left = mid + 1
      } else {
          right = mid
      }
  }
  return Math.floor(left);
};