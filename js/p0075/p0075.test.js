import sortColors from './p0075';

test("sort a arr with '0,1,2'", () => {
  const argLen = sortColors.length;
  const testArr = [
    {
      arg1: [0, 1, 2],
      target: [0, 1, 2],
    },
    {
      arg1: [0, 0, 2, 2, 1, 0, 2],
      target: [0, 0, 0, 1, 2, 2, 2],
    },
    {
      arg1: [1, 2, 1],
      target: [1, 1, 2],
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(sortColors.apply(this, args)).toEqual(el.target);
  });
});
