import convetwoSum from './p0167';

test('sum of two element in source eqqual target,return the index', () => {
  const argLen = convetwoSum.length;
  const testArr = [
    {
      arg1: [2, 7, 11, 15],
      arg2: 9,
      target: [1, 2],
    },
    {
      arg1: [1, 2, 5, 8],
      arg2: 7,
      target: [2, 3],
    },
    {
      arg1: [3, 6],
      arg2: 9,
      target: [1, 2],
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(convetwoSum.apply(this, args)).toEqual(el.target);
  });
});
