import React from 'react'

const CurrencyRow = (props) => {

    const { currencyOptions, selectedCurrency, handleCurrencyChange } = props

    return (
        <>
        <div>
            <div className='flex flex-wrap m-2 rounded-md'>
                <input className='border-2 border-gray-800 rounded-md p-1 w-24' type='number' />
                <select className='border border-green-500 ml-2' value={selectedCurrency} onChange={handleCurrencyChange}>
                    {
                        currencyOptions.map((option) => (
                            <option key={option} value={option}> {option} </option>
                        ))
                    }
                </select>
            </div>
        </div>
        </>
    )
}

export default CurrencyRow
