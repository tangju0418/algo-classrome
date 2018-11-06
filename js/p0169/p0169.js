// majority-element
export default function majorityElement(nums) {
  const len = nums.length;
  let num = 0;
  let count = 0;
  let i = 0;
  while (i < len) {
    if (count === 0) {
      num = nums[i];
      count = 1;
      i += 1;
      //eslint-disable-next-line
      continue;
    }
    if (nums[i] !== num) {
      count -= 1;
    } else {
      count += 1;
    }
    i += 1;
  }
  return num;
}
