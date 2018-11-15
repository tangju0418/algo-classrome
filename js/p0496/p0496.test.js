import nextGreaterElement from './p0496';

test('next-greater-element-i', () => {
  const argLen = nextGreaterElement.length;
  const testArr = [
    {
      arg1: [4, 1, 2],
      arg2: [1, 3, 4, 2],
      target: [-1, 3, -1],
    },
    {
      arg1: [2, 4],
      arg2: [1, 2, 3, 4],
      target: [3, -1],
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(nextGreaterElement.apply(this, args)).toEqual(el.target);
  });
});
