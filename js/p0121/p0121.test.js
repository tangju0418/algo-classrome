import maxProfit from './p0121';

test('best-time-to-buy-and-sell-stock', () => {
  const argLen = maxProfit.length;
  const testArr = [
    {
      arg1: [7, 1, 5, 3, 6, 4],
      target: 5,
    },
    {
      arg1: [7, 6, 4, 3, 1],
      target: 0,
    },
    {
      arg1: [7, 3, 6, 2, 4, 3],
      target: 3,
    },

  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(maxProfit.apply(this, args)).toEqual(el.target);
  });
});
