import searchInsert from './p0400';

test('nth-digit', () => {
  const argLen = searchInsert.length;
  const testArr = [
    {
      arg1: 1000,
      target: 3,
    },
    {
      arg1: 3,
      target: 3,
    },
    {
      arg1: 11,
      target: 0,
    },
    {
      arg1: 2147483647,
      target: 2,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(searchInsert.apply(this, args)).toEqual(el.target);
  });
});
