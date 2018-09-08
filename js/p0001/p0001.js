export default function findSum(nums, target) {
  const len = nums.length;
  const s = new Map();

  for (let i = 0; i < len; i += 1) {
    const a = nums[i];
    const index = s.get(target - a);
    if (index !== undefined) {
      return [index, i];
    }
    s.set(a, i);
  }
  return undefined;
}
