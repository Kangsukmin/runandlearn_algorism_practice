# 문제

두 링크중 아무거나
- [링크1](https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/639/week-4-september-22nd-september-28th/3990/)
- [링크2](https://leetcode.com/problems/sort-array-by-parity-ii/)


# 문제 설명

정수형 배열 nums가 주어진다.

해당 배열의 반은 홀수고, 반은 짝수이다.

nums[i]의 값이 i와 같은 종류(홀수, 짝수)가 되도록 배열을 정렬하라.

정렬된 배열을 리턴값으로 내보낸다.

## 도전과제
- 추가적인 변수를 선언하지 않고 풀어보세요. (Could you solve it in-place?)

## 예시 1
```
Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] 이것도 정답처리가 된다.
```

## 예시 2
```
Input: nums = [2,3]
Output: [2,3]
```
 

## 입력값

- 2 <= nums.length <= 2 * 104
- nums.length 는 짝수다.
- nums 안에 있는 숫자 절반은 짝수다.
- 0 <= nums[i] <= 1000
