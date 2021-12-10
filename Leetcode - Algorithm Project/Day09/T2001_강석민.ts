function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if(list1 === null) return list2;
  if(list2 === null) return list1;
  let [next1, next2] = [list1, list2];
  let head: ListNode;
  if(next1.val > next2.val) {
      head = next2
      next2 = next2.next
  } else {
      head = next1
      next1 = next1.next
  }
  let tail = head;
  while(next1 && next2) {
      if (next1.val > next2.val) {
          tail.next = next2
          next2 = next2.next
      } else {
          tail.next = next1
          next1 = next1.next
      }
      tail = tail.next
  }
  if(next1) {
      tail.next = next1;
  } else if(next2) {
      tail.next = next2;
  }
  return head
};