import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import react components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import components
import SearchInput from '../SearchInput/SearchInput';
import AlertModal from '../AlertModal/AlertModal';
import Main from '../CurrentWeather/Main/Main';
import Next24HoursForecast from '../HourlyForecast/Next24HoursForecast/Next24HoursForecast';
import DailyForecast from '../DailyForecast/DailyForecast';

import './app.scss';

import { IDataObject } from '../../types';

function App() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState<IDataObject>();
    const [show, setShow] = useState(false);

    return (
        <div className='pt-xl-4 bg-clear'>
            <Container className="shadow-xl border rounded-xl mw-xr p-md-5 pt-md-2 pb-2 bg-app main-color" style={{ width: "35rem" }}>
                <AlertModal setShow={setShow} show={show} query={query}/>
                <SearchInput query={query} setQuery={setQuery} setData={setData} setShow={setShow} />
                {data && <>
                    <Row>
                        <Col sm={12}><Main data={data} /></Col>
                        <Col sm={12}><Next24HoursForecast forecast24={data.forecast24}/></Col>
                        <Col sm={12}><DailyForecast forecast={data.forecast} forecastDetails={data.forecastDetails}/></Col>
                    </Row>
                </>}
            </Container>
        </div>

    );
};

export default App;