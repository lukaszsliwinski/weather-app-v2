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
import '../../sassStyles/_global.scss';
import '../../sassStyles/_utilities.scss';
import './app.scss';

// add font awesome icons to library
library.add(fas, far);


function App() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState({});
    const [show, setShow] = useState(false);
    const [background, setBackground] = useState('bg-clear');

    // check if state obj is empty
    const isEmpty = (obj) => {
        if (obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype) {
            return true;
        } else {
            return false;
        }
    };


    return (
        <div className={`pt-xl-4 ${background}`}>
            <Container fluid="xl" className="shadow-xl rounded-xl mw-xr p-md-5 pt-md-2 pb-2 bg-app main-color">
                {alert && <AlertModal setShow={setShow} show={show} query={query}/>}
                <SearchInput query={query} setQuery={setQuery} setData={setData} setShow={setShow} setBackground={setBackground}/>
                {!isEmpty(data) && <>
                    <Row>
                        <Col sm={12} xl={6}><Main data={data} /></Col>
                        <Col sm={12} xl={6}><DailyForecast forecast={data.forecast} forecastDetails={data.forecastDetails}/></Col>
                    </Row>
                    <Row>
                        <Col sm={12} xl={6}><WeatherConditions data={data}/></Col>
                        <Col sm={12} xl={6}><Next24HoursForecast forecast24={data.forecast24}/></Col>
                    </Row>
                </>}
            </Container>
        </div>

    );
};

export default App;