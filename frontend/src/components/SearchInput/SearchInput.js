import { useRef } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// import react components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

// import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import scss
import "./searchInput.scss"; 


function SearchInput({ query, setQuery, setData, setShow, setBackground }) {
    const searchInput = useRef();

    // focus search input on hover
    const setFocus = (focus) => focus ? searchInput.current.focus() : searchInput.current.blur();

    // assing bakcground class name to weather icon
    const bgClasses = {
        '01d': 'bg-clear',
        '02d': 'bg-clouds',
        '03d': 'bg-clouds',
        '04d': 'bg-clouds',
        '09d': 'bg-rain',
        '10d': 'bg-rain',
        '11d': 'bg-rain',
        '13d': 'bg-snow',
        '50d': 'bg-mist',
        '01n': 'bg-clear',
        '02n': 'bg-clouds',
        '03n': 'bg-clouds',
        '04n': 'bg-clouds',
        '09n': 'bg-rain',
        '10n': 'bg-rain',
        '11n': 'bg-rain',
        '13n': 'bg-snow',
        '50n': 'bg-mist'
    };

    // fetch weather data on form submit and handle error
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
                setQuery("");
                setBackground(bgClasses[response.data.weather.iconCode]);
             };
        };
    };

    return (
        <Row>
            <Col xs={12} sm={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group role="form" className="d-flex justify-content-center justify-content-sm-start">
                        <FloatingLabel label="Enter a city" className="d-inline-block">
                            <Form.Control
                                ref={searchInput}
                                size="sm"
                                placeholder="Enter a city"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                onMouseEnter={() => setFocus(true)}
                                onMouseLeave={() => setFocus(false)}
                                required
                                className="mb-3 fs-5"
                            />
                        </FloatingLabel>
                        <Button type="submit" className="btn-hover d-inline-block border-0 fs-3 bg-transparent main-color">
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
            <Col className="d-none d-sm-flex justify-content-end">
                <h1 className="mt-3">Weather App 2.0</h1>
            </Col>
        </Row>
    );
};

export default SearchInput;