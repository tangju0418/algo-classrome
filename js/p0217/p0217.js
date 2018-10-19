// contains-duplicate
export default function containsDuplicate(nums) {
  const len = nums.length;
  const s = new Set();
  for (let i = 0; i < len; i += 1) {
    const num = nums[i];
    if (s.has(num)) {
      return true;
    }
    s.add(nums[i]);
  }
  return false;
}
