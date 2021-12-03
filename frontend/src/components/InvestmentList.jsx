import React from 'react';

const InvestmentList = ({ investments }) => {
  return (
    <div>
      <h1>Investment List</h1>
      {investments.map(investment => <div key={investment.id}>{investment.investment_str}</div>)}
    </div>
  )
}

export default InvestmentList;