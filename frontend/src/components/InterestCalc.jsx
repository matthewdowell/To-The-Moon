import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InterestForm from './InterestForm.jsx';
import InvestmentList from './InvestmentList.jsx';
import Header from './Header.jsx';


const InterestCalc = () => {
  const [investments, setInvestments] = useState([]);
  const [currentInvestment, setCurrentInvestment] = useState({});
  const [list, setList] = useState(false);

  useEffect(() => {
    axios
      .get('/investments')
      .then(results => { 
        setInvestments(results.data.rows);
      })
      .catch(err => { console.error(err); })
  }, [currentInvestment, list])

  return (
    <div>
      <Header />
      <div className='mainContainer'>
        <InterestForm setCurrentInvestment={setCurrentInvestment}/>
        <InvestmentList 
          investments={investments} 
          currentInvestment={currentInvestment}
          list={list}
          setList={setList}
        />
      </div>
    </div>
  )
}

export default InterestCalc;