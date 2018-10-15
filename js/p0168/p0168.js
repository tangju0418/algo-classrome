// convert int to letter
export default function convertToTitle(n) {
  const numberToLetter = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let str = '';
  while (n > 0) {
    const remainder = n % 26 || 26;
    str = numberToLetter[remainder] + str;
    //eslint-disable-next-line
    n = Math.floor((n - 1) / 26);
  }

  return str;
}
