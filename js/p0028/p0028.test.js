import strStr from './p0028';

test('implement indexOf', () => {
  const argLen = strStr.length;
  const testArr = [
    {
      arg1: 'hello',
      arg2: 'll',
      target: 2,
    },
    {
      arg1: 'hello',
      arg2: 'le',
      target: -1,
    },
    {
      arg1: 'hello',
      arg2: '',
      target: 0,
    },
    {
      arg1: 'msiimsiie',
      arg2: 'msiie',
      target: 4,
    },
    {
      arg1: 'abcab',
      arg2: 'ab',
      target: 0,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(strStr.apply(this, args)).toEqual(el.target);
  });
});
