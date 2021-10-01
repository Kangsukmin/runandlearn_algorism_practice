function solution(number, k) {
    const stack = []
    let index = 0
    while(k) {
        if(!stack.length) {
            stack.push(number[index])
            index += 1
        }
        else {
            const targetNum = stack[stack.length - 1]
            if (targetNum >= number[index]) {
                stack.push(number[index])
                index += 1
            } else {
                stack.pop()
                k -= 1
            }
        }
    }
    return stack.join('') + number.slice(index, number.length);
}
