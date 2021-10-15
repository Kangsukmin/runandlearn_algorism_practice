function word_to_charList(word: string): string[] {
    return word.split("")
}

function intersections(first_char_list, second_char_list): string[] {
    const [first_char_list_copy, second_char_list_copy] = [[...first_char_list], [...second_char_list]]
    const intersections_word = []
    for(let char of first_char_list_copy) {
        if(second_char_list_copy.includes(char)) {
            intersections_word.push(char)
            second_char_list_copy.splice(second_char_list_copy.indexOf(char), 1)
        }
    }
    return intersections_word
}

function commonChars(words: string[]): string[] {
    const copy_words = [...words]
    let commonCharactors = word_to_charList(copy_words[0])
    for(let word of copy_words){
        commonCharactors = intersections(commonCharactors, word_to_charList(word))
    }
    return commonCharactors
};
