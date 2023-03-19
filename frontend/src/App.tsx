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
      }
    }
  };

  return (
    <div className="bg-photo min-h-screen-mobile xs:py-8 text-sm font-medium text-gray-200 sm:py-16">
      <Alert alertVisible={alertVisible} setAlertVisible={setAlertVisible} query={query} />
      <div className="xs:m-auto xs:py-6 xs:px-6 xs:rounded-2xl h-fit max-w-[30rem] bg-gray-700/20 py-16 px-3 backdrop-blur-md">
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              id="default-search"
              className="block w-full rounded-lg border border-gray-200/20 bg-transparent p-4 pl-10 pr-24 text-sm focus:border-gray-200 focus:outline-none focus:ring-0"
              placeholder="Enter a city"
              required
            />
            <button
              type="submit"
              className="absolute right-2.5 bottom-2.5 rounded-lg bg-gray-200/30 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-gray-200/20"
            >
              search
            </button>
          </div>
        </form>
        {data ? (
          <>
            <Weather data={data} />
            <HourlyForecast hourlyForecast={data.hourlyForecast} />
            <DailyForecast dailyForecast={data.dailyForecast} />
          </>
        ) : (
          <About />
        )}
      </div>
    </div>
  );
}

export default App;
