import { useState } from 'react';
import axios from 'axios';
import './assets/global.css';

// import components
import Main from './layouts/Weather';
import HourlyForecast from './layouts/HourlyForecast';
import DailyForecast from './layouts/DailyForecast';

import { IDataObject } from './types';

function App() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState<IDataObject>();

    // fetch weather data on form submit and handle error
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (typeof query !== 'string') {
            alert(`${query} not found!`)
        } else {
            const response = await axios.post('/api/weather', { city: query });
            if (response.data.msg === 'error') {
                alert(`${query} not found!`)
            } else {
                setData(response.data);
                setQuery('');
            };
        };
    };

    return (
        <div className='bg-photo py-8 font-medium text-sm text-gray-200'>
            <div className="mx-auto p-6 max-w-[30rem] backdrop-blur-md bg-gray-700/20 rounded-2xl">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            type="search"
                            id="default-search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter a city"
                            required
                        />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">search</button>
                    </div>
                </form>
                {data &&
                    <>
                        <Main data={data} />
                        <HourlyForecast hourlyForecast={data.hourlyForecast}/>
                        <DailyForecast dailyForecast={data.dailyForecast} />
                    </>}
            </div>
        </div>

    );
};

export default App;