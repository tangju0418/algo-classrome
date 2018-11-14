// best-time-to-buy-and-sell-stock
export default function maxProfit(prices) {
  const len = prices.length;
  let minPrice = Number.POSITIVE_INFINITY;
  let maxPrice = -1;
  let profit = 0;
  for (let i = 0; i < len;) {
    while (i < len - 1 && prices[i] >= prices[i + 1]) {
      i += 1;
    }
    minPrice = prices[i];
    i += 1;
    while (i < len - 1 && prices[i] <= prices[i + 1]) {
      i += 1;
    }

    if (i < len) {
      maxPrice = prices[i];
      profit += (maxPrice - minPrice);
    }
  }
  return profit;
}
