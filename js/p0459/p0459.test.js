import repeatedSubstringPattern from './p0459';

test('repeated-substring-pattern', () => {
  const argLen = repeatedSubstringPattern.length;
  const testArr = [
    {
      arg1: 'abab',
      target: true,
    },
    {
      arg1: 'aba',
      target: false,
    },
    {
      arg1: 'abcabcabcabc',
      target: true,
    },
    {
      arg1: 'ababcababc',
      target: true,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(repeatedSubstringPattern.apply(this, args)).toEqual(el.target);
  });
});
