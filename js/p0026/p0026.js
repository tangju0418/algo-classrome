/* eslint no-param-reassign: 0 */
/*
  * indexDifferent: The index after the last different number
  * index:  Iterative pointer
  * currentNum: The last different number
*/
export default function removeDuplicates(nums) {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  let indexDifferent = 1;
  let index = 1;

  while (index < len) {
    if (nums[index] !== nums[indexDifferent - 1]) {
      nums[indexDifferent] = nums[index];
      indexDifferent += 1;
    }
    index += 1;
  }
  return indexDifferent;
}
