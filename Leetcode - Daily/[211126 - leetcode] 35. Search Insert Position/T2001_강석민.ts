function searchInsert(nums: number[], target: number): number {
    let [left, right] = [0, nums.length]
    let mid: number
    while(left < right) {
        mid = Math.floor((left + right) / 2)
        if(nums[mid] < target) left = mid + 1
        else right = mid
    }
    return right
};