import countAndSay from './p0038';

test('count and say', () => {
  const argLen = countAndSay.length;
  const testArr = [
    {
      arg1: 1,
      target: '1',
    },
    {
      arg1: 4,
      target: '1211',
    },
    {
      arg1: 5,
      target: '111221',
    },
    {
      arg1: 9,
      target: '31131211131221',
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(countAndSay.apply(this, args)).toEqual(el.target);
  });
});
