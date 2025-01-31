function profitMonitor(todayProfit, lastProfit) {
  let result = "";

  if (todayProfit > lastProfit) {
    result = `Profit naik sebanyak ${todayProfit - lastProfit} point`;
  } else if (lastProfit > todayProfit) {
    result = `Profit turun sebanyak ${lastProfit - todayProfit} point`;
  } else {
    result = `Profit stabil`;
  }

  return result;
}

console.log(profitMonitor(100, 50));
console.log(profitMonitor(50, 100));
console.log(profitMonitor(100, 100));

module.exports = profitMonitor;
