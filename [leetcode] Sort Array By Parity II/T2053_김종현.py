class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        odd, even, result = [], [], []
        
        for num in nums:
            if num%2 == 0:
                even.append(num)
            else:
                odd.append(num)
        
        for i in range(len(even)):
            result.append(even[i])
            result.append(odd[i])
        
        return result