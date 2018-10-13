// isValid brackets

export default function isValid(s) {
  const len = s.length;
  const leftBrackets = new Set(['(', '[', '{']);
  const theRightBrackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  let i = 0;
  const diffrentStr = [];
  while (i < len) {
    const currentChar = s.charAt(i);
    if (!leftBrackets.has(currentChar)) {
      const lastChar = diffrentStr.pop();
      if (theRightBrackets[lastChar] !== currentChar) {
        return false;
      }
    } else {
      diffrentStr.push(currentChar);
    }
    i += 1;
  }
  return diffrentStr.length === 0;
}
