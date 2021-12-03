function moveZeroes(nums: number[]): void {
  let idx = 0;
  for(let count = 0; count < nums.length; count++){
      if(nums[idx] !== 0) idx++;
      else {
          nums.push(...nums.splice(idx, 1))
      }
  }
}