// climbing-stairs
export default function climbStairs(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  }

  // 递归
  // return climbStairs(n - 1) + climbStairs(n - 2);

  let pPreNum = 1;
  let preNum = 2;
  let NumN = 0;
  for (let i = 3; i <= n; i += 1) {
    NumN = pPreNum + preNum;
    pPreNum = preNum;
    preNum = NumN;
  }
  return NumN;
}
