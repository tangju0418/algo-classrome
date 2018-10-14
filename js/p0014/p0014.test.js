import longestCommonPrefix from './p0014';

test('longest Common Prefix', () => {
  const argLen = longestCommonPrefix.length;
  const testArr = [
    {
      arg1: ['flower', 'flow', 'flight'],
      target: 'fl',
    },
    {
      arg1: ['dog', 'racecar', 'car'],
      target: '',
    },
    {
      arg1: [''],
      target: '',
    },
    {
      arg1: ['', ''],
      target: '',
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(longestCommonPrefix.apply(this, args)).toEqual(el.target);
  });
});
