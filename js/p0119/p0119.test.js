import getRow from './p0119';

test('pascals-triangle-ii', () => {
  const argLen = getRow.length;
  const testArr = [
    {
      arg1: 4,
      target: [1, 4, 6, 4, 1],
    },
    {
      arg1: 0,
      target: [1],
    },
    {
      arg1: 3,
      target: [1, 3, 3, 1],
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(getRow.apply(this, args)).toEqual(el.target);
  });
});
