import { useState } from 'react';
import axios from 'axios';
import './global.css';

// import components
import Main from './Main';
import Next24HoursForecast from './Next24HoursForecast';
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
        <div className='bg-clear'>
            <div className="mx-auto w-[35rem] border">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <input
                        placeholder="Enter a city"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        required
                    />
                </form>
                {data &&
                    <div>
                        <Main data={data} />
                        <Next24HoursForecast forecast24={data.forecast24}/>
                        <DailyForecast forecast={data.forecast} />
                    </div>}
            </div>
        </div>

    );
};

export default App;