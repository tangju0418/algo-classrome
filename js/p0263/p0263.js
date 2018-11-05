// only have factors 2,3,5
/* eslint no-param-reassign: 0 */
export default function isUgly(num) {
  let preNum = Number.NEGATIVE_INFINITY;
  while (num > 1 && preNum !== num) {
    preNum = num;
    if (num >= 2 && num % 2 === 0) {
      num /= 2;
    } else if (num >= 3 && num % 3 === 0) {
      num /= 3;
    } else if (num >= 5 && num % 5 === 0) {
      num /= 5;
    }
  }
  return num === 1;
}
