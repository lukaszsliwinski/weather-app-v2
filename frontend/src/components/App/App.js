import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import react components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
import "../../sassStyles/classes.scss";
import "./app.scss";

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
        <div className="py-4 bg-img">
            <Container fluid="sm" className="shadow rounded mw-xr p-5 pt-2 bg-app main-color">
                {alert && <AlertModal setShow={setShow} show={show} query={query}/>}
                <SearchInput query={query} setQuery={setQuery} setData={setData} setShow={setShow}/>
                {!isEmpty(data) && <>
                    <Row>
                        <Col><Main data={data} /></Col>
                        <Col><DailyForecast forecast={data.forecast} forecastDetails={data.forecastDetails}/></Col>
                    </Row>
                    <Row>
                        <Col><WeatherConditions data={data}/></Col>
                        <Col><Next24HoursForecast forecast24={data.forecast24}/></Col>
                    </Row>
                </>}
            </Container>
        </div>

    );
};

export default App;