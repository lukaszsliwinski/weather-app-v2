// import react components
import Row from 'react-bootstrap/Row';

// import components
import ConditionItem from './ConditionItem/ConditionItem';


function WeatherConditions({ data }) {
    return (
        <>
            <Row className=""><span className="frame-header">conditions</span></Row>
            <Row className="m-1 minh-9r pt-4 pb-3 bg-section">
                <ConditionItem title="max temp" icon="fa-solid fa-temperature-arrow-up" data={data.weather.max} unit="°C" />
                <ConditionItem title="min temp" icon="fa-solid fa-temperature-arrow-down" data={data.weather.min} unit="°C" />
                <ConditionItem title="sunrise" icon="fa-regular fa-sun" data={data.weather.sunrise} />
                <ConditionItem title="sunset" icon="fa-regular fa-moon" data={data.weather.sunset} />
                <ConditionItem title="wind speed" icon="fa-solid fa-location-arrow" data={data.weather.wind} unit="m/s" />
                <ConditionItem title="cloudiness" icon="fa-solid fa-cloud" data={data.weather.cloudiness} unit="%" />
                <ConditionItem title="pressure" icon="fa-solid fa-gauge-simple-high" data={data.weather.pressure} unit="hPa" />
                <ConditionItem title="humidity" icon="fa-solid fa-water" data={data.weather.humidity} unit="%" />
            </Row>
        </>
    );
};

export default WeatherConditions;