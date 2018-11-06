import merge from './p0088';

test('merge sorted array', () => {
  const argLen = merge.length;
  const testArr = [
    {
      arg1: [1, 2, 3, 0, 0, 0],
      arg2: 3,
      arg3: [2, 5, 6],
      arg4: 3,
      target: [1, 2, 2, 3, 5, 6],
    },
    {
      arg1: [6, 7, 0, 0, 0],
      arg2: 2,
      arg3: [1, 5, 6],
      arg4: 3,
      target: [1, 5, 6, 6, 7],
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }
    merge.apply(this, args);
    expect(el.arg1).toEqual(el.target);
  });
});
