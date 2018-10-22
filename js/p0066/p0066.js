// plus-one
/* eslint no-param-reassign: 0 */
export default function plusOne(digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i -= 1) {
    digits[i] += 1;
    if (digits[i] === 10) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  if (digits[0] === 0) {
    digits.unshift(1);
  }
  return digits;
}
