import React from 'react'

export default function CurrencyRow() {
    return (
        <>
        <div>
            <div className='flex flex-wrap m-2 rounded-md'>
                <input className='border-2 border-gray-800 rounded-md p-1 w-24' type='number' />
                <select className='border border-green-500 ml-2'>
                    <option value='Hi'> Hi </option>
                </select>
            </div>
        </div>
        </>
    )
}
