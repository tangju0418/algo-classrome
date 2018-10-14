import isPalindrome from './p0125';

test('Determines whether a string is palindrome', () => {
  const argLen = isPalindrome.length;
  const testArr = [
    {
      arg1: 'A man, a plan, a canal: Panama',
      target: true,
    },
    {
      arg1: 'race a car',
      target: false,
    },
    {
      arg1: ',.',
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
