import lengthOfLongestSubstring from './p0003';

test('return the length of the longest substring that has no repeat word', () => {
  const argLen = lengthOfLongestSubstring.length;
  const testArr = [
    {
      arg1: 'abcabcbb',
      target: 3,
    },
    {
      arg1: 'bbbbb',
      target: 1,
    },
    {
      arg1: 'pwwkew',
      target: 3,
    },
    {
      arg1: '',
      target: 0,
    },
    {
      arg1: ' ',
      target: 1,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(lengthOfLongestSubstring.apply(this, args)).toEqual(el.target);
  });
});
