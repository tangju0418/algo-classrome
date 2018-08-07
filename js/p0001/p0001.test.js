import findSum from './p0001';


test('test plus two number in array equals another number, return the indexes result', () => {
  expect(findSum([1, 2, 3, 4, 5], 8)).toEqual([2, 4]);
});
