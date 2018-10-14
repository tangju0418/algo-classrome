// longest Common Prefix
export default function longestCommonPrefix(strs) {
  const len = strs.length;
  if (len === 0) {
    return '';
  } else if (len === 1) {
    return strs[0];
  }

  let i = 0;
  const strs0Len = strs[0].length;
  while (i < strs0Len) {
    const substr = strs[0].charAt(i);
    for (let x = 0; x < len; x += 1) {
      const currentChar = strs[x].charAt(i);
      if (currentChar === undefined || currentChar !== substr) {
        return strs[0].slice(0, i);
      }
    }

    i += 1;
  }

  return strs[0].slice(0, i);
}
