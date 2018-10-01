import reverse from './p0007';

test('reverse a number', () => {
  const testArr = [
    {
      origin: 123,
      target: 321,
    },
    {
      origin: -123,
      target: -321,
    },
    {
      origin: 2147483647,
      target: 0,
    },
  ];

  testArr.forEach((el) => {
    expect(reverse(el.origin)).toEqual(el.target);
  });
});
