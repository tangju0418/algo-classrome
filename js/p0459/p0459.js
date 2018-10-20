// repeated-substring-pattern
export default function repeatedSubstringPattern(s) {
  const len = s.length;
  if (len <= 1) {
    return false;
  }
  let subStr = s[0];

  for (let i = 1; i <= len / 2; i += 1) {
    const subLen = subStr.length;
    if (len % subLen != 0) {
      subStr += s[i];
      //eslint-disable-next-line
      continue;
    }

    let p = i;
    for (; p < len;) {
      const nextStr = s.slice(p, p + subLen);
      if (subStr === nextStr) {
        p += subLen;
      } else {
        break;
      }
    }
    if (p === len) {
      return true;
    }
    subStr += s[i];
  }

  return false;
}
