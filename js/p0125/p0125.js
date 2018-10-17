// isValid brackets

export default function isPalindrome(s) {
  const len = s.length;
  const lowerStr = s.toLowerCase();
  let i = 0;
  let j = len - 1;
  while (i < j) {
    for (; i < j && !isValid(lowerStr.charAt(i));) {
      i += 1;
    }

    if (i >= j) {
      return true;
    }

    for (; j >= i && !isValid(lowerStr.charAt(j));) {
      j -= 1;
    }

    if (lowerStr.charAt(i) !== lowerStr.charAt(j)) {
      return false;
    }
    i += 1;
    j -= 1;
  }

  function isValid(x) {
    return (x >= 'a' && x <= 'z') || (x >= '0' && x <= '9');
  }

  return true;
}
