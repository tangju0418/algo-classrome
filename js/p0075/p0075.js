export default function sortColors(nums) {
  const arr = nums;
  const len = arr.length;
  let index0 = 0;
  let index1 = 0;
  let index2 = len - 1;

  while (index1 <= index2) {
    const x = arr[index1];
    if (x === 0) {
      arr[index1] = arr[index0];
      arr[index0] = x;
      index0 += 1;
      if (index1 <= index0) {
        index1 += 1;
      }
    } else if (x === 2) {
      arr[index1] = arr[index2];
      arr[index2] = x;
      index2 -= 1;
    } else {
      index1 += 1;
    }
  }
  return arr;
}
