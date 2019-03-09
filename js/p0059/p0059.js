// spiral-matrix-ii
export default function generateMatrix(n) {
  const arr = [];
  for (let x = 0; x < n; x += 1) {
    arr[x] = [];
  }
  let num = 1;
  let direction = 'toRight';
  let i = 0;
  let j = 0;
  while (num <= n * n) {
    if (direction === 'toRight') {
      if (j < n && arr[i][j] === undefined) {
        arr[i][j] = num;
        j += 1;
        num += 1;
      } else {
        direction = 'toDown';
        j -= 1;
        i += 1;
      }
    } else if (direction === 'toDown') {
      if (i < n && arr[i][j] === undefined) {
        arr[i][j] = num;
        i += 1;
        num += 1;
      } else {
        direction = 'toLeft';
        i -= 1;
        j -= 1;
      }
    } else if (direction === 'toLeft') {
      if (j >= 0 && arr[i][j] === undefined) {
        arr[i][j] = num;
        j -= 1;
        num += 1;
      } else {
        direction = 'toTop';
        i -= 1;
        j += 1;
      }
    } else if (direction === 'toTop') {
      if (i >= 0 && arr[i][j] === undefined) {
        arr[i][j] = num;
        i -= 1;
        num += 1;
      } else {
        direction = 'toRight';
        i += 1;
        j += 1;
      }
    }
  }
  return arr;
}
