class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        even = []
        odd = []
        result = []
        for i in nums:
            if i % 2 == 0:
                even.append(i)
            else:
                odd.append(i)
        
        while True:
            if not even and not odd:
                break
            result.append(even.pop())
            result.append(odd.pop())
        return result