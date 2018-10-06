// Determines whether a number is palindrome
export default function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  let reverseNum = 0;
  let subNum = x;
  while (subNum > 0) {
    reverseNum = (reverseNum * 10) + (subNum % 10);
    subNum = Math.floor(subNum / 10);
  }
  return x === reverseNum;
}
