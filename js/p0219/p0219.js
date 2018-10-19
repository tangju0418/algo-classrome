// contains-duplicate and abs index2 - index1 <= target
export default function containsNearbyDuplicate(nums, k) {
  const len = nums.length;
  const m = new Map();
  for (let i = 0; i < len; i += 1) {
    const num = nums[i];
    const numLastIndex = m.get(num);
    if (numLastIndex !== undefined && i - numLastIndex <= k) {
      return true;
    }
    m.set(num, i);
  }
  return false;
}
