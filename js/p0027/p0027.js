/* eslint no-param-reassign: 0 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export default function removeElement(nums, val) {
  const len = nums.length;
  let writeIndex = 0;
  let i = 0;
  while (i < len) {
    if (nums[i] !== val) {
      nums[writeIndex] = nums[i];
      writeIndex += 1;
    }
    i += 1;
  }
  return writeIndex;
}
