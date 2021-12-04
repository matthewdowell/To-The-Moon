import React from 'react';

const InvestmentList = ({ investments }) => {
  return (
    <div className='list'>
      <h2 className='subheader'>Top Investments</h2>
      {investments.map(
        (investment, index) => 
          <div
            className='investment'
            key={investment.id}
          >
            {`${index + 1}. ${investment.investment_str}`}
          </div>
      <div>

      </div>
      )}
    </div>
  )
}

export default InvestmentList;