import findMaxConsecutiveOnes from './p0485';

test('find max consecutive ones', () => {
  const argLen = findMaxConsecutiveOnes.length;
  const testArr = [
    {
      arg1: [1, 0, 1, 1, 0, 1],
      target: 2,
    },
    {
      arg1: [1, 1, 0, 1, 1, 1],
      target: 3,
    },
    {
      arg1: [1, 1, 0, 0, 0, 0, 1, 1, 1],
      target: 3,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(findMaxConsecutiveOnes.apply(this, args)).toEqual(el.target);
  });
});
