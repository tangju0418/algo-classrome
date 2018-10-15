// sum of two element in source eqqual target,return the index
export default function twoSum(numbers, target) {
  let j = numbers.length - 1;
  let i = 0;
  while (i < j) {
    const sum = numbers[i] + numbers[j];
    if (sum === target) {
      return [i + 1, j + 1];
    } else if (target < sum) {
      j -= 1;
    } else {
      i += 1;
    }
  }
  return [];
}
