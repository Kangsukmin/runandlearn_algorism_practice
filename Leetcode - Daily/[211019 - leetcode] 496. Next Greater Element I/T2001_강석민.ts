function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const indexNumObj = {}
    const resultList = Array(nums1.length).fill(0)
    for(let index = 0; index < nums1.length; index ++) {
        indexNumObj[nums1[index]] = index
    }
    const [nums1Copy, nums2Copy]= [[...nums1], [...nums2]]
    nums1Copy.sort((a,b) => a-b)
    for(let num of nums1Copy) {
        const numIndex = nums2Copy.indexOf(num)
        nums2Copy.splice(numIndex, 1)
        let nextNum = 0
        if (nums2Copy.length > numIndex) {
            nextNum = nums2Copy[numIndex]
        } else {
            nextNum = -1
        }
        resultList[indexNumObj[num]] = nextNum
    }
    return resultList
};
