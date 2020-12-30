import axios from 'axios'
import localForage from 'localforage'
import { setupCache } from 'axios-cache-adapter'
import apikey from './config'

const cache = setupCache({
    maxAge: 60* 60 * 1000,
    store: localForage,
    exclude: {
        query: false
    }
})

const axiosInstance = axios.create({
    baseURL: 'https://www.alphavantage.co/query',
    adapter: cache.adapter
})

export const getRSIForSymbol = (symbol) => {
    return axiosInstance.get('', {
        params: {
            function : 'RSI',
            symbol, 
            interval : 'weekly',
            time_period : '60',
            series_type : 'open',
            apikey
            }
        }
    )
}

export default getRSIForSymbol;