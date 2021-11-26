def solution(number, k):
    while k:
        for i in range(len(number)):
            if number[i] < number[i+1]:
                number = number[:i] + number[i+1:]
                break
        k -= 1
    return number