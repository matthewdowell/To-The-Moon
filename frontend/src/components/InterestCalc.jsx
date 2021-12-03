import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InterestForm from './InterestForm.jsx';
import InvestmentList from './InvestmentList.jsx';
import Header from './Header.jsx';


const InterestCalc = () => {
  const [investments, setInvestments] = useState([]);
  const [currentInvestment, setCurrentInvestment] = useState({});

  useEffect(() => {
    axios
      .get('/investments')
      .then(results => { 
        console.log(results.data.rows);
        setInvestments(results.data.rows);
      })
      .catch(err => console.log(err))
  }, [currentInvestment])

  return (
    <div>
      <Header />
      <div>
        <InterestForm setCurrentInvestment={setCurrentInvestment}/>
        <InvestmentList investments={investments}/>
      </div>
    </div>
  )
}

export default InterestCalc;