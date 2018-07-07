import findSum from './p0001';

// const sum = require('./pdemo.js');

test('test plus two number in array equals another number, return the indexes result', () => {
  console.log(findSum);
  expect(findSum([1, 2, 3, 4, 5], 8)).toEqual([2,4]);
});