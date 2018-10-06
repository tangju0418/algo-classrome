/*
  * startIndex: The index of the first different char
  * i: Iterative pointer
*/
export default function lengthOfLongestSubstring(s) {
  const setArr = new Set();
  const len = s.length;
  let startIndex = 0;
  let maxSubstrLen = 0;
  let i = 0;
  while (i < len) {
    const str = s.charAt(i);
    if (setArr.has(str)) {
      const setLen = [...setArr].length;
      maxSubstrLen = Math.max(maxSubstrLen, setLen);
      setArr.clear();
      startIndex += 1;
      i = startIndex;
    } else {
      setArr.add(str);
      i += 1;
    }
  }
  const setLen = [...setArr].length;
  maxSubstrLen = Math.max(maxSubstrLen, setLen);
  return maxSubstrLen;
}
