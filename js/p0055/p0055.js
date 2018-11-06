// can jump
export default function canJump(nums) {
  //eslint-disable-next-line
  function f1(nums) {
    const len = nums.length;
    if (len < 2) {
      return true;
    }
    let i = len - 2;
    let step = 1;
    for (; i >= 0; i -= 1) {
      if (nums[i] < step) {
        step += 1;
      } else {
        step = 1;
      }
    }
    return step === 1;
  }

  //eslint-disable-next-line
  function f2(nums) {
    const len = nums.length;
    let maxIndex = 0;
    for (let i = 0; i < len - 1 && i <= maxIndex; i += 1) {
      const toIndex = i + nums[i];
      maxIndex = toIndex > maxIndex ? toIndex : maxIndex;
    }
    return maxIndex >= len - 1;
  }

  // return f1(nums);
  return f2(nums);
}
