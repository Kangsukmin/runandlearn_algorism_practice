class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        evens, odds = [], []
        merges = []
        flag = True
        for i in nums:
            if i % 2 == 0:
                evens.append(i)
            else:
                odds.append(i)

        while True:
            if not evens or not odds:
                break

            if flag:  # even
                merges.append(evens.pop())
            else: # odds
                merges.append(odds.pop())

            flag = not flag

        if evens:
            merges.append(evens[-1])
        else:
            merges.append(odds[-1])

        return merges