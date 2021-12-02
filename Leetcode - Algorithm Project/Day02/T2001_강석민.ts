function rotate(nums: number[], k: number): void {
  k %= nums.length
  nums.unshift(...nums.splice(nums.length - k, k))
};