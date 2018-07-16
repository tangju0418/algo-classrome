import sum from './pdemo';

// const sum = require('./pdemo.js');

test('test 1 plus 2 result', () => {
  console.log(sum);
  expect(sum(1, 2)).toBe(3);
});
