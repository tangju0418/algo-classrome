/* eslint no-param-reassign: 0 */
/*
  * indexDifferent: The index after the last different number
  * index:  Iterative pointer
  * currentNum: The last different number
*/
export default function removeDuplicates(nums) {
  const len = nums.length;
  let indexDifferent = 0;
  let currentNum = NaN;
  let index = 0;

  while (index < len) {
    if (nums[index] !== currentNum) {
      currentNum = nums[index];
      nums[indexDifferent] = nums[index];
      indexDifferent += 1;
    }
    index += 1;
  }
  return indexDifferent;
}
