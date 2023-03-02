import { useState } from 'react';
import axios from 'axios';
import './global.css';

// import components
import Main from './Main';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';

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
        <div className='bg-photo pt-12'>
            <div className="mx-auto w-[30rem] h-[45rem] backdrop-blur-sm bg-white/20 rounded-2xl">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <input
                        placeholder="Enter a city"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        required
                    />
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