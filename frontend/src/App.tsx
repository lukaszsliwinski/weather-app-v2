import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import Main from './Main';
import Next24HoursForecast from './Next24HoursForecast';
import DailyForecast from './DailyForecast';

import './app.scss';

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
        <div className='pt-xl-4 bg-clear'>
            <div className="shadow-xl border rounded-xl mw-xr p-md-5 pt-md-2 pb-2 bg-app main-color" style={{ width: "35rem" }}>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <input
                        placeholder="Enter a city"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        required
                        className="mb-3 fs-5"
                    />
                </form>
                {data && <>
                    <div>
                        <Main data={data} />
                        <Next24HoursForecast forecast24={data.forecast24}/>
                        <DailyForecast forecast={data.forecast} />
                    </div>
                </>}
            </div>
        </div>

    );
};

export default App;