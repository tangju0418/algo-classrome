// pascals-triangle-ii
export default function getRow(rowIndex) {
  const arr = [[1]];
  for (let i = 1; i <= rowIndex; i += 1) {
    const preLine = arr[i - 1];
    arr.push(Array(i + 1).fill(1)
       .map((x, index) => (preLine[index - 1] || 0) + (preLine[index] || 0)));
  }
  return arr[rowIndex];
}
