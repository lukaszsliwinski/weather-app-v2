import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
        <Container fluid="sm" className="">
            <Row>
                <Col md={{ span: 10, offset: 1 }} className="">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup role="form" className="mb-3">
                            <Form.Control
                                placeholder="Enter a city"
                                aria-describedby="search-button"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                            />
                            <Button variant="" id="search-button">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>

            {!isEmpty(data)  && <Weather data={data} />}
        </Container>
    );
};

export default App;