// find max consecutive ones
export default function searchInfindMaxConsecutiveOnessert(nums) {
  const len = nums.length;
  let max = 0;
  for (let i = 0; i < len;) {
    if (nums[i] === 0) {
      i += 1;
      //eslint-disable-next-line
      continue;
    }
    let j = i;
    for (; j < len; j += 1) {
      if (nums[j] === 0) {
        break;
      }
    }
    max = (j - i) > max ? (j - i) : max;
    i = j;
  }
  return max;
}
