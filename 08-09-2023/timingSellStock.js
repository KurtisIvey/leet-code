/*
p: array of integers that reflect the price
r:return maximum profit as integer
ep:
    create two variables - min price set at infinity, max profit set at 0
    use for loop to iterate over
    check for min price and set i as min price if less than. auto sets first index as min price
    else if i - min price greater than max profit, set new max profit

    return max profit

*/

var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};
