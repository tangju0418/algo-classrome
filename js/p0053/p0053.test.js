import maxSubArray from './p0053';

test('maximum-subarray', () => {
  const argLen = maxSubArray.length;
  const testArr = [
    {
      arg1: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
      target: 6,
    },
    {
      arg1: [-2, -3, -1, -4],
      target: -1,
    },
    {
      arg1: [1],
      target: 1,
    },
    {
      arg1: [5, -2, 1, -1, 4],
      target: 7,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(maxSubArray.apply(this, args)).toEqual(el.target);
  });
});
