import React, { useState, useEffect } from 'react'
import './App.css'
import './styles/app.css'
import CurrencyRow from './components/CurrencyRow'

const API_URL = 'https://api.exchangeratesapi.io/latest'

const App = () => {

  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()

  useEffect(() => {
    fetch(API_URL)
      .then((response) =>{
        if(response.ok){
          return response
        } else {
          let errorMessage = `${response.status} ${response.statusText}`,
            error = new Error(errorMessage)
            throw (error)
        }
      })
      .then(response => response.json())
      .then((data) => {
        const usCurrency = Object.keys(data.rates)[26]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(usCurrency)
      })
  },[])

  return (
    <>  
      <div className='flex flex-col justify-center items-center text-center min-h-screen text-gray-900'>
        <div className='border border-red-500 p-20 bg-gray-100 rounded-lg'>
          <div  className='m-5 border border-purple-500'>
            <h1>Currency Conversion </h1>
          </div>
            <div className='flex flex-wrap flex-row m-2 border border-orange-500'>
              <CurrencyRow 
                currencyOptions={currencyOptions}
                selectedCurrency={fromCurrency}
                handleCurrencyChange={e => setFromCurrency(e.target.value)}
              />
              <div className='font-bold text-3xl'>=</div>
              <CurrencyRow 
                currencyOptions={currencyOptions}
                selectedCurrency={toCurrency}
                handleCurrencyChange={e => setToCurrency(e.target.value)}
              />
            </div>
            <h2 className='text-gray-900 text-left border border-blue-500'>Exchange Rate</h2>
        </div>
      </div>
    </>
  );
}

export default App;
