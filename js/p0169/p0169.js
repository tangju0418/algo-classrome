// majority-element
export default function majorityElement(nums) {
  const len = nums.length;
  let num = nums[0];
  let count = 1;
  let i = 1;
  while (i < len) {
    if (nums[i] !== num) {
      count -= 1;
      if (count === 0) {
        num = nums[i + 1];
        count = 1;
        i += 1;
      }
    } else {
      count += 1;
    }
    i += 1;
  }
  return num;
}
