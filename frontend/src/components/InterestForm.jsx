import axios from 'axios';
import React, { useState } from 'react';
import { createInvestment } from '../utils.js';

const InterestForm = ({ setCurrentInvestment }) => {
  const [name, setName] = useState('');
  const [initialVal, setInitialVal] = useState('');
  const [monthlyCont, setMonthlyCont] = useState('');
  const [savingYears, setSavingYears] = useState('');
  const [interestRate, setInterestRate] = useState('');

  const handleFormSubmit = () => {
    var investment = createInvestment(initialVal, interestRate, savingYears, monthlyCont, name);
    axios
      .post('/investments', investment)
      .then(setCurrentInvestment(investment))
      .catch(err => { console.error(err); })
  }

  const clearForm = () => {
    setName('');
    setInitialVal('');
    setMonthlyCont('');
    setSavingYears('');
    setInterestRate('');
  }

  return (
    <div className='form'>
      <h2 className='subheader'>Compound Interest Calculator</h2>
      <div className='qContainer'>
        <div className='question'>What would you like to name this investment?</div>
        <input
          placeholder="ex: retirement"
          className='input'
          value={name}
          onChange={(e) => { setName(e.target.value); }}
        />
      </div>
      <div className='qContainer'>
        <div className='question'>What is your initial investment?</div>
        <input
          placeholder="$"
          className='input'
          value={initialVal}
          onChange={(e) => { setInitialVal(Number(e.target.value)); }}
          type="number"
        />
      </div>
      <div className='qContainer'>
        <div className='question'>What can you contribute monthly?</div>
        <input
          placeholder="$"
          className='input'
          value={monthlyCont}
          onChange={(e) => { setMonthlyCont(Number(e.target.value)); }}
          type="number"
        />
      </div>
      <div className='qContainer'>
        <div className='question'>How many years do you plan to save?</div>
        <input
          placeholder="years"
          className='input'
          value={savingYears}
          onChange={(e) => { setSavingYears(Number(e.target.value)); }}
          type="number"
        />
      </div>
      <div className='qContainer'>
        <div className='question'>What is your estimated annual interest rate?</div>
        <input
          className='input'
          value={interestRate}
          placeholder="'10' for 10%"
          onChange={(e) => { setInterestRate(Number(e.target.value)); }}
          type="number"
        />
      </div>
      <button
        className='button' 
        onClick={() => { handleFormSubmit(); }}
      >
        See your potential gains!
      </button>
      <button
        className='clearButton'
        onClick={() => { clearForm(); }}
      >
        Clear Form
      </button>
    </div>
  )
}

export default InterestForm;