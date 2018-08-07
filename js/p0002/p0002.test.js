import { list, isEqualList } from '../common/list_int';
import addTwoNumbers from './p0002';

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
test('test plus two list, return the result', () => {
  console.log('+++++', typeof (expect));

  const arr1 = [2, 4, 3];
  const arr2 = [5, 6, 4];
  const res = [7, 0, 8];

  const sum = addTwoNumbers(list(arr1), list(arr2));
  isEqualList(list(res), sum, expect);
});
