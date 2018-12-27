// pascals-triangle
export default function generate(numRows) {
  if (numRows === 0) {
    return [];
  }
  const arr = [[1]];
  for (let i = 1; i < numRows; i += 1) {
    const preLine = arr[i - 1];
    const subArr = Array(i + 1).fill(1)
            .map((x, index) => (preLine[index - 1] || 0) + (preLine[index] || 0));
    arr.push(subArr);
  }
  return arr;
}
