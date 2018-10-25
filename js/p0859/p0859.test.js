import buddyStrings from './p0859';

test('A exchange two char equal B', () => {
  const argLen = buddyStrings.length;
  const testArr = [
    {
      arg1: 'ab',
      arg2: 'ba',
      target: true,
    },
    {
      arg1: 'a',
      arg2: 'ab',
      target: false,
    },
    {
      arg1: 'aab',
      arg2: 'aab',
      target: true,
    },
    {
      arg1: 'abc',
      arg2: 'abc',
      target: false,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(buddyStrings.apply(this, args)).toEqual(el.target);
  });
});
