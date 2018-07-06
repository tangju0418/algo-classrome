import sum from './p0001';

// const sum = require('./p0001.js');

test('test 1 plus 2 result', () => {
  console.log(sum);
  expect(sum(1, 2)).toBe(3);
});
