// distribute-candies
export default function distributeCandies(candies) {
  const len = candies.length;
  const s = new Set();
  for (let i = 0; i < len; i += 1) {
    s.add(candies[i]);
  }

  return Math.min(s.size, len / 2);
}
