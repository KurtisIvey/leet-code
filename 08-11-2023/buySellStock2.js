/*
p: prices that are an array of nums in non sorted order
r: return maximum profit as an integer
ep:
    keep track of profit gained via profit var
    use for loop starting at index 1
        if(prices[i] > i-1) profits += prices i - prices i-1

    return profit

    doing concurrent run through loop. Not optimizing for whole view. 
*/

var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};
