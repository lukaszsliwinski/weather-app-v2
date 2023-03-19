import { useState } from 'react';
import axios from 'axios';
import './assets/global.css';

import Alert from './components/Alert';
import About from './components/About';
import Weather from './layouts/Weather';
import HourlyForecast from './layouts/HourlyForecast';
import DailyForecast from './layouts/DailyForecast';

import { IDataObject } from './types';

function App() {
    // local state
    const [alertVisible, setAlertVisible] = useState(false);
    const [query, setQuery] = useState('');
    const [data, setData] = useState<IDataObject>();

    // show alert and hide after 4 seconds
    const showHideAlert = () => {
        setAlertVisible(true);
        const timer = setTimeout(() => {
            setAlertVisible(false);
        }, 4000);
        return () => clearTimeout(timer);
    };

    // fetch weather data on form submit and handle error
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (typeof query !== 'string') {
            showHideAlert();
        } else {
            const response = await axios.post('/api/weather', { city: query });
            if (response.data.msg === 'error') {
                showHideAlert();
            } else {
                setData(response.data);
                setQuery('');
            };
        };
    };

    return (
        <div className='bg-photo min-h-screen-mobile xs:py-8 sm:py-16 font-medium text-sm text-gray-200'>
            <Alert alertVisible={alertVisible} setAlertVisible={setAlertVisible} query={query} />
            <div className="xs:m-auto py-16 xs:py-6 px-3 xs:px-6 max-w-[30rem] h-fit backdrop-blur-md bg-gray-700/20 xs:rounded-2xl">
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
                            className="block w-full p-4 pl-10 pr-24 text-sm border border-gray-200/20 focus:border-gray-200 rounded-lg bg-transparent focus:outline-none focus:ring-0"
                            placeholder="Enter a city"
                            required
                        />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 shadow-md bg-gray-200/30 hover:bg-gray-200/20 font-medium rounded-lg text-sm px-4 py-2">search</button>
                    </div>
                </form>
                {data ?
                    <>
                        <Weather data={data} />
                        <HourlyForecast hourlyForecast={data.hourlyForecast}/>
                        <DailyForecast dailyForecast={data.dailyForecast} />
                    </> : <About />}
            </div>
        </div>

    );
};

export default App;