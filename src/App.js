import React from 'react';
import Tickerlist from './components/Tickerslist'

const App = () => {
  

  return (
    <>
    <div>
      <div className="bg-white dark:bg-gray-800">
        <h2 className="text-gray-900 dark:text-white flex justify-end">Dark mode is here!</h2>
        <h1 className="text-indigo-900 flex flex-justify-center text-4xl">Stocks App </h1> 
      </div>
    </div>
    <div>
    <Tickerlist />
    </div>
   </>
  )
}

export default App;
