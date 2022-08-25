import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// import react components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import components
import Main from './components/Main';
import WeatherConditions from './components/WeatherConditions';
import Next24HoursForecast from './components/Next24HoursForecast';
import DailyForecast from './components/DailyForecast';

// import scss
import "./App.scss"; 

// add font awesome icons to library
library.add(fas, far);


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
        <Container fluid="sm" className="mt-4 border pt-3 px-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="">
                    <Form onSubmit={handleSubmit}>
                        <InputGroup role="form" className="mb-3">
                            <Form.Control
                                placeholder="Enter a city"
                                aria-describedby="search-button"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                            />
                            <Button variant="" id="search-button">
                                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
            {!isEmpty(data) && <Main data={data} />}
            {!isEmpty(data) && <WeatherConditions data={data}/>}
            {!isEmpty(data) && <Next24HoursForecast forecast24={data.forecast24}/>}
            {!isEmpty(data) && <DailyForecast forecast={data.forecast} forecastDetails={data.forecastDetails}/>}
        </Container>
    );
};

export default App;