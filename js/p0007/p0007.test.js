import reverse from './p0007';

test('reverse a number', () => {
  expect(reverse(123)).toEqual(321);
  expect(reverse(-123)).toEqual(-321);
  expect(reverse(2147483647)).toEqual(0);
});
