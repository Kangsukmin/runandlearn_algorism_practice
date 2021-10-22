function frequencySort(s: string): string {
    const str_num = {}
    for(let chr of s) {
        if (Object.keys(str_num).includes(chr)) {
            str_num[chr] += 1
        } else {
            str_num[chr] = 1
        }
    }
    const sort_char_list = Object.keys(str_num).map(key => [key, str_num[key]]).sort((a, b) => b[1] - a[1])
    return sort_char_list.map(value => value[0].repeat(value[1])).join('')
};
