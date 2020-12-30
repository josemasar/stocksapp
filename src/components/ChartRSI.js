import React, { useState, useEffect } from 'react';
import getRSIForSymbol from './ApiConnectorRSI';
import { CanvasJSChart } from 'canvasjs-react-charts';

const ChartRSI = (props) => {

    const[stockData, setStockData] = useState([]);
    
    useEffect( () => {
        const fetchStockData = async () => {
          const result = await getRSIForSymbol(props.symbol);
          
          setStockData(formatStockData(result.data['Technical Analysis: RSI']));
        };
        fetchStockData();
      }, [props.symbol]);

    console.log(stockData);
    
    return (
        <CanvasJSChart
        options={ {
            data: [
                {
                    type: 'line',
                    dataPoints: stockData.map(stockData => ({
                        x: new Date(stockData.date),
                        y: stockData.rsi,    
                    }))
                }
            ]
        }

        }
        />
    )

}

function formatStockData(stockData){
    return Object.entries(stockData).map(entries => {
        const [date, priceData] = entries;
        return{
            date,
            rsi: Number(priceData['RSI']),
        }
    })

}

export default ChartRSI;