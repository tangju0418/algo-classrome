import reverse from './p0007';

test('reverse a number', () => {
  const argLen = reverse.length;
  const testArr = [
    {
      arg1: 123,
      target: 321,
    },
    {
      arg1: -123,
      target: -321,
    },
    {
      arg1: 2147483647,
      target: 0,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(reverse.apply(this, args)).toEqual(el.target);
  });
});
