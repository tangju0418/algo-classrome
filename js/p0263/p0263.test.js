import isUgly from './p0263';

test('only have factors 2,3,5', () => {
  const argLen = isUgly.length;
  const testArr = [
    {
      arg1: 6,
      target: true,
    },
    {
      arg1: 8,
      target: true,
    },
    {
      arg1: 14,
      target: false,
    },

  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(isUgly.apply(this, args)).toEqual(el.target);
  });
});
