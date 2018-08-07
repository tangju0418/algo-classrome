import { ListNode } from '../common/list_int';

export default function addTwoNumbers(l1, l2) {
  let next1 = l1;
  let next2 = l2;

  const head = new ListNode(0);
  let tail = head;
  let isPlusOne = false;
  while (next1 != null || next2 != null || isPlusOne) {
    let sum = 0;
    if (next1 != null && next2 != null) {
      sum = next1.val + next2.val;
    } else if (next1 === null && next2 === null) {
      sum = 0;
    } else {
      sum = next1 !== null ? next1.val : next2.val;
    }

    sum += isPlusOne ? 1 : 0;
    if (sum > 9) {
      tail.next = new ListNode(sum % 10);
      isPlusOne = true;
    } else {
      tail.next = new ListNode(sum);
      isPlusOne = false;
    }

    tail = tail.next;
    next1 = next1 != null ? next1.next : null;
    next2 = next2 != null ? next2.next : null;
  }

  return head.next;
}
