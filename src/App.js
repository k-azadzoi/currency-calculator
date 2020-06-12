import React from 'react'
import './App.css'
import './styles/app.css'
import CurrencyRow from './components/CurrencyRow'

const App = () => {
  return (
    <>
      
      <div className='flex flex-col justify-center items-center text-center min-h-screen text-blue-500'>
        <h1 className=''>Currency Conversion </h1>
        <CurrencyRow />
        <div>=</div>
        <CurrencyRow />
      </div>
    </>
  );
}

export default App;
