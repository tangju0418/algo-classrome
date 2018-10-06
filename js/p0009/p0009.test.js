import isPalindrome from './p0009';

test('Determines whether a number is palindrome', () => {
  const argLen = isPalindrome.length;
  const testArr = [
    {
      arg1: 0,
      target: true,
    },
    {
      arg1: 123,
      target: false,
    },
    {
      arg1: -33,
      target: false,
    },
    {
      arg1: 112211,
      target: true,
    },
    {
      arg1: 121,
      target: true,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(isPalindrome.apply(this, args)).toEqual(el.target);
  });
});
