// length-of-last-word
export default function lengthOfLastWord(s) {
  // eslint-disable-next-line
  s = trimR(s);
  const len = s.length;
  let i = len - 1;
  for (; i >= 0; i -= 1) {
    if (s[i] === ' ') {
      break;
    }
  }

  // eslint-disable-next-line
  function trimR(s) {
  // eslint-disable-next-line
    let i = s.length - 1;
    for (; i >= 0; i -= 1) {
      if (s[i] !== ' ') {
        break;
      }
    }
    if (i < 0) {
      return '';
    }
    return s.slice(0, i + 1);
  }

  return len - (i + 1);
}
