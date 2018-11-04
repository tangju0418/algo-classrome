// only have factors 2,3,5
/* eslint no-param-reassign: 0 */
export default function isUgly(num) {
  //eslint-disable-next-line
  function factor(num) {
    const preNum = num;
    if (num >= 2 && num % 2 === 0) {
      num /= 2;
    } else if (num >= 3 && num % 3 === 0) {
      num /= 3;
    } else if (num >= 5 && num % 5 === 0) {
      num /= 5;
    }

    if (num === preNum || num === 1) {
      return num;
    }

    return factor(num);
  }

  const minNum = factor(num);
  return minNum === 1;
}
