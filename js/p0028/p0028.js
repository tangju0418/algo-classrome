// implement indexOf
export default function strStr(haystack, needle) {
  const len = haystack.length;
  const tarLen = needle.length;

  for (let i = 0; i <= len - tarLen; i += 1) {
    let p = i;
    let j = 0;
    for (; j < tarLen; j += 1, p += 1) {
      if (haystack[p] !== needle[j]) {
        break;
      }
    }
    if (j === tarLen) {
      return i;
    }
  }

  return -1;
}
