import romanToInt from './p0013';

test('Determines whether a number is palindrome', () => {
  const argLen = romanToInt.length;
  const testArr = [
    {
      arg1: 'III',
      target: 3,
    },
    {
      arg1: 'IV',
      target: 4,
    },
    {
      arg1: 'IX',
      target: 9,
    },
    {
      arg1: 'LVIII',
      target: 58,
    },
    {
      arg1: 'MCMXCIV',
      target: 1994,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(romanToInt.apply(this, args)).toEqual(el.target);
  });
});
