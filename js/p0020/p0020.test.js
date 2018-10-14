import isValid from './p0020';

test('isValid brackets', () => {
  const argLen = isValid.length;
  const testArr = [
    {
      arg1: '()',
      target: true,
    },
    {
      arg1: '()[]{}',
      target: true,
    },
    {
      arg1: '(]',
      target: false,
    },
    {
      arg1: '([)]',
      target: false,
    },
    {
      arg1: '{[]}',
      target: true,
    },
    {
      arg1: '{[]()}',
      target: true,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(isValid.apply(this, args)).toEqual(el.target);
  });
});
