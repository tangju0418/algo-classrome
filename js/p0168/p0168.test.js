import convertToTitle from './p0168';

test('convert int to letter', () => {
  const argLen = convertToTitle.length;
  const testArr = [
    {
      arg1: 1,
      target: 'A',
    },
    {
      arg1: 28,
      target: 'AB',
    },
    {
      arg1: 701,
      target: 'ZY',
    },
    {
      arg1: 26,
      target: 'Z',
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(convertToTitle.apply(this, args)).toEqual(el.target);
  });
});
