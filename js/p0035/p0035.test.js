import searchInsert from './p0035';

test('search insert', () => {
  const argLen = searchInsert.length;
  const testArr = [
    {
      arg1: [1, 3, 5, 6],
      arg2: 5,
      target: 2,
    },
    {
      arg1: [1, 3, 5, 6],
      arg2: 2,
      target: 1,
    },
    {
      arg1: [1, 3, 5, 6],
      arg2: 7,
      target: 4,
    },
    {
      arg1: [1, 3, 5, 6],
      arg2: 0,
      target: 0,
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
