// array to linked lists
export function list(arr) {
  const head = new ListNode(0);
  let tail = head;

  for (let index = 0; index < arr.length; index += 1) {
    tail.next = new ListNode(arr[index]);
    tail = tail.next;
  }
  return head.next;
}

// Verify that the two linked lists are equal
export function isEqualList(expected, actual, expect) {
  while (expected !== null || actual !== null) {
    expect(expected.val).toEqual(actual.val);
    // eslint-disable-next-line
    expected = expected.next;
    // eslint-disable-next-line
    actual = actual.next;
  }
  expect(expected).toBeNull();
  expect(actual).toBeNull();
}

export function ListNode(val) {
  this.val = val;
  this.next = null;
}
