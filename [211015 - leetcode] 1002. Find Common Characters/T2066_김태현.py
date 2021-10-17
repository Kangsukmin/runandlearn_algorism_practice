from collections import Counter
# 항목의 개수를 셀 때, 사용할 수 있는 class -> collections.Counter
# 각각의 요소별 개수를 dictionary 형태로 저장

class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        # 첫 단어를 비교대상으로 지정
        compare = Counter(words[0])

        # 다음 단어부터 하나씩 비교
        for word in words[1:]:
            cnt = Counter(word)
            compare = compare & cnt
            # Counter 객체의 교집합 연산(&), 합집합 연산(|)

        answer = list(compare.elements())
        # elements() -> 카운터 된 숫자만큼의 요소를 리턴

        return answer