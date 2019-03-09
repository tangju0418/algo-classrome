import generateMatrix from './p0059';

test('spiral-matrix-ii', () => {
  const argLen = generateMatrix.length;
  const testArr = [
    {
      arg1: 1,
      target: [
        [1],
      ],
    },
    {
      arg1: 2,
      target: [
        [1, 2],
        [4, 3],
      ],
    },
    {
      arg1: 3,
      target: [
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5],
      ],
    },
    {
      arg1: 4,
      target: [
        [1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7],
      ],
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(generateMatrix.apply(this, args)).toEqual(el.target);
  });
});
