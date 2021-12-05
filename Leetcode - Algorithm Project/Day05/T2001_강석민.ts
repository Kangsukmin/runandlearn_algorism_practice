/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const nodes = []
  let node = head
  while(node) {
      nodes.push(node)
      node = node.next
  }
  if(n === 1) {
      if(nodes.length === 1) head = null
      else nodes[nodes.length - 2].next = null
  } else if(n === nodes.length) {
      head = nodes[1]
  } else {
      nodes[nodes.length - n - 1].next = nodes[nodes.length - n + 1]
  }
  return head
};