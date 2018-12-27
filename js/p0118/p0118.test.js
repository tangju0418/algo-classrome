import generate from './p0118';

test('pascals-triangle', () => {
  const argLen = generate.length;
  const testArr = [
    {
      arg1: 5,
      target: [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
      ],
    },
    {
      arg1: 1,
      target: [
        [1],
      ],
    },
    {
      arg1: 2,
      target: [
        [1],
        [1, 1],
      ],
    },
    {
      arg1: 0,
      target: [],
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(generate.apply(this, args)).toEqual(el.target);
  });
});
