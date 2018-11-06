import lengthOfLastWord from './p0058';

test('length-of-last-word', () => {
  const argLen = lengthOfLastWord.length;
  const testArr = [
    {
      arg1: 'Hello World',
      target: 5,
    },
    {
      arg1: '',
      target: 0,
    },
    {
      arg1: 'hello',
      target: 5,
    },
    {
      arg1: 'a ',
      target: 1,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(lengthOfLastWord.apply(this, args)).toEqual(el.target);
  });
});
