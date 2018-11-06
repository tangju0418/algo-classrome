import canJump from './p0055';

test('can jump', () => {
  const argLen = canJump.length;
  const testArr = [
    {
      arg1: [2, 3, 1, 1, 4],
      target: true,
    },
    {
      arg1: [3, 2, 1, 0, 4],
      target: false,
    },
    {
      arg1: [0, 1, 1, 1],
      target: false,
    },
    {
      arg1: [1, 0, 0, 1],
      target: false,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(canJump.apply(this, args)).toEqual(el.target);
  });
});
