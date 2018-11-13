import jump from './p0045';

test('min jump step', () => {
  const argLen = jump.length;
  const testArr = [
    {
      arg1: [2, 3, 1, 1, 4],
      target: 2,
    },
    {
      arg1: [4],
      target: 0,
    },
    {
      arg1: [2, 1, 1, 1, 2],
      target: 3,
    },

  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(jump.apply(this, args)).toEqual(el.target);
  });
});
