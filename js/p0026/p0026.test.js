import removeDuplicates from './p0026';

test('delete repeat number in a sorted array', () => {
  const argLen = removeDuplicates.length;
  const testArr = [
    {
      arg1: [0, 0, 0],
      target: [0],
    },
    {
      arg1: [0, 1, 1, 2, 2],
      target: [0, 1, 2],
    },
    {
      arg1: [1, 2, 3],
      target: [1, 2, 3],
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }
    const len = removeDuplicates.apply(this, args);
    // eslint-disable-next-line
    el.arg1.length = len;
    expect(el.arg1).toEqual(el.target);
  });
});
