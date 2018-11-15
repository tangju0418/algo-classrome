// next-greater-element-i
export default function nextGreaterElement(findNums, nums) {
  const m = new Map();
  const lenF = findNums.length;
  for (let n = 0; n < lenF; n += 1) {
    m.set(findNums[n], n);
  }

  const arr = [];
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    if (m.size === 0) {
      return arr;
    }
    const num = nums[i];
    const numIndex = m.get(num);

    if (numIndex !== undefined) {
      let j = i + 1;
      for (; j < len; j += 1) {
        if (nums[j] > num) {
          break;
        }
      }
      const largerNum = j === len ? -1 : nums[j];
      arr[numIndex] = largerNum;
      m.delete(num);
    }
  }
  return arr;
}
