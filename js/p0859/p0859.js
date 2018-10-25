// A exchange two char equal B
export default function buddyStrings(A, B) {
  const lenA = A.length;
  const lenB = B.length;
  if (lenA !== lenB) {
    return false;
  }

  const diffIndexes = [];
  for (let i = 0; i < lenA; i += 1) {
    if (A[i] !== B[i]) {
      if (diffIndexes.length > 2) {
        return false;
      }
      diffIndexes.push(i);
    }
  }
  if (diffIndexes.length === 0) {
    const m = new Map();
    for (let i = 0; i < lenA; i += 1) {
      m.set(A[i]);
    }
    return m.size !== lenA;
  } else if (diffIndexes.length === 2) {
    return A[diffIndexes[0]] === B[diffIndexes[1]] && A[diffIndexes[1]] === B[diffIndexes[0]];
  }
  return false;
}
