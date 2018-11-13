// min jump step
export default function jump(nums) {
  const len = nums.length;

  let step = 0;
  let farthest = 0;

  for (let i = 0; i < len && farthest < len - 1;) {
    let j = i;
    let farthestIndex = i;
    let farthestLocation = farthest;
    for (; j < len && j <= farthest; j += 1) {
      if (j + nums[j] > farthestLocation) {
        farthestLocation = j + nums[j];
        farthestIndex = j;
      }
    }
    step += 1;
    i = farthestIndex + 1;
    farthest = farthestLocation;
  }
  return step;
}
