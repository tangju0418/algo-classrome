import majorityElement from './p0169';

test('majority-element', () => {
  const argLen = majorityElement.length;
  const testArr = [
    {
      arg1: [3, 2, 3],
      target: 3,
    },
    {
      arg1: [2, 2, 1, 1, 1, 2, 2],
      target: 2,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(majorityElement.apply(this, args)).toEqual(el.target);
  });
});
