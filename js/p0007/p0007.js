export default function reverse(x) {
  let r = _reverse(Math.abs(x));
  if (x < 0) {
    r = -r;
  }
  if (r >= (-2) ** 31 && r <= (2 ** 31) - 1) {
    return r;
  }
  return 0;
}

function _reverse(num) {
  let x = num;
  let r = 0;
  while (x > 0) {
    r = (r * 10) + (x % 10);
    x = Math.floor(x / 10);
  }
  return r;
}
