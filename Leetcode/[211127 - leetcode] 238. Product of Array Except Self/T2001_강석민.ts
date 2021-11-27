function productExceptSelf(nums: number[]): number[] {
  const firstNums = nums.reduce((acc, val) => {
      acc.push(acc[acc.length - 1] * val)
      return acc
  }, [1])
  firstNums.pop()
  let prevMul = 1;
  const secondNums = []
  for(let idx = nums.length - 1; idx >= 0; idx--) {
      secondNums.unshift(prevMul * firstNums[idx]);
      prevMul *= nums[idx]
  }
  return secondNums;
};