import climbStairs from './p0070';

test('climbing-stairs', () => {
  const argLen = climbStairs.length;
  const testArr = [
    {
      arg1: 2,
      target: 2,
    },
    {
      arg1: 3,
      target: 3,
    },
    {
      arg1: 5,
      target: 8,
    },
    {
      arg1: 100,
      target: 573147844013817200640,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(climbStairs.apply(this, args)).toEqual(el.target);
  });
});
