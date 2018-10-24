import distributeCandies from './p0575';

test('distribute-candies', () => {
  const argLen = distributeCandies.length;
  const testArr = [
    {
      arg1: [1, 1, 2, 2, 3, 3],
      target: 3,
    },
    {
      arg1: [1, 1, 2, 3],
      target: 2,
    },
    {
      arg1: [1, 1, 2, 3, 4, 1],
      target: 3,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(distributeCandies.apply(this, args)).toEqual(el.target);
  });
});
