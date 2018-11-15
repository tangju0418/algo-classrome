// /robot-return-to-origin
export default function judgeCircle(moves) {
  const len = moves.length;
  let lr = 0;
  let ud = 0;

  for (let i = 0; i < len; i += 1) {
    switch (moves[i]) {
      case 'L':
        lr -= 1;
        break;
      case 'R':
        lr += 1;
        break;
      case 'U':
        ud += 1;
        break;
      case 'D':
        ud -= 1;
        break;
      default:
        break;
    }
  }
  return lr === 0 && ud === 0;
}
