function removeElements(head: ListNode | null, val: number): ListNode | null {
    const valList = []
    let target = head
    while(true) {
        if (target === null) break;
        target.val === val ? '' : valList.push(target.val)
        target = target.next
    }
    let tail = null
    for (let idx = valList.length - 1; idx >= 0; idx--) {
        const node = new ListNode(valList[idx], tail)
        tail = node
    }
    return tail
};
