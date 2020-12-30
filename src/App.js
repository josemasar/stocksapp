import React from 'react';
import Chart from './components/Chart'
import ChartRSI from './components/ChartRSI'

const App = () => {
  

  return (
    <div>
      <h1>Stocks App </h1> 
      <Chart symbol='TSLA' />
      <ChartRSI symbol='TSLA' />
      <Chart symbol='BIGC' />
      <ChartRSI symbol='BIGC' />
    </div>
   
  )
}

export default App;
