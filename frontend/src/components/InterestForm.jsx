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

  return (
    <div>
      <h1>Interest Form</h1>
      <div>
        <div><b>What would you like to name this investment?</b></div>
        <input
          value={name}
          onChange={(e) => { setName(e.target.value); }}
        />
      </div>
      <div>
        <div><b>What is your initial investment?</b></div>
        <input
          value={initialVal}
          onChange={(e) => { setInitialVal(Number(e.target.value)); }}
          type="number"
        />
      </div>
      <div>
        <div><b>What can you contribute monthly?</b></div>
        <input
          value={monthlyCont}
          onChange={(e) => { setMonthlyCont(Number(e.target.value)); }}
          type="number"
        />
      </div>
      <div>
        <div><b>How many years do you plan to save?</b></div>
        <input
          value={savingYears}
          onChange={(e) => { setSavingYears(Number(e.target.value)); }}
          type="number"
        />
      </div>
      <div>
        <div><b>What is your estimated annual interest rate?</b></div>
        <input
          value={interestRate}
          placeholder="Example: '10' for 10%"
          onChange={(e) => { setInterestRate(Number(e.target.value)); }}
          type="number"
        />
      </div>
      <button 
        onClick={() => { handleFormSubmit(); }}
      >
        See your potential gains!
      </button>
    </div>
  )
}

export default InterestForm;