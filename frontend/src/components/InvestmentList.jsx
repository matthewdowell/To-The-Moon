import React from 'react';
import axios from 'axios';

const InvestmentList = ({ investments, currentInvestment, setList, list }) => {
  const mountedStyle = { animation: "inAnimation 1000ms ease-in" };

  const deleteInvestment = (e) => {
    axios
      .delete(`/investments/${event.target.id}`)
      .then(() => {
        setList(!list);
      })
  }

  return (
    <div className='list'>
      {currentInvestment.investmentStr && 
        <div 
          className='currentInvestment'
          style={mountedStyle}
        >
          {currentInvestment.investmentStr}
        </div>
      }
      <h2 className='subheader'>Top Investment Strategies</h2>
      {investments.map(
        (investment, index) => 
          <div key={investment.id} className='investmentContainer'>
            <div
              className='investment'
            >
              {`${index + 1}. ${investment.name.toUpperCase()}: ${investment.investment_str2}`}
            </div>
            <button
              id={investment.id}
              onClick={(event) => { deleteInvestment(event); }}
              className='deleteButton'
            >
              X
            </button>  
          </div>
      ).slice(0, 5)}
    </div>
  )
}

export default InvestmentList;