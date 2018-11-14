// best-time-to-buy-and-sell-stock
export default function maxProfit(prices) {
  const len = prices.length;
  let minPrice = Number.POSITIVE_INFINITY;
  let profit = 0;
  for (let i = 0; i < len; i += 1) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > profit) {
      profit = prices[i] - minPrice;
    }
  }
  return profit;
}
