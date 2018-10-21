// searchInsert
export default function searchInsert(nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return len;
}
