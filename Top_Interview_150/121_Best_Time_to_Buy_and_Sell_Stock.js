/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity; // To store the minimum price encountered
  let maxProfit = 0; // To store the maximum profit

  for (let i = 0; i < prices.length; i++) {
    // If we find a new minimum price, update it
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    // Calculate profit if sold at the current price
    const profit = prices[i] - minPrice;
    // Update the max profit if we find a higher profit
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
};

// [7,6,1,5]
