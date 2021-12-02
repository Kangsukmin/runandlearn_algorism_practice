class Solution:
    def search(self, nums: List[int], target: int) -> int:
        start = 0
        end = len(nums)

        while start < end:
            mid = ((end-start) // 2) + start

            if nums[mid] == target:
                return mid

            elif nums[mid] > target:
                end = mid

            elif nums[mid] < target:
                start = mid+1

        return -1
