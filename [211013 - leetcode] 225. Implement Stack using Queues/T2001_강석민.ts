// Array.prototype.pop() 사용 금지
class MyStack {
    main_que: number[];
    sub_que: number[];
    constructor() {
        this.main_que = []
        this.sub_que = []
    }

    private set_last_num_in_sub_que(): void {
        const que_len = this.main_que.length
        for(let count = 0; count < que_len - 1; count++) {
            this.sub_que.push(this.main_que.shift())
        }
        let temp_address = this.main_que
        this.main_que = this.sub_que
        this.sub_que = temp_address
    }

    push(x: number): void {
        this.main_que.push(x)
    }

    pop(): number {
        this.set_last_num_in_sub_que()
        return this.sub_que.shift()
    }

    top(): number {
        this.set_last_num_in_sub_que()
        const last_num = this.sub_que.shift()
        this.push(last_num)
        return last_num
    }

    empty(): boolean {
        return !!!this.main_que.length
    }
}
