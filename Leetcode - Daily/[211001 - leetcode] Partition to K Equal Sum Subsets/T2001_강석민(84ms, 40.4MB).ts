function canPartitionKSubsets(nums: number[], k: number): boolean {
    const numSum = nums.reduce((acc, val) => acc + val, 0)
    if(numSum%k) return false
    
    const copyNum = [...nums].sort((a, b) => b - a)
    let isVisitCopyNum = Array(copyNum.length).fill(0)
    const partitionSum = numSum / k
    
    const recursiveSum = (currentSum, checkList, currentIndex) => {
        if(partitionSum === currentSum) return checkList;
        else if(partitionSum < currentSum) return false;
        for(let index = currentIndex; index < copyNum.length; index++) {
            if(!checkList[index]) {
                const copyList = [...checkList]
                copyList[index] = 1
                const result = recursiveSum(currentSum + copyNum[index], copyList, index + 1)
                if (result) {
                    return result
                }
            }
        }
        return false;
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(!isVisitCopyNum[i]) {
            isVisitCopyNum[i] = 1
            const result = recursiveSum(copyNum[i], isVisitCopyNum, i + 1)
            if(!result) return false;
            isVisitCopyNum = result
        }
    }
    return true;
};
