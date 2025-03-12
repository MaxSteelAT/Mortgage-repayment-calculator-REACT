import image from "../src/images/illustration-empty.svg";
import calculator from "../src/images/icon-calculator.svg";
import { useState, useEffect } from 'react'
import React, { useRef } from "react";

const App = () => {
  const [inputAmount, setInputAmount] = useState(0)
  const [inputTerm, setInputTerm] = useState(25)
  const [inputRate, setInputRate] = useState(5.25)
  const [monthlyRepayment, setMonthlyRepayment] = useState(0)
  const [totalTerm, setTotalTerm] = useState(0)
  const [selectRadio, setSelectRadio] = useState('option1');
  const [interest, setInterest] = useState(0)
  const [interestTotal, setInterestTotal] = useState(0)

  const [showResult, setShowResult] = useState(true)

  const [amountError, setAmountError] = useState(false)
  const [termError, setTermError] = useState(false)
  const [rateError, setRatetError] = useState(false)

  const calculate = (event) => {
    event.preventDefault()

    const months = calculateMonths(inputTerm)
    const rate = monthlyRate(inputRate)
    let hasError = false

    if (inputAmount <= 0 || inputAmount == '' || isNaN(inputAmount)) {
      setAmountError(true)
      hasError = true
    } else {
      setAmountError(false)
    }

    if (inputTerm <= 0 || inputTerm == '' || isNaN(inputTerm)) {
      setTermError(true)
      hasError = true
    } else {
      setTermError(false)
    }

    if (inputRate <= 0 || inputRate == '' || isNaN(inputRate)) {
      setRatetError(true)
      hasError = true
    } else {
      setRatetError(false)
    }

    if (hasError == true) {
      return;
    }

    if (selectRadio == 'option1') {
      const monthlyPayment = inputAmount * (rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
      setMonthlyRepayment(Number(monthlyPayment).toFixed(2))

      const refund = monthlyPayment * months
      setTotalTerm(Number(refund).toFixed(2))
    }

    if (selectRadio == 'option2') {
      const monthlyPayment = inputAmount * rate;

      const total = monthlyPayment * 12;
      setInterest(Number(total).toFixed(2))

      const totalPaid = monthlyPayment * 12 * inputTerm;
      setInterestTotal(Number(totalPaid).toFixed(2))
    }

    setShowResult(false)
  }

  const calculateMonths = (years) => {
    const months = years * 12
    return months;
  }

  const monthlyRate = (rate) => {
    const monthly = (rate / 100) / 12;
    return monthly;
  }

  const changeAmount = (event) => {
    const value = parseInt(event.target.value)
    setInputAmount(value)
  }

  const changeTerm = (event) => {
    const value = parseInt(event.target.value)
    setInputTerm(value)
  }

  const changeRate = (event) => {
    const value = parseFloat(event.target.value)
    setInputRate(value)
  }

  const handleChange = (event) => {
    setSelectRadio(event.target.value);
  };

  return (
    <div className="App">
      <div className="form-container">
        <div className="header">
          <h2 className="title">Mortgage Calculator</h2>
          <a className="clear">Clear All</a>
        </div>
        <form>
          <label>Mortgage Amount</label>
          <div className="input-group input-group-border">
            <span className="input-group-text" id="basic-addon1">£</span>
            <input onChange={changeAmount} value={inputAmount} type="number" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          {amountError && (
            <h3 className="input-error">
              This field is required
            </h3>)}
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <label>Mortgage Term</label>
              <div className="input-group input-group-border">
                <input onChange={changeTerm} value={inputTerm} type="number" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                <span className="input-group-text">years</span>
              </div>
              {termError && (
                <h3 className="input-error">
                  This field is required
                </h3>)}
            </div>
            <div className="col-sm-12 col-md-6">
              <label>Interest Rate</label>
              <div className="input-group input-group-border">
                <input onChange={changeRate} value={inputRate} type="number" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                <span className="input-group-text">%</span>
              </div>
              {rateError && (
                <h3 className="input-error">
                  This field is required
                </h3>)}
            </div>
          </div>
          <label>Mortgage Type</label>
          <div className="form-check">
            <input value="option1" checked={selectRadio === "option1"} onChange={handleChange} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label" for="flexRadioDefault1">
              Repayment
            </label>
          </div>
          <div className="form-check">
            <input value="option2" checked={selectRadio === "option2"} onChange={handleChange} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" for="flexRadioDefault2">
              Interest Only
            </label>
          </div>
          <button onClick={calculate} type="submit" className="btn btn-primary">
            <img src={calculator}></img>
            Calculate Repayments
          </button>
        </form>
      </div>
      {showResult ? (
        <div className="results-shows">
          <img src={image} />
          <h4 className="result-text">Result show here</h4>
          <p className="paragraph">Complet the form and click "calculate repayments" to see what your monthly repayments would be.</p>
        </div>
      ) : (
        <div className="your-result">
          <div>
            <h2 className="results">Your result</h2>
            <p className="text">Your result are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
          </div>
          {selectRadio == 'option1' && (
            <div className="result-information">
              <div className="ticket monthly">
                <h4 className="text">Your monthly repaymants</h4>
                <span className="sterling repayments">£{monthlyRepayment}</span>
              </div>
              <div className="ticket">
                <h4 className="text">Total you'll over term</h4>
                <span className="sterling">£{totalTerm}</span>
              </div>
            </div>
          )}
          {selectRadio == 'option2' && (
            <div className="result-information">
              <div className="ticket monthly">
                <h4 className="text">Your monthly interest</h4>
                <span className="sterling repayments">£{interest}</span>
              </div>
              <div className="ticket">
                <h4 className="text">Total you'll over term</h4>
                <span className="sterling">£{interestTotal}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
