// roman to int
export default function romanToInt(s) {
  const len = s.length;
  let resNum = 0;
  let i = 0;
  const romanToNumSingle = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const romanToNumDouble = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  while (i < len) {
    const str = s.charAt(i);
    const nextStr = s.charAt(i + 1);
    const doubleNum = romanToNumDouble[str + nextStr];
    if (doubleNum) {
      resNum += doubleNum;
      i += 2;
    } else {
      const singleNum = romanToNumSingle[str];
      resNum += singleNum;
      i += 1;
    }
  }
  return resNum;
}
