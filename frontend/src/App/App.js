import { useState, useRef } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// import react components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

// import font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import components
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

    const searchInput = useRef();

    // focus search input on hover
    const setFocus = (focus) => focus ? searchInput.current.focus() : searchInput.current.blur();

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
            setShow(true);
        } else {
            const response = await axios.post('/api/weather', { city: query });

            if (response.data.msg === 'error') {
                setShow(true);
            } else {
                setData(response.data);
            };
        };
    };

    return (
        <Container fluid="sm" className="mt-4 border pt-3 px-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group role="form" className="flex-row mb-3 text-secondary">
                            <FloatingLabel label="Enter a city">
                                <Form.Control
                                    ref={searchInput}
                                    size="sm"
                                    placeholder="Enter a city"
                                    value={query}
                                    onChange={e => setQuery(e.target.value)}
                                    onMouseEnter={() => setFocus(true)}
                                    onMouseLeave={() => setFocus(false)}
                                    required
                                    className="mb-2 fs-5"
                                />
                            </FloatingLabel>
                            <Button variant="outline-dark" type="submit" className="w-100 fw-bold">
                                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> Search
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            {alert && <AlertModal setShow={setShow} show={show} query={query}/>}
            {!isEmpty(data) && <Main data={data} />}
            {!isEmpty(data) && <WeatherConditions data={data}/>}
            {!isEmpty(data) && <Next24HoursForecast forecast24={data.forecast24}/>}
            {!isEmpty(data) && <DailyForecast forecast={data.forecast} forecastDetails={data.forecastDetails}/>}
        </Container>
    );
};

export default App;