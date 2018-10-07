/*
  * startIndex: The index of the first different char
  * i: Iterative pointer
*/
export default function lengthOfLongestSubstring(s) {
  const mapArr = new Map();
  const len = s.length;
  let maxSubstrLen = 0;
  let repeatChar = 0;
  let i = 0;
  while (i < len) {
    const str = s.charAt(i);
    if (mapArr.has(str)) {
      const repeatCharIndex = mapArr.get(str) + 1;
      repeatChar = repeatCharIndex > repeatChar ? repeatCharIndex : repeatChar;
    }
    maxSubstrLen = Math.max(maxSubstrLen, (i + 1) - repeatChar);
    mapArr.set(str, i);
    i += 1;
  }

  return maxSubstrLen;
}
