class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        for idx in range(len(nums)):
            i = 0
            while idx%2 == 0 and nums[idx]%2 != 0:
                i += 1
                nums[idx], nums[idx+i] = nums[idx+i], nums[idx]
            
            while idx%2 == 1 and nums[idx]%2 != 1:
                i += 1
                nums[idx], nums[idx+i] = nums[idx+i], nums[idx]
        
        return nums
