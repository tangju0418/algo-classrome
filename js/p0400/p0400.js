// nth-digit
export default function findNthDigit(n) {
  let digits = 1;
  while (n > digits * 9 * (10 ** (digits - 1))) {
    //eslint-disable-next-line
    n -= (digits * 9 * (10 ** (digits - 1)));
    digits += 1;
  }
  const a = Math.floor((n - 1) / digits);
  const b = (n - 1) % digits;
  const num = (10 ** (digits - 1)) + a;

  const res = Number(String(num).charAt(b));
  return res;
}
