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


function SearchInput({ query, setQuery, setData, setShow }) {
    const searchInput = useRef();

    // focus search input on hover
    const setFocus = (focus) => focus ? searchInput.current.focus() : searchInput.current.blur();

    // fetch weather data on form submit and handle error
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (typeof query !== 'string') {
            setShow(true);
        } else {
            const response = await axios.post('/api/weather', { city: query });
            (response.data.msg === 'error') ? setShow(true) : setData(response.data);
        };
    };

    return (
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group role="form" className="d-flex">
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
        </Row>
    );
};

export default SearchInput;