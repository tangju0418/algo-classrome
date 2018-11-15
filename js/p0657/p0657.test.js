import judgeCircle from './p0657';

test('robot-return-to-origin', () => {
  const argLen = judgeCircle.length;
  const testArr = [
    {
      arg1: 'UD',
      target: true,
    },
    {
      arg1: 'LL',
      target: false,
    },
    {
      arg1: 'UDLLRR',
      target: true,
    },
    {
      arg1: 'ULR',
      target: false,
    },

  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(judgeCircle.apply(this, args)).toEqual(el.target);
  });
});
