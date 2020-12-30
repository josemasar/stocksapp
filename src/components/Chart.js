import React, { useState, useEffect } from 'react';
import getDailyChartForSymbol from './ApiConnector';
import { CanvasJSChart } from 'canvasjs-react-charts';

const Chart = (props) => {

    const[stockData, setStockData] = useState([]);
    
    useEffect( () => {
        const fetchStockData = async () => {
          const result = await getDailyChartForSymbol(props.symbol);
          
          setStockData(formatStockData(result.data['Time Series (Daily)']));
        };
        fetchStockData();
      }, [props.symbol]);

    console.log(stockData);
    
    return (
        <CanvasJSChart
        options={ {
            axisY: {
                // Minimum value is 10% less than the lowest price in the dataset
                minimum: Math.min(...stockData.map(data => data.low)) / 1.1,
                // Minimum value is 10% more than the highest price in the dataset
                maximum: Math.max(...stockData.map(data => data.high)) * 1.1,
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            axisX: {
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            data: [
                {
                    type: 'candlestick',
                    dataPoints: stockData.map(stockData => ({
                        x: new Date(stockData.date),
                        y: [
                            stockData.open,
                            stockData.high,
                            stockData.low,
                            stockData.close
                        ]
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
            open: Number(priceData['1. open']),
            high: Number(priceData['2. high']),
            low: Number(priceData['3. low']),
            close: Number(priceData['4. close'])

        }
    })

}

export default Chart;