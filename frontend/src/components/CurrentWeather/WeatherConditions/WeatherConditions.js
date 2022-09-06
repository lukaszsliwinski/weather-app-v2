// import react components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import components
import ConditionItem from './ConditionItem/ConditionItem';


function WeatherConditions({ data }) {
    return (
        <>
            <Row className=""><span className="frame-header">conditions</span></Row>
            <Row className="my-2 border rounded p-3">
                <Col>
                    <ConditionItem title="max temp" icon="fa-solid fa-temperature-arrow-up" data={data.weather.max} unit="°C" />
                    <ConditionItem title="min temp" icon="fa-solid fa-temperature-arrow-down" data={data.weather.min} unit="°C" />
                </Col>
                <Col>
                    <ConditionItem title="sunrise" icon="fa-regular fa-sun" data={data.weather.sunrise} />
                    <ConditionItem title="sunset" icon="fa-regular fa-moon" data={data.weather.sunset} />
                </Col>
                <Col>
                    <ConditionItem title="wind speed" icon="fa-solid fa-location-arrow" data={data.weather.wind} unit=" m/s" />
                    <ConditionItem title="cloudiness" icon="fa-solid fa-cloud" data={data.weather.cloudiness} unit=" %" />
                </Col>
                <Col>
                    <ConditionItem title="pressure" icon="fa-solid fa-gauge-simple-high" data={data.weather.pressure} unit=" hPa" />
                    <ConditionItem title="humidity" icon="fa-solid fa-water" data={data.weather.humidity} unit=" %" />
                </Col>
            </Row>
        </>
    );
};

export default WeatherConditions;