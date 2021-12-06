function lengthOfLongestSubstring(s: string): number {
  let [left, right] = [0, 0];
  let [sLen, maxLen] = [s.length, 0];
  const que = [];
  while(right < sLen) {
      if(que.includes(s[right])) {
          while(que.shift() !== s[right]) left += 1;
      }
      que.push(s[right++])
      if(que.length > maxLen) maxLen = que.length
  }
  return maxLen
};