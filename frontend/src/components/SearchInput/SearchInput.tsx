import { useRef } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// import react components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

import { IDataObject } from '../../types';


function SearchInput(
    { query, setQuery, setData, setShow }:
    { query: string, setQuery: (query: string) => void, setData: (data: IDataObject) => void, setShow: (show: boolean) => void }) {

    // fetch weather data on form submit and handle error
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (typeof query !== 'string') {
            setShow(true);
        } else {
            const response = await axios.post('/api/weather', { city: query });
            if (response.data.msg === 'error') {
                setShow(true);
             } else {
                setData(response.data);
                setQuery('');
             };
        };
    };

    return (
        <Row data-testid="search-input">
            <Col>
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <Form.Group role="form" className="d-flex justify-content-center justify-content-sm-start">
                        <FloatingLabel label="Enter a city" className="d-inline-block">
                            <Form.Control
                                size="sm"
                                placeholder="Enter a city"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                required
                                className="mb-3 fs-5"
                                data-testid="form-control"
                            />
                        </FloatingLabel>
                        <Button type="submit" className="btn-hover d-inline-block border-0 fs-3 bg-transparent main-color">
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    );
};

export default SearchInput;