import { useState } from 'react';
import axios from 'axios';
import Weather from './components/Weather';

function App() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState({});

    // check if state obj is empty
    const isEmpty = (obj) => {
        if (obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype) {
            return true;
        } else {
            return false;
        }
    };

    // fetch weather data on form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (typeof query !== 'string') {
            alert(`${query} not found!`);
        } else {
            const response = await axios.post('/api/weather', { city: query });

            if (response.data.msg === 'error') {
                alert(`${query} not found!`);
            } else {
                setData(response.data);
            };
        };
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>

            {!isEmpty(data)  && <Weather data={data} />}
        </>
    );
};

export default App;