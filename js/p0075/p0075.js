/* eslint no-param-reassign: 0 */
/*
  * index0: The index after the last 0
  * index:  Iterative pointer
  * index2: The index before the first 2
*/
export default function sortColors(nums) {
  const len = nums.length;
  let index0 = 0;
  let index = 0;
  let index2 = len - 1;

  while (index <= index2) {
    const x = nums[index];
    if (x === 0) {
      [nums[index0], nums[index]] = [nums[index], nums[index0]];
      index0 += 1;
      index += 1;
    } else if (x === 2) {
      [nums[index], nums[index2]] = [nums[index2], nums[index]];
      index2 -= 1;
    } else {
      index += 1;
    }
  }
}
