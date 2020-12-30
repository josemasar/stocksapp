import React from 'react';
import Chart from './components/Chart'
import ChartRSI from './components/ChartRSI'

const App = () => {
  

  return (
    <>
    <div>
      <div className="bg-white dark:bg-gray-800">
        <h2 className="text-gray-900 dark:text-white flex justify-end">Dark mode is here!</h2>
        <h1 className="text-indigo-900 flex flex-justify-center text-4xl">Stocks App </h1> 
      </div>
    </div>
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">Lista de stocks</div>
      <div className="col-span-9">
        <Chart symbol='MSFT' />
        <ChartRSI symbol='MSFT' />
      </div>
    </div>
   </>
  )
}

export default App;
