class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        size = len(nums)
        if k > size:
            k = k % size
        left = nums[:-k]
        del nums[:-k]
        nums.extend(left)