import containsNearbyDuplicate from './p0219';

test('contains-duplicate and abs index2 - index1 <= target', () => {
  const argLen = containsNearbyDuplicate.length;
  const testArr = [
    {
      arg1: [1, 2, 3, 1],
      arg2: 3,
      target: true,
    },
    {
      arg1: [1, 0, 1, 1],
      arg2: 1,
      target: true,
    },
    {
      arg1: [1, 2, 3, 1, 2, 3],
      arg2: 2,
      target: false,
    },
  ];
  testArr.forEach((el) => {
    const args = [];
    for (let i = 1; i <= argLen; i += 1) {
      const keyStr = `arg${i}`;
      args.push(el[keyStr]);
    }

    expect(containsNearbyDuplicate.apply(this, args)).toEqual(el.target);
  });
});
