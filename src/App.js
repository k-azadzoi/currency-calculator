import React from 'react'
import './App.css'
import './styles/app.css'
import CurrencyRow from './components/CurrencyRow'

const App = () => {
  return (
    <>  
      <div className='flex flex-col justify-center items-center text-center min-h-screen text-gray-900'>
        <div className='border border-red-500 p-20 bg-gray-100 rounded-lg'>
          <h1 className=''>Currency Conversion </h1>
            <div className='flex flex-wrap flex-row m-2 border border-orange-500'>
              <CurrencyRow />
              <div className='m-2 font-bold'>=</div>
              <CurrencyRow />
            </div>
            <h2 className='text-gray-900 text-left border border-blue-500'>Exchange Rate</h2>
        </div>
      </div>
    </>
  );
}

export default App;
