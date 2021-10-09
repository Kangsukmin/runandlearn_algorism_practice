class KthLargest {
    readonly k: number;
    nums: number[];
    constructor(k: number, nums: number[]) {
        const copyNums = [...nums]
        copyNums.sort((a, b) => b - a)
        this.nums = copyNums.slice(0, k)
        if(this.nums.length < k) {
            this.nums.push(-10000)
        }
    }

    add(val: number): number {
        this.pushVal(val)
        return this.nums[this.nums.length - 1]
    }

    private pushVal(val: number): void {
        for(let index = 0; index < this.nums.length; index++) {
            if(val >= this.nums[index]) {
                this.nums.splice(index, 0, val)
                this.nums.pop()
                break;
            }
        }
    }
}