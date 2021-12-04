function reverseString(s: string[]): void {
  let [left, right] = [0, s.length - 1]
  while(left < right) {
      const temp = s[right];
      s[right] = s[left];
      s[left] = temp;
      left++; right--;
  }
};