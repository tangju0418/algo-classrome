// maximum-subarray
export default function maxSubArray(nums) {
  // eslint-disable-next-line
  const f1 = function (nums) {
    const len = nums.length;
    let maxSum = nums[0];

    for (let i = 0; i < len; i += 1) {
      let sumJ = 0;
      for (let j = i; j < len; j += 1) {
        sumJ += nums[j];
        if (sumJ > maxSum) {
          maxSum = sumJ;
        }
      }
    }
    return maxSum;
  };

  // eslint-disable-next-line
  const f2 = function (nums) {
    const len = nums.length;
    let max = nums[0];
    let sum = 0;
    for (let i = 0; i < len; i += 1) {
      sum += nums[i];
      max = sum > max ? sum : max;
      sum = sum < 0 ? 0 : sum;
    }
    return max;
  };

  // eslint-disable-next-line
  const f3 = function (nums) {
    const len = nums.length;
    let max = nums[0];
    let sum = 0;
    for (let i = 0; i < len; i += 1) {
      sum += nums[i];
      sum = sum > nums[i] ? sum : nums[i];
      max = sum > max ? sum : max;
    }
    return max;
  };

  // eslint-disable-next-line
  const f4 = function (nums) {
    const len = nums.length;
    if (len === 1) {
      return nums[0];
    } else if (len < 1) {
      return Number.NEGATIVE_INFINITY;
    }

    const midIndex = Math.floor(len / 2);
    const leftMax = f4(nums.slice(0, midIndex));
    const rightMax = f4(nums.slice(midIndex + 1));

    let midLeftMax = nums[midIndex - 1];
    let sumL = 0;
    for (let i = midIndex - 1; i >= 0; i -= 1) {
      sumL += nums[i];
      if (sumL > midLeftMax) {
        midLeftMax = sumL;
      }
    }

    let midRightMax = nums[midIndex];
    let sumR = 0;
    for (let i = midIndex; i < len; i += 1) {
      sumR += nums[i];
      if (sumR > midRightMax) {
        midRightMax = sumR;
      }
    }

    const midMax = midRightMax + (midLeftMax > 0 ? midLeftMax : 0);

    return Math.max(leftMax, rightMax, midMax);
  };
  return f1(nums);
  // return f2(nums);
  // return f3(nums);
  // return f4(nums);
}
