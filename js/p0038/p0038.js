// count and say
export default function countAndSay(n) {
  let str = '1';
  for (let i = 1; i < n; i += 1) {
    let strI = '';
    const len = str.length;
    for (let j = 0; j < len;) {
      const currentChar = str[j];
      let p = j + 1;
      for (; p < len; p += 1) {
        if (str[p] !== currentChar) {
          break;
        }
      }
      strI += (p - j) + currentChar;
      j = p;
    }
    str = strI;
  }
  return str;
}
