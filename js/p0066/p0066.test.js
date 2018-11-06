import plusOne from './p0066';

test('plus-one', () => {
  const argLen = plusOne.length;
  const testArr = [
    {
      arg1: [1, 2, 3],
      target: [1, 2, 4],
    },
    {
      arg1: [4, 3, 2, 1],
      target: [4, 3, 2, 2],
    },
    {
      arg1: [1, 2, 9],
      target: [1, 3, 0],
    },
    {
      arg1: [9, 9, 9],
      target: [1, 0, 0, 0],
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(plusOne.apply(this, args)).toEqual(el.target);
  });
});
