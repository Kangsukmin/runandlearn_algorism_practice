1. [링크1](https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/640/week-5-september-29th-september-30th/3993/)
2. [링크2](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)

# K개의 같은 합을 가진 수로 나눠지는가

Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.

int 배열이 주어지고, int값 k가 주어진다. 만약 k개로 나눈 배열들의 각각의 합이 동일하면 True, 아니면 False를 반환하라.
 

## Example 1:

Input: nums = [4,3,2,3,5,2,1], k = 4
Output: true
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.

## Example 2:

Input: nums = [1,2,3,4], k = 3
Output: false

 

## Constraints:

    1 <= k <= nums.length <= 16
    1 <= nums[i] <= 104
    The frequency of each element is in the range [1, 4].

