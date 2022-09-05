import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import react components
import Container from 'react-bootstrap/Container';

// import font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// import components
import SearchInput from '../SearchInput/SearchInput';
import AlertModal from '../AlertModal/AlertModal';
import Main from '../CurrentWeather/Main/Main';
import WeatherConditions from '../CurrentWeather/WeatherConditions/WeatherConditions';
import Next24HoursForecast from '../HourlyForecast/Next24HoursForecast/Next24HoursForecast';
import DailyForecast from '../DailyForecast/DailyForecast';

// import scss
import "./App.scss"; 

// add font awesome icons to library
library.add(fas, far);


function App() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState({});
    const [show, setShow] = useState(false);

    // check if state obj is empty
    const isEmpty = (obj) => {
        if (obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype) {
            return true;
        } else {
            return false;
        }
    };


    return (
        <Container fluid="sm" className="my-4 border rounded mw-800p pt-3 px-5">
            <SearchInput query={query} setQuery={setQuery} setData={setData} setShow={setShow}/>
            {alert && <AlertModal setShow={setShow} show={show} query={query}/>}
            {!isEmpty(data) && <Main data={data} />}
            {!isEmpty(data) && <WeatherConditions data={data}/>}
            {!isEmpty(data) && <Next24HoursForecast forecast24={data.forecast24}/>}
            {!isEmpty(data) && <DailyForecast forecast={data.forecast} forecastDetails={data.forecastDetails}/>}
        </Container>
    );
};

export default App;