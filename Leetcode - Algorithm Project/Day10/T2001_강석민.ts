function combine(n: number, k: number): number[][] {
  const result = [];
  function recursive(numbers: number[], last_number: number) {
      if(numbers.length === k) result.push(numbers);
      else {
          for(let i = last_number + 1; i <= n; i++) {
              recursive([...numbers, i], i)
          }
      }
  }
  recursive([], 0)
  return result
};