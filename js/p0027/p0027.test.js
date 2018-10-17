import removeElement from './p0027';

test('delete repeat number in a sorted array', () => {
  const argLen = removeElement.length;
  const testArr = [
    {
      arg1: [3, 2, 2, 3],
      arg2: 3,
      target: [2, 2],
    },
    {
      arg1: [0, 1, 2, 2, 3, 0, 4, 2],
      arg2: 2,
      target: [0, 1, 3, 0, 4],
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }
    const len = removeElement.apply(this, args);
    // eslint-disable-next-line
    el.arg1.length = len;
    expect(el.arg1).toEqual(el.target);
  });
});
