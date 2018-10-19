import containsDuplicate from './p0217';

test('is contains duplicate', () => {
  const argLen = containsDuplicate.length;
  const testArr = [
    {
      arg1: [1, 2, 3, 1],
      target: true,
    },
    {
      arg1: [1, 2, 3, 4],
      target: false,
    },
    {
      arg1: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
      target: true,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(containsDuplicate.apply(this, args)).toEqual(el.target);
  });
});
