// repeated-substring-pattern
export default function repeatedSubstringPattern(s) {
  // const n = s + s;
  // return n.slice(1, n.length - 1).indexOf(s) !== -1;
  const len = s.length;
  if (len <= 1) {
    return false;
  }

  for (let i = 1; i <= len / 2; i += 1) {
    if (len % i !== 0) {
      //eslint-disable-next-line
      continue;
    }

    if (subStrjoinS(i)) {
      return true;
    }
  }

  // i前的子字符串能否重复组成s
  function subStrjoinS(i) {
    const subStr = s.slice(0, i);
    for (let p = 0; p < len;) {
      const nextStr = s.slice(p, p + i);
      if (subStr === nextStr) {
        p += i;
      } else {
        return false;
      }
    }
    return true;
  }

  return false;
}
