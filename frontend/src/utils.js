const createInvestment = (principal, rate, years, monthlyPayment, investmentName) => {
  rate = rate / 100;
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  var pmt = 12 * monthlyPayment;
  var total1 = principal * ((1 + rate) ** years);
  var total2 = pmt * (((1 + rate) ** years) - 1) / rate;
  var accountValue = (total1 + total2);
  var totalContribution = (principal + (monthlyPayment * 12 * years));
  var gains = (accountValue - totalContribution);
  var investmentStr = `Your ${investmentName} investment will be worth ${formatter.format(accountValue)} ` +
    `in the year ${new Date().getFullYear() + years}. You will have contributed ${formatter.format(totalContribution)} ` +
    `and profited ${formatter.format(gains)}.`
  return {investmentName, investmentStr, accountValue, totalContribution, gains};
}

module.exports = {
  createInvestment
}