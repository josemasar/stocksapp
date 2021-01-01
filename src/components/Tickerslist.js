import React, { useState } from 'react'
import Chart from './Chart'
import ChartRSI from './ChartRSI'

const Tickerlist = () => {


const [ticker, setTicker] = useState('MSFT');
console.log(ticker);

    return(
        <>
        <div className="bg-white dark:bg-gray-800 grid grid-cols-12 gap-4">
            <div className="col-span-3 prose grid grid-cols-1">
                <h3>Lista de stocks</h3>
                    <ul>
                        <button onClick={ () => setTicker('MSFT')}>MSFT</button>
                        <button onClick={ () => setTicker('NKE')}>NKE</button>
                        <button onClick={ () => setTicker('TSLA')}>TSLA</button>
                        <button onClick={ () => setTicker('SHOP')}>SHOP</button>
                    </ul>
            </div>
        </div>
        <div className="col-span-9">
            <Chart symbol={ticker} />
            <ChartRSI symbol={ticker}/>
        </div>
        </>
    )
}

export default Tickerlist;