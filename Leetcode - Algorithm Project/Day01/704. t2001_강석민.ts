function search(nums: number[], target: number): number {
    let [left, right] = [0, nums.length];
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) return mid;
        else if(nums[mid] < target) left = mid + 1;
        else right = mid;
    }
    return -1
};
