const createInvestment = (principal, rate, years, monthlyPayment, investmentName) => {
  var interestRate = rate / 100;
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  var pmt = 12 * monthlyPayment;
  var total1 = principal * ((1 + interestRate) ** years);
  var total2 = pmt * (((1 + interestRate) ** years) - 1) / interestRate;
  var accountValue = (total1 + total2);
  var totalContribution = (principal + (monthlyPayment * 12 * years));
  var gains = (accountValue - totalContribution);
  var investmentStr = `Your ${investmentName} investment will be worth ${formatter.format(accountValue)} ` +
    `in the year ${new Date().getFullYear() + years}. You will have contributed ${formatter.format(totalContribution)} ` +
    `and profited ${formatter.format(gains)}.`
  var investmentStr2 = `Invest ${formatter.format(principal)} upfront and ${formatter.format(monthlyPayment)} `
    + `monthly for ${years} years. With a ${rate}% annual interest rate, `
    + `you will profit ${formatter.format(gains)} on ${formatter.format(totalContribution)} in contributions `
    + `for an account total of ${formatter.format(accountValue)}.`
  return {investmentName, investmentStr, accountValue, totalContribution, gains, investmentStr2};
}

module.exports = {
  createInvestment
}